import React from 'react';
import { TextField, Grid } from '@material-ui/core';

const LoginFormik = () => {
  return (
    <Grid item container direction={'column'} spacing={2}>
      <Grid item container>
        <TextField variant={'outlined'} label={'Email'} fullWidth />
      </Grid>
      <Grid item container>
        <TextField variant={'outlined'} label={'Password'} fullWidth />
      </Grid>
    </Grid>
  );
};

export default LoginFormik;
