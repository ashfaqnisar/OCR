import React, { useState } from 'react';
import { Box, Container, Grid, Paper } from '@material-ui/core';
import Dropzone from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  dropzoneComponent: {
    height: '100px',
    border: `1px dashed ${theme.colors.black}`
  }
}));

const UploadForm = () => {
  const classes = useStyles();
  const [files, setFiles] = useState([]);

  const [dropzone, setDropzone] = useState(false);

  const array = ['Hello World', 'Hello World', 'Hello World', 'Hello World'];

  const handleDroppedFiles = droppedFiles => {
    setDropzone(false);
    setFiles([...files, ...droppedFiles]);
  };

  const triggerDropzone = () => {
    setDropzone(true);
  };

  return (
    <Container maxWidth={'xl'}>
      <Grid container justify={'center'} spacing={2} direction={'column'}>
        <Grid item>
          <h3 className="page-title">Upload Form</h3>
        </Grid>
        {files.length > 0 && (
          <Grid item>
            <Paper variant={'outlined'}>
              <Grid container justify={'space-evenly'} spacing={2}>
                {array.map((text, index) => (
                  <Grid item xs={6} sm md lg={3} xl key={index}>
                    <Paper variant={'outlined'}>
                      <Grid
                        container
                        direction={'column'}
                        alignItems={'center'}
                        justify={'center'}
                      >
                        <Grid item>
                          <p>text</p>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        )}
        <Grid item>
          <Dropzone
            onDrop={handleDroppedFiles}
            name={'files'}
            onFileDialogCancel={() => setDropzone(false)}
            multiple
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                {files && files.length === 0 && (
                  <>
                    <Grid
                      container
                      justify={'center'}
                      alignItems={'center'}
                      className={classes.dropzoneComponent}
                    >
                      <Grid item>
                        <h4>Drop Files Here!</h4>
                      </Grid>
                    </Grid>
                    <input {...getInputProps()} />
                  </>
                )}
                {files.length > 0 && (
                  <>
                    <Button color="primary" onClick={triggerDropzone}>
                      Add More Files
                    </Button>
                    {dropzone && <input {...getInputProps()} />}
                  </>
                  /*<Grid container justify={'flex-start'} alignItems={'center'}>
                    <Grid item style={{ border: 'solid red' }}>
                      <Button color="primary">Add More Files</Button>
                      <input {...getInputProps()} />
                    </Grid>
                  </Grid>*/
                )}
              </div>
            )}
          </Dropzone>
        </Grid>

        {/*<Dropzone onDrop={handleDroppedFiles} name={'files'} multiple>
                {({ getRootProps, getInputProps }) => {})}
                    {(files &&  files.length === 0) && (
                        <Grid container>
                          
                        </Grid>
                    )}
                  /*<Grid
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
                    {files.length > 0 && (
                      <Grid item container spacing={2} justify={'space-evenly'}>
                        {files.map((file, index) => (
                          <Grid
                            item
                            lg={2}
                            key={index}
                            container
                            justify={'center'}
                            style={{ zIndex: '10000' }}
                          >
                            <Grid item>
                              <Paper variant={'outlined'}>{file.name}</Paper>
                            </Grid>
                            <Grid item>
                              <Button>HE</Button>
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                    )}
                    <input {...getInputProps()} />
                  </Grid>*/}
      </Grid>
    </Container>
  );
};

export default UploadForm;
