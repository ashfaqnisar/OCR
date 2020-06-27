import React, { useState } from 'react';
import { LogoLoading } from '../../../shared/components/LogoLoading';
import { Link, useHistory } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';
import { Grid, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LoginForm } from './components';
import { Alert } from '@material-ui/lab';
import { isBlank } from '../../../shared/components/Beautifier';
import Typography from '@material-ui/core/Typography';

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

  const signInUser = (email, password) => {
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
    signInUser(email, password);
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
          spacing={4}
        >
          <Hidden only={['lg', 'xl']}>
            <Grid item container justify={'center'}>
              <h1 className={classes.headingBlack}>
                ES<span className={classes.headingPrimary}>OCR</span>
              </h1>
            </Grid>
          </Hidden>
          <Grid item>
            <h3>Welcome Back</h3>
            <h5>Sign In to continue</h5>
          </Grid>
          {!isBlank(error) ? (
            <Grid item container justify={'center'}>
              <Alert variant={'filled'} severity={'error'}>
                {error}
              </Alert>
            </Grid>
          ) : (
            <></>
          )}
          <Grid item container direction={'column'}>
            <LoginForm handleUserLogin={onSubmitFireBase} />
          </Grid>
          <Grid item>
            <h5>
              Don't have an account? <Link to={'/register'}>Register</Link>
            </h5>
          </Grid>
          <Hidden only={['lg', 'xl']}>
            <Grid
              item
              style={{ marginTop: '10px' }}
              container
              justify={'center'}
            >
              <Typography variant={'subtitle1'} align={'center'}>
                Developed with ♥ for Exact Sciences
              </Typography>
            </Grid>
          </Hidden>
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
          direction={'column'}
        >
          <Grid
            item
            xs
            sm
            md
            lg={9}
            xl={9}
            container
            alignItems={'center'}
            justify={'center'}
          >
            <Grid item>
              <h1 className={classes.heading}>
                <span className={classes.headingBlack}>ES</span>OCR
              </h1>
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              variant={'subtitle1'}
              style={{ color: 'white' }}
              align={'center'}
            >
              Developed with ♥ for Exact Sciences
            </Typography>
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default Login;
