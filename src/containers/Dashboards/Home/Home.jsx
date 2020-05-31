import React from 'react';
import { Grid, Container } from '@material-ui/core';

const Home = () => {
  return (
    <Container maxWidth={12}>
      <Grid container justify={'flex-start'} alignItems={'center'}>
        <h3 className="page-title">Home</h3>
      </Grid>
    </Container>
  );
};

export default Home;
