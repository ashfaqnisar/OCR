import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Layout } from '../../../Layout';
import { Home, Forms, Settings } from '../../../Dashboards';

export default () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/forms" component={Forms} />
        <Route path="/settings" component={Settings} />
        <Redirect from={'*'} to={'/404'} />
      </Switch>
    </div>
  </div>
);
