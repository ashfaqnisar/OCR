import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { isLoaded, isEmpty } from 'react-redux-firebase';

const PrivateRoute = ({ component, ...otherProps }) => {
  const auth = useSelector(state => state.firebase.auth);
  return (
    <Route
      {...otherProps}
      render={({ location }) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          component
        ) : (
          <Redirect to={{ pathname: '/', state: { from: location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
