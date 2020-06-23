import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';

const Home = () => {
  return (
    <Container maxWidth={'xl'}>
      <Grid
        container
        justify={'center'}
        alignItems={'flex-start'}
        direction={'column'}
        spacing={2}
      >
        <Grid item>
          <Typography variant={'h4'}>Home</Typography>
        </Grid>
        <Grid item container spacing xs sm md lg xl></Grid>
      </Grid>
    </Container>
  );
};

export default Home;
