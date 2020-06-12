import React from 'react';
import { TextField, Grid, Button } from '@material-ui/core';

const LoginFormik = () => {
  return (
    <Grid item container direction={'column'} spacing={2}>
      <Grid item container>
        <TextField
          variant={'outlined'}
          label={'Email'}
          size={'small'}
          fullWidth
        />
      </Grid>
      <Grid item container>
        <TextField
          variant={'outlined'}
          label={'Password'}
          size={'small'}
          fullWidth
        />
      </Grid>
      <Grid item>
        <Button variant={'contained'} color={'primary'} fullWidth>
          Sign In
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginFormik;
