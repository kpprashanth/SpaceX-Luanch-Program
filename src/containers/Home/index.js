import React, { useEffect, useState, memo, useRef, useReducer } from 'react';
import './Home.css';
import FilterSection from '../../components/Filter';
import CustomCard from '../../components/CustomCard';
import axios from 'axios';
import Loader from 'react-loader';
import FallBack from '../../components/Fallback';
import { useHistory } from 'react-router-dom';

const BASE_URL = 'https://api.spaceXdata.com/v3/launches';

const getAllYears = (start, end) => {
  let listYears = [];

  for (let i = start; i <= end; i++) {
    listYears.push(String(i));
  }
  return listYears;
};

const years = getAllYears(2009, 2020);

const fetchData = async (launchYear, successfulLaunch, successfulLand) => {
  var missions = [];
  var data = { limit: 100 };
  if (launchYear) data['launch_year'] = launchYear;
  if (successfulLaunch) data['launch_success'] = successfulLaunch === 'True' ? 'true' : 'false';
  if (successfulLand) data['land_success'] = successfulLand === 'True' ? 'true' : 'false';

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

const Home = (props) => {
  let history = useHistory();
  const firstUpdate = useRef(true);

  const [launches, setLaunches] = useState([]);
  const [launchYear, setLaunchYear] = useState(null);
  const [successfulLaunch, setSuccessfulLaunch] = useState(null);
  const [successfulLand, setSuccessfulLand] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  console.log(launches);

  const updateFilter = (key, value) => {
    firstUpdate.current = false;
    switch (key) {
      case 'LaunchYear': {
        setLaunchYear(value);
        break;
      }
      case 'SuccessfulLaunch': {
        setSuccessfulLaunch(value);
        break;
      }
      case 'SuccessfulLand': {
        setSuccessfulLand(value);
        break;
      }

      default:
        return null;
    }
  };

  const reset = () => {
    let location = Object.assign({}, history.location);
    location.search = '';
    history.replace(location);
    setLaunchYear(null);
    setSuccessfulLaunch(null);
    setSuccessfulLand(null);
  };

  useEffect(() => {
    const { launches, year, launch, land } = window.__INITIAL_DATA__;

    setLaunches(launches);
    setLaunchYear(year);
    setSuccessfulLaunch(launch);
    setSuccessfulLand(land);
    setDataLoaded(true);
  }, []);

  useEffect(() => {
    if (firstUpdate.current) {
      return;
    }
    async function update() {
      setDataLoaded(false);
      var missionsList = await fetchData(launchYear, successfulLaunch, successfulLand);
      setLaunches(missionsList);
      setDataLoaded(true);
    }
    update();
  }, [launchYear, successfulLand, successfulLaunch]);

  return (
    <section className="main">
      <header className="App-header col-s-12 col-m-12 col-l-12 ">
        <h1> SpaceX Launch Program</h1>
      </header>
      <div className="col-s-12 col-m-12 col-l-12  main-content">
        <div className="filter-section col-s-3 col-m-2 col-l-2 ">
          <FilterSection
            updateFilter={updateFilter}
            launchYear={launchYear}
            successfulLaunch={successfulLaunch}
            successfulLand={successfulLand}
            years={years}
            reset={reset}
          />
        </div>

        <div className="card-section-container col-s-8 col-m-10 col-l-12 ">
          <Loader loaded={dataLoaded}>
            {launches.length ? (
              <div className="card-section">
                {launches.map((launch) => {
                  return <CustomCard data={launch} />;
                })}
              </div>
            ) : (
              <FallBack />
            )}
          </Loader>
        </div>
      </div>
    </section>
  );
};

export default memo(Home);
