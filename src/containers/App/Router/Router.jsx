import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainWrapper from '../MainWrapper';

import { WrappedRoutes } from './WrappedRoutes';

import { Login, Register, Error404 } from '../../Account';

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/404" component={Error404} />
        <Route path="/" component={WrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
