import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import { Layout } from '../../../Layout';
import { Home, Forms, Settings } from '../../../Dashboards';

export default () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Switch>
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/forms" component={Forms} />
        <PrivateRoute path="/settings" component={Settings} />
        <Redirect from={'*'} to={'/404'} />
      </Switch>
    </div>
  </div>
);
