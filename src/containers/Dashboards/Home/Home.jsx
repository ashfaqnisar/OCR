import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';

const Home = () => {
  return (
    <Container maxWidth={'xl'}>
      <Grid container justify={'flex-start'} alignItems={'center'}>
        <Typography variant={'h4'}>Home</Typography>
      </Grid>
    </Container>
  );
};

export default Home;
