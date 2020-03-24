import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { Routes } from '../../constants';
import Home from '../../screens/Home';

import Route from './components/Route';

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path={Routes.HOME} component={Home} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
