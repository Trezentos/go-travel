import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RegisterTrip from './pages/RegisterTrip';
import TripList from './pages/TripList';

function Routes() {
  return (
    <BrowserRouter>
      <Route component={LandingPage} exact path="/" />
      <Route component={RegisterTrip} path="/register" />
      <Route component={TripList} path="/trip-list" />
    </BrowserRouter>
  );
}

export default Routes;
