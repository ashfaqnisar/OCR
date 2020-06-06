import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { isLoaded, isEmpty } from 'react-redux-firebase';

const PrivateRoute = ({ component: Component, ...otherProps }) => {
  const auth = useSelector(state => state.firebase.auth);
  return (
    <Route
      {...otherProps}
      render={props =>
        isLoaded(auth) && !isEmpty(auth) ? (
          <Component {...props} />
        ) : (
          <Redirect to={'/'} />
        )
      }
    />
  );
};

export default PrivateRoute;
