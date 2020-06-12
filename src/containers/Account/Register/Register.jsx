import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LogoLoading } from '../../../shared/components/LogoLoading';
import { useFirebase } from 'react-redux-firebase';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Hidden } from '@material-ui/core';
import { isBlank } from '../../../shared/components/Beautifier';
import { Alert } from '@material-ui/lab';
import { RegisterForm } from './components';

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: '100vh'
  },
  formComponent: {
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

const Register = () => {
  const firebase = useFirebase();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const classes = useStyles();
  const history = useHistory();
  const createNewUser = ({ email, password, firstName, lastName }) => {
    const name = `${firstName} ${lastName}`;
    setLoading(true);
    firebase
      .createUser({ email, password }, { name, email })
      .then(() => {
        setLoading(false);
        history.push('/home');
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
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
          className={classes.formComponent}
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
            <h3>Create an Account</h3>
            <h5>Please provide the below details to continue</h5>
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
            <RegisterForm handleSubmit={createNewUser} />
          </Grid>
          <Grid item>
            <h5>
              Already have an account? <Link to={'/login'}>Login</Link>
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
  );
};

export default Register;
