import React from 'react';
import { useSelector } from 'react-redux';
import useSWR from 'swr';
import axios from 'axios';
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper
} from '@material-ui/core';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  documentForm: {
    cursor: 'pointer'
  }
});

const DocumentForm = ({ doc }) => {
  const classes = useStyles();
  const toggleToolTip = () => console.log(`This is ${doc.fileId} id document`);
  return (
    <Grid
      item
      xs={6}
      sm={6}
      md={4}
      lg={2}
      xl={2}
      className={classes.documentForm}
      onClick={toggleToolTip}
    >
      <Paper variant="outlined" elevation={2} style={{ width: '100%' }}>
        <Grid
          container
          justify={'center'}
          alignItems={'center'}
          direction={'column'}
          spacing={2}
        >
          <Grid item>
            <LazyLoadImage
              alt={doc.fileId}
              effect={'blur'}
              src={`https://nanonets.imgix.net/uploadedfiles/56766bad-b6f8-4e0a-9036-28c6d831fbf4/ImageSets/${doc.fileId}.jpeg?or=0&w=180`}
            />
          </Grid>
          <Grid item>
            <p>{doc.uploadedFile}</p>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

const ApplicationForms = () => {
  const { uid } = useSelector(state => state.firebase.auth);
  const fetcher = url => axios({ method: 'get', url: url });
  const { data: documents, error } = useSWR(`/ocr/?uid=${uid}`, fetcher, {
    refreshInterval: 10000
  });

  const uploadDocument = () => {
    console.log('Document Uploaded');
  };

  return (
    <Container maxWidth={'xl'}>
      <Grid container className="dashboard" direction={'column'} spacing={2}>
        <Grid
          item
          container
          justify={'space-between'}
          alignItems={'center'}
          direction={'row'}
          spacing={1}
        >
          <Grid item xs sm md lg xl>
            <h3 className="page-title">Application Forms</h3>
          </Grid>
          <Grid item>
            <Button
              color="primary"
              variant="contained"
              onClick={uploadDocument}
            >
              New Form
            </Button>
          </Grid>
        </Grid>
        <Grid item container>
          {error ? (
            <>
              <Grid item>
                <p>Error: {error.message}</p>
              </Grid>
            </>
          ) : !documents ? (
            <Grid item>
              <p>Loading</p>
            </Grid>
          ) : (
            <Grid item md sm xs lg xl>
              <Card>
                <CardContent>
                  <Grid
                    container
                    item
                    justify="space-between"
                    alignItems={'center'}
                    direction="row"
                    spacing={2}
                  >
                    {documents.data.map(doc => (
                      <DocumentForm doc={doc} key={doc.id} />
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ApplicationForms;
