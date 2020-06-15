import React, { useState } from 'react';
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
import { NewDocumentForm, DetailedDocumentDialog } from './components';
import { useHistory } from 'react-router';
import none from '../../../shared/img/other/none.png';

const useStyles = makeStyles({
  documentForm: {
    cursor: 'pointer'
  },
  noDocumentsImage: {
    height: '400px'
  }
});

const DocumentForm = ({ doc, toggleDialog, setDocument }) => {
  const classes = useStyles();

  return (
    <Grid
      item
      xs={6}
      sm={6}
      md={4}
      lg={2}
      xl={2}
      className={classes.documentForm}
      onClick={() => {
        setDocument(doc);
        toggleDialog();
      }}
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
              alt={doc['fileId']}
              effect={'blur'}
              src={`https://nanonets.imgix.net/uploadedfiles/56766bad-b6f8-4e0a-9036-28c6d831fbf4/ImageSets/${doc['fileId']}.jpeg?or=0&w=180`}
            />
          </Grid>
          <Grid item>
            <p>{doc['uploadedFile']}</p>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

const Forms = () => {
  const classes = useStyles();
  const { uid } = useSelector(state => state.firebase.auth);
  const fetcher = url => axios({ method: 'get', url: url });
  const { data: documents, error } = useSWR(`/ocr/?uid=${uid}`, fetcher, {
    refreshInterval: 10000
  });

  const history = useHistory();

  const [isNewFormOpen, setNewFormDialog] = useState(false);
  const [isDetailedDocumentOpen, setDetailedDocumentDialog] = useState(false);
  const [documentData, setDocumentData] = useState({});
  const toggleNewForm = () => {
    if (isDetailedDocumentOpen) {
      setDetailedDocumentDialog(false);
    }
    setNewFormDialog(!isNewFormOpen);
  };
  const toggleDetailedDocumentDialog = () => {
    setDetailedDocumentDialog(!isDetailedDocumentOpen);
  };

  return (
    <Container maxWidth={'xl'}>
      <Grid container direction={'column'} spacing={3}>
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
              onClick={() => history.push('/forms/upload')}
            >
              New Form
            </Button>
          </Grid>
        </Grid>
        <Grid item xs sm md lg xl container>
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
          ) : documents.data.length === 0 ? (
            <Grid
              item
              container
              alignItems={'center'}
              justify={'center'}
              direction={'column'}
              spacing={1}
            >
              <Grid item>
                <LazyLoadImage
                  className={classes.noDocumentsImage}
                  alt={'None'}
                  src={none}
                />
              </Grid>
              <Grid item>
                <p align={'center'}>
                  There are no forms processed , go head and create some of them
                </p>
              </Grid>
              <Grid item>
                <Button
                  color={'primary'}
                  onClick={() => history.push('/forms/upload')}
                >
                  Create Form
                </Button>
              </Grid>
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
                      <DocumentForm
                        doc={doc}
                        key={doc.id}
                        toggleDialog={toggleDetailedDocumentDialog}
                        setDocument={setDocumentData}
                      />
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      </Grid>
      <NewDocumentForm open={isNewFormOpen} toggleDialog={toggleNewForm} />
      <DetailedDocumentDialog
        open={isDetailedDocumentOpen}
        toggleDialog={toggleDetailedDocumentDialog}
        document={documentData}
      />
    </Container>
  );
};

export default Forms;
