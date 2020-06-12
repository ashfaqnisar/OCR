import React, { useState } from 'react';
import { LogoLoading } from '../../../shared/components/LogoLoading';

import { Link, useHistory } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LoginFormik from './components/LoginFormik';

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: '100vh'
  },
  logoComponent: {
    backgroundColor: theme.palette.primary.main
  },
  heading: {
    fontWeight: 700,
    color: `${theme.colors.white} !important`
  },
  headingBlack: {
    fontWeight: 700,
    color: `${theme.colors.black} !important`
  }
}));

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();
  const firebase = useFirebase();
  const classes = useStyles();

  const signInWithGoogle = (email, password) => {
    setLoading(true);
    firebase
      .login({
        email: email,
        password: password
      })
      .then(() => {
        setLoading(false);
        history.push('/home');
      })
      .catch(err => {
        setLoading(false);
        setError(err.message);
      });
  };

  const onSubmitFireBase = ({ email, password }) => {
    event.preventDefault();
    signInWithGoogle(email, password);
  };

  return loading ? (
    <LogoLoading />
  ) : (
    <Grid container className={classes.container} justify={'center'}>
      <Grid
        item
        xs={12}
        sm
        md
        lg
        xl
        container
        justify={'center'}
        alignItems={'center'}
      >
        <Grid
          item
          container
          lg={8}
          xl={8}
          alignItems={'flex-start'}
          justify={'center'}
          direction={'column'}
          spacing={3}
        >
          <Grid item>
            <h3 style={{ fontWeight: 'bold' }}>Welcome Back</h3>
            <h5>Sign In to continue</h5>
          </Grid>

          <LoginFormik />

          <Grid item>
            <h5>
              Don't have an account? <Link to={'/register'}>Register</Link>
            </h5>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm
        md
        lg
        xl
        className={classes.logoComponent}
        container
        justify={'center'}
        alignItems={'center'}
      >
        <Grid item>
          <h1 className={classes.heading}>
            <span className={classes.headingBlack}>ES</span>OCR
          </h1>
        </Grid>
      </Grid>
    </Grid>
    /*<div className="account account--not-photo">
              <div className="account__wrapper">
                <div className="account__card">
                  <div className="account__head">
                    <div className="account__title text-center">
                      <img
                        style={{ align: 'center', width: '50%' }}
                        src={logo}
                        alt="Logo"
                      />
                      <span className="account__logo" />
                    </div>
                  </div>
                  <LoginForm
                    onSubmit={onSubmitFireBase}
                    errorMessage={error}
                    form="log_in_form"
                  />
                </div>
              </div>
            </div>*/
  );
};

export default Login;
