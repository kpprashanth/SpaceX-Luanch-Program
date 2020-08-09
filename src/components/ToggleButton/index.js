import React, { memo } from 'react';
import './ToggleButton.css';
import { useHistory } from 'react-router-dom';

const defaultInactiveStyle = {
  backgroundColor: '#eee',
  color: '#000',
};
const defaultActiveStyle = {
  backgroundColor: '#0091ea',
  color: '#fff',
};

const SelectableButton = (props) => {
  const { isActive, onClick, type } = props;
  let history = useHistory();

  const title = props.title || 'Button';
  const handleClick = () => {
    const value = isActive ? null : title;
    let newLocation = isActive ? removeQuery(type) : addQuery(type, value);
    history.push(newLocation);
    onClick(value);
  };

  const addQuery = (name, value) => {
    let searchStrig = `${name}=${value}`;
    let location = Object.assign({}, history.location);
    location = removeQuery(name);
    location.search =
      location.search.indexOf('=') !== -1 ? location.search + '&' + searchStrig : location.search + searchStrig;
    return location;
  };

  const removeQuery = (queryName) => {
    let location = Object.assign({}, history.location);

    if (location.search.indexOf('=') !== -1) {
      let searchQuery = location.search.split('?')[1];
      let searchQueryArray = searchQuery.split('&');
      let updatedSearchQueryArray = searchQueryArray.filter((query) => {
        return !(query.indexOf(queryName) !== -1);
      });
      location.search = '?' + updatedSearchQueryArray.join('&');
    }
    return location;
  };

  return (
    <button
      className="selectable-button "
      aria-label={`Year ${title}`}
      style={
        isActive ? { ...defaultActiveStyle, ...props.activeStyle } : { ...defaultInactiveStyle, ...props.inActiveStyle }
      }
      aria-pressed={isActive}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default memo(SelectableButton);
