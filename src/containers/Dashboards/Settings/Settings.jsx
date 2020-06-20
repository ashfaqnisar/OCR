import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';

const Settings = () => {
  return (
    <Container maxWidth={'xl'}>
      <Grid container justify={'flex-start'} alignItems={'center'}>
        <Typography variant={'h4'}>Settings</Typography>
      </Grid>
    </Container>
  );
};

export default Settings;
