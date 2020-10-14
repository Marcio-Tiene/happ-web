import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import OrphanagesMaps from './pages/OrphanagesMaps';

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={LandingPage} exact />
          <Route path='/app' component={OrphanagesMaps} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
