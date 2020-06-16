import React from 'react';
import { Box, Container } from '@material-ui/core';
import { DropFilesDropzone } from './components';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { axios } from '../../../config';

const UploadForm = () => {
  const files = useSelector(state =>
    state.form.drop_files_form && state.form.drop_files_form.values
      ? state.form.drop_files_form.values.files
      : []
  );
  const { uid } = useSelector(state => state.firebase.auth);

  const postFiles = () => {
    const formData = new FormData();
    formData.append('file', files[0]);
    axios({
      method: 'POST',
      url: `/ocr/?uid=${uid}`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  };
  const showValues = values => {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  };

  return (
    <Container maxWidth={'xl'}>
      <h3 className="page-title">Upload Form</h3>
      <Box my={2}>
        <DropFilesDropzone onSubmit={showValues} />
      </Box>
      <Button
        color="primary"
        variant={'contained'}
        disabled={files.length < 1}
        onClick={postFiles}
      >
        Process Files
      </Button>
    </Container>
  );
};

export default UploadForm;
