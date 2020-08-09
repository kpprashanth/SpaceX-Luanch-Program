import React, { memo } from 'react';
import './CustomCard.css';

const CustomCard = (props) => {
  const { launchYear, launchSuccess, landSuccess, missionName, flightNumber, imageURL, missionId } = props.data;
  var launch = launchSuccess ? 'Success' : 'Failed';
  var land = landSuccess ? 'Success' : 'Failed';
  if (landSuccess === null) {
    land = 'NA';
  }
  if (launchSuccess === null) {
    launch = 'NA';
  }

  const getMissionIds = () => {
    if (missionId.length) {
      var result = missionId.map((mission_id) => {
        return <li className="grey-text">{mission_id}</li>;
      });

      return result;
    } else {
      return <li className="grey-text">empty</li>;
    }
  };

  return (
    <div className="card" role={missionName}>
      <div className="image-container">
        <img
          src={imageURL}
          height={150}
          width={150}
          aria-hidden
          alt={`Image of a Rocket or Satellite which is named as ${missionName}`}
        ></img>
      </div>

      <p>
        <strong className="blue-text">{`${missionName} : #${flightNumber}`} </strong>
      </p>

      <table>
        <thead style={{ display: 'none' }}>
          <tr>
            <th scope="col">Mission Property</th>
            <th scope="col">value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>Mission Ids</strong>
            </td>
            <td>
              <ul>{getMissionIds()}</ul>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Launch Year:</strong>
            </td>
            <td className="blue-text">{`${launchYear}`}</td>
          </tr>
          <tr>
            <td>
              <strong>Successful Launch</strong>
            </td>
            <td className="blue-text">{launch}</td>
          </tr>
          <tr>
            <td>
              <strong>Successful Landing:</strong>
            </td>
            <td className="blue-text">{land}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default memo(CustomCard);
