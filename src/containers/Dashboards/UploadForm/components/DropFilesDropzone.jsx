import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderDropZoneMultipleField from './UploadDropzone';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const DropFilesDropzone = ({ handleSubmit }) => {
  return (
    <form className={'form'} onSubmit={handleSubmit}>
      <Grid container direction={'column'} spacing={2}>
        <Grid item>
          <Field name={'files'} component={renderDropZoneMultipleField} />
        </Grid>
        <Grid item>
          <Button color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default reduxForm({
  form: 'drop_files_form'
})(DropFilesDropzone);
