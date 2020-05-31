import React from 'react';
import { Link } from 'react-router-dom';

const NotFound404 = () => (
  <div className="not-found">
    <div className="not-found__content">
      <h1 className="not-found__404">404</h1>
      <h3 className="not-found__info">
        Ooops! The page you are looking for could not be found :(
      </h3>
      <Link className="btn btn-primary" to="/login">
        Back To Login
      </Link>
    </div>
  </div>
);

export default NotFound404;
