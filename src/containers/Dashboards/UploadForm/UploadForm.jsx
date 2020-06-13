import React, { useState } from 'react';
import { Box, Container, Grid, Paper } from '@material-ui/core';
import Dropzone from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  dropzoneComponent: {
    height: '200px',
    border: `1px dashed ${theme.colors.black}`,
    cursor: 'pointer'
  }
}));

const UploadForm = () => {
  const classes = useStyles();
  const [files, setFiles] = useState([]);

  const handleDroppedFiles = droppedFiles => {
    setFiles([...files, ...droppedFiles]);
  };

  return (
    <Container maxWidth={'xl'}>
      <Grid container justify={'center'} spacing={2} direction={'column'}>
        <Grid item>
          <h3 className="page-title">Upload Form</h3>
        </Grid>
        <Grid item>
          <Paper variant={'outlined'}>
            <Box p={1}>
              <Dropzone
                className="dropzone__input"
                onDrop={handleDroppedFiles}
                name={'files'}
                multiple
              >
                {({ getRootProps, getInputProps }) => (
                  <Grid
                    container
                    justify={'center'}
                    alignItems={'center'}
                    className={classes.dropzoneComponent}
                    {...getRootProps()}
                  >
                    {(!files || files.length === 0) && (
                      <Grid item>
                        <h3>Drop Files Here</h3>
                      </Grid>
                    )}

                    <input {...getInputProps()} />
                  </Grid>
                )}
              </Dropzone>
            </Box>
          </Paper>

          {files.length > 0 && (
            <Grid item container spacing={2}>
              {files.map((file, index) => (
                <Grid item key={index} style={{ zIndex: '1000' }}>
                  {file.name}
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default UploadForm;
