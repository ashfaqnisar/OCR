import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderDropZoneMultipleField from './UploadDropzone';

const DropFilesDropzone = () => {
  return <Field name={'files'} component={renderDropZoneMultipleField} />;
};

export default reduxForm({
  form: 'drop_files_form'
})(DropFilesDropzone);
