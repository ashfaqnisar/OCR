import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { DropFilesDropzone } from './components';

const UploadForm = () => {
  const showValues = values => {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  };

  return (
    <Container maxWidth={'xl'}>
      <Grid container justify={'center'} direction={'column'} spacing={2}>
        <Grid item>
          <h3 className="page-title">Upload Form</h3>
        </Grid>
        <Grid item xs sm md lg xl>
          <DropFilesDropzone onSubmit={showValues} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default UploadForm;
