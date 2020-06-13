import React from 'react';
import { Box, Container, Grid, Paper } from '@material-ui/core';
import Dropzone from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  dropzoneComponent: {
    height: '200px',
    border: `1px dashed ${theme.colors.black}`,
    padding: '0px',
    cursor: 'pointer'
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
        <Grid item>
          <Paper variant={'outlined'}>
            <Box p={2}>
              <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                {({ getRootProps, getInputProps }) => (
                  <Grid
                    item
                    container
                    justify={'center'}
                    alignItems={'center'}
                    {...getRootProps()}
                    className={classes.dropzoneComponent}
                  >
                    <input {...getInputProps()} />
                    <h3>Drop Files Here</h3>
                  </Grid>
                )}
              </Dropzone>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UploadForm;
