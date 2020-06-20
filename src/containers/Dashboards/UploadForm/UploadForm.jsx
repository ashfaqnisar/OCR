import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Button } from '@material-ui/core';
import { DropFilesDropzone } from './components';
import { useSelector } from 'react-redux';
import { axios } from '../../../config';
import { useHistory } from 'react-router';

const UploadForm = () => {
  const history = useHistory();
  const [processingStatus, setProcessingStatus] = useState('Initial');
  const [processingFileCount, setProcessingFileCount] = useState(0);
  const files = useSelector(state =>
    state.form.drop_files_form && state.form.drop_files_form.values
      ? state.form.drop_files_form.values.files
      : []
  );
  const { uid } = useSelector(state => state.firebase.auth);
  useEffect(() => {
    if (files.length > 0 && files.length === processingFileCount) {
      setProcessingStatus('Processed');
    }
  }, [processingFileCount]);

  const postFiles = () => {
    setProcessingStatus('Processing');
    files.map((file, index) => {
      const formData = new FormData();
      formData.append('file', file);
      axios({
        method: 'POST',
        url: `/ocr/?uid=${uid}`,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(() => {
        setProcessingFileCount(++index);
      });
    });
  };

  return (
    <Container maxWidth={'xl'}>
      <Typography variant={'h4'}>Upload Form</Typography>
      <Box my={2}>
        <DropFilesDropzone />
      </Box>
      <Button
        color="primary"
        variant={'contained'}
        disabled={files.length < 1 || processingStatus === 'Processing'}
        onClick={postFiles}
      >
        Process Files
      </Button>
      {!(processingStatus === 'Initial') && (
        <Box my={2}>
          <Grid container direction={'column'} justify={'center'}>
            <Grid item>
              <Typography variant={'subtitle1'}>
                {processingStatus} {processingFileCount} of {files.length}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      )}
      {processingStatus === 'Processed' && (
        <Button color="primary" onClick={() => history.push('/forms')}>
          Go To Forms
        </Button>
      )}
    </Container>
  );
};

export default UploadForm;
