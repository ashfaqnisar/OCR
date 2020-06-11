import React from 'react';
import { Grid, Container } from '@material-ui/core';

const UploadForm = () => {
  return (
    <Container maxWidth={'xl'}>
      <Grid container justify={'flex-start'} alignItems={'center'}>
        <h3 className="page-title">Upload Form</h3>
      </Grid>
    </Container>
  );
};

export default UploadForm;
