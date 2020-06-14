import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderDropZoneMultipleField from './UploadDropzone';
import { Button } from '@material-ui/core';

const DropFilesDropzone = ({ handleSubmit }) => {
  return (
    <form className={'form'} onSubmit={handleSubmit}>
      <Field name={'files'} component={renderDropZoneMultipleField} />
      <Button color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default reduxForm({
  form: 'drop_files_form'
})(DropFilesDropzone);
