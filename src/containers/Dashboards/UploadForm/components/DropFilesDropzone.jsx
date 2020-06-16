import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderDropZoneMultipleField from './UploadDropzone';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
  }
}));
const DropFilesDropzone = ({ handleSubmit }) => {
  const classes = useStyles();
  return <Field name={'files'} component={renderDropZoneMultipleField} />;
};

export default reduxForm({
  form: 'drop_files_form'
})(DropFilesDropzone);
