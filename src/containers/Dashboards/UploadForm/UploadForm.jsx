import React, { useState } from 'react';
import { Box, Container, Grid, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DropFilesDropzone from './components/DropFilesDropzone';

const useStyles = makeStyles(theme => ({
  dropzoneComponent: {
    height: '100px',
    border: `1px dashed ${theme.colors.black}`
  }
}));

const UploadForm = () => {
  const classes = useStyles();
  const showValues = values => {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  };

  return (
    <Container maxWidth={'xl'}>
      <Grid container justify={'center'} spacing={2} direction={'column'}>
        <Grid item>
          <h3 className="page-title">Upload Form</h3>
        </Grid>
        <Grid item lg>
          <DropFilesDropzone onSubmit={showValues} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default UploadForm;
