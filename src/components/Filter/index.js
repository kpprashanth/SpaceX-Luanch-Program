import React, { memo } from 'react';
import Divider from '../Divider';
import ToggleButton from '../ToggleButton';
import './Filter.css';

const activeButtonStyle = { backgroundColor: '#7aba01', color: '#000' };
const inActiveButtonStyle = { backgroundColor: '#c3e09b', color: '#000' };
const defaultStyle = { padding: '1px', margin: '1px' };
const defaultHeaderStyle = { padding: '1px', margin: '1px' };

const getRows = (list, selectedYear, updateFilter) => {
  let rows = [];
  var index = 0;

  while (index < list.length) {
    index += 2;
    if (index > list.length) {
      rows.push(
        <div className="button-row" key={index}>
          <ToggleButton
            role="launch year"
            title={list[list.length - 1]}
            activeStyle={activeButtonStyle}
            inActiveStyle={inActiveButtonStyle}
            isActive={selectedYear === list[list.length - 1]}
            onClick={updateFilter.bind(null, 'LaunchYear')}
            type="year"
          />
        </div>,
      );
    } else {
      rows.push(
        <div className="button-row" key={index}>
          <ToggleButton
            role="launch year"
            title={list[index - 2]}
            activeStyle={activeButtonStyle}
            inActiveStyle={inActiveButtonStyle}
            isActive={selectedYear === list[index - 2]}
            onClick={updateFilter.bind(null, 'LaunchYear')}
            type="year"
          />
          <ToggleButton
            role="launch year"
            title={list[index - 1]}
            activeStyle={activeButtonStyle}
            inActiveStyle={inActiveButtonStyle}
            isActive={selectedYear === list[index - 1]}
            onClick={updateFilter.bind(null, 'LaunchYear')}
            type="year"
          />
        </div>,
      );
    }
  }

  return rows;
};

const FilterSection = (props) => {
  const { launchYear, successfulLaunch, successfulLand, updateFilter, reset, years } = props;

  return (
    <aside style={defaultStyle} className="">
      <div className="filter">
        <header className="H3-header">
          <h3 style={defaultHeaderStyle}>Launch Year</h3>
        </header>

        <Divider />
        {getRows(years, launchYear, updateFilter)}
      </div>

      <div className="filter">
        <header className="H3-header">
          <h3 style={defaultHeaderStyle}>Successful Launch</h3>
        </header>
        <Divider />
        <div className="button-row">
          <ToggleButton
            role="launch status"
            title={'True'}
            activeStyle={activeButtonStyle}
            inActiveStyle={inActiveButtonStyle}
            isActive={successfulLaunch === 'True'}
            onClick={updateFilter.bind(null, 'SuccessfulLaunch')}
            type="launch"
          />
          <ToggleButton
            role="launch status"
            title={'False'}
            activeStyle={activeButtonStyle}
            inActiveStyle={inActiveButtonStyle}
            isActive={successfulLaunch === 'False'}
            onClick={updateFilter.bind(null, 'SuccessfulLaunch')}
            type="launch"
          />
        </div>
      </div>

      <div className="filter">
        <header className="H3-header">
          <h3 style={defaultHeaderStyle}>Successful Landing</h3>
        </header>
        <Divider />
        <div className="button-row">
          <ToggleButton
            role="land status"
            title={'True'}
            activeStyle={activeButtonStyle}
            inActiveStyle={inActiveButtonStyle}
            isActive={successfulLand === 'True'}
            onClick={updateFilter.bind(null, 'SuccessfulLand')}
            type="land"
          />
          <ToggleButton
            role="land status"
            title={'False'}
            activeStyle={activeButtonStyle}
            inActiveStyle={inActiveButtonStyle}
            isActive={successfulLand === 'False'}
            onClick={updateFilter.bind(null, 'SuccessfulLand')}
            type="land"
          />
        </div>
      </div>
      <Divider />
      <button className="link-button" onClick={reset}>
        Reset All
      </button>
    </aside>
  );
};

export default memo(FilterSection);
