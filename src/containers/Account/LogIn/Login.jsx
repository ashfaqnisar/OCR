import React, { useState } from 'react';
import { LogoLoading } from '../../../shared/components/LogoLoading';

import { Link, useHistory } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';
import { Grid, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LoginForm from './components/LoginForm';

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: '100vh'
  },
  loginComponent: {
    padding: theme.spacing(1)
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
  },
  headingPrimary: {
    fontWeight: 700,
    color: `${theme.colors.primary} !important`
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
    <Grid container className={classes.container}>
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
          className={classes.loginComponent}
          xs={12}
          lg={8}
          xl={7}
          alignItems={'flex-start'}
          justify={'center'}
          direction={'column'}
          spacing={3}
        >
          <Hidden only={['lg', 'xl']}>
            <Grid item container justify={'center'}>
              <h1 className={classes.headingBlack}>
                ES<span className={classes.headingPrimary}>OCR</span>
              </h1>
            </Grid>
          </Hidden>

          <Grid item>
            <h3 style={{ fontWeight: 'bold' }}>Welcome Back</h3>
            <h5>Sign In to continue</h5>
          </Grid>

          <Grid item container direction={'column'} spacing={2}>
            <LoginForm handleSubmit={onSubmitFireBase} />
          </Grid>

          <Grid item>
            <h5>
              Don't have an account? <Link to={'/register'}>Register</Link>
            </h5>
          </Grid>
        </Grid>
      </Grid>
      <Hidden only={['xs', 'sm', 'md']}>
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
      </Hidden>
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
