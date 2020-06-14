import React, { useState } from 'react';
import { Box, Container, Grid, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Field, reduxForm } from 'redux-form';
import renderDropZoneMultipleField from './components/UploadDropzone';

const useStyles = makeStyles(theme => ({
  dropzoneComponent: {
    height: '100px',
    border: `1px dashed ${theme.colors.black}`
  }
}));

const UploadForm = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={'xl'}>
      <Grid container justify={'center'} spacing={2} direction={'column'}>
        <Grid item>
          <h3 className="page-title">Upload Form</h3>
        </Grid>
        <Grid item lg>
          <form className={'form'} onSubmit={() => console.log('submitterd')}>
            <Field name={'files'} component={renderDropZoneMultipleField} />
            <Button color="primary" type="submit">
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default reduxForm({
  form: 'drop_files_form'
})(UploadForm);
