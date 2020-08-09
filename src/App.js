import React from 'react';
import './App.css';
import Home from './containers/Home';
import { Route } from 'react-router-dom';

export default (props) => {
  return (
    <div className="App">
      <Route path="/">
        <Home initialData={props.initialData} />
      </Route>
    </div>
  );
};
