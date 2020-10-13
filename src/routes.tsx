import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={LandingPage} exact />
          <Route path='/' component={LandingPage} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
