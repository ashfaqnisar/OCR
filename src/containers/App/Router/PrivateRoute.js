import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { isLoaded, isEmpty } from 'react-redux-firebase';

const PrivateRoute = ({ component: Component, path, ...otherProps }) => {
  const auth = useSelector(state => state.firebase.auth);
  return (
    <Route
      path={path}
      {...otherProps}
      render={props =>
        isLoaded(auth) && !isEmpty(auth) ? (
          <Component {...props} />
        ) : (
          <Redirect to={'/login'} />
        )
      }
    />
  );
};

export default PrivateRoute;
