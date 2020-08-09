import path from 'path';
import fs from 'fs';
import axios from 'axios';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';
import { StaticRouter } from 'react-router-dom';

import serialize from 'serialize-javascript';

const PORT = process.env.PORT || 3006;
const app = express();

// ...
const BASE_URL = 'https://api.spaceXdata.com/v3/launches';

const getData = async (year = null, launch = null, land = null) => {
  var missions = [];
  var data = { limit: 100 };
  if (year) data['launch_year'] = year;
  if (launch) data['launch_success'] = launch === 'True' || launch === 'true' ? 'true' : 'false';
  if (land) data['land_success'] = land === 'True' || launch === 'true' ? 'true' : 'false';

  try {
    var response = await axios.get(BASE_URL, { params: data });

    response.data &&
      response.data.forEach((mission) => {
        let launch = {};
        launch['missionName'] = mission.mission_name ? mission.mission_name : '';
        launch['flightNumber'] = mission.flight_number ? mission.flight_number : '';
        launch['launchYear'] = mission.launch_year ? mission.launch_year : '';
        launch['launchSuccess'] = mission.launch_success !== undefined ? mission.launch_success : '';
        launch['missionId'] = mission.mission_id ? mission.mission_id : [];
        launch['imageURL'] = mission.links ? mission.links.mission_patch_small : '';

        mission.rocket &&
          mission.rocket.first_stage &&
          mission.rocket.first_stage.cores &&
          mission.rocket.first_stage.cores.forEach((core) => {
            launch['landSuccess'] = core.land_success !== undefined ? core.land_success : '';
          });
        missions.push(launch);
      });
  } catch (e) {
    console.log(e);
  }

  return missions;
};

app.get('/', async (req, res) => {
  const { year, launch, land } = req.query;
  const launches = await getData(year, launch, land);

  const initialData = { launches, year, launch, land };

  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App initialData={initialData} />
    </StaticRouter>,
  );

  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<script>window.__INITIAL_DATA__ = 
${serialize(initialData)}</script><div id="root">${app}</div>`,
      ),
    );
  });
});

app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
