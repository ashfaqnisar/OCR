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
  GridList,
  GridListTile,
  GridListTileBar,
  Typography
} from '@material-ui/core';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { makeStyles } from '@material-ui/core/styles';
import { DetailedDocumentDialog } from './components';
import { useHistory } from 'react-router';
import none from '../../../shared/img/other/none.png';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const useStyles = makeStyles(theme => ({
  documentForm: {
    cursor: 'pointer'
  },
  noDocumentsImage: {
    height: '400px'
  },
  gridList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    overflow: 'auto',
    maxHeight: '550px',
    [theme.breakpoints.down('lg')]: {
      maxHeight: '425px'
    },
    width: '100%'
  },
  title: {
    color: theme.colors.white
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  image: {
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  gridListTile: {
    [theme.breakpoints.down('xs')]: {
      height: '330px !important',
      width: '80% !important'
    },
    [theme.breakpoints.up('md')]: {
      height: '300px !important'
    },
    [theme.breakpoints.up('sm')]: {
      height: '210px !important'
    },
    [theme.breakpoints.up('lg')]: {
      height: '265px !important'
    },
    [theme.breakpoints.up('xl')]: {
      height: '350px !important'
    },
    margin: theme.spacing(2),
    border: `solid ${theme.palette.primary.main}`,
    borderRadius: '5px',
    cursor: 'pointer'
  }
}));

const DocumentsForm = ({ documents, toggleDialog, setDocument, width }) => {
  const classes = useStyles();
  const getGridListCols = () => {
    if (isWidthUp('xl', width)) {
      return 6;
    }

    if (isWidthUp('lg', width)) {
      return 6;
    }

    if (isWidthUp('md', width)) {
      return 2;
    }
    if (isWidthUp('sm', width)) {
      return 3;
    }

    if (isWidthUp('xs', width)) {
      return 1;
    }

    return 1;
  };
  return (
    <GridList
      cellHeight={200}
      spacing={1}
      className={classes.gridList}
      cols={getGridListCols()}
    >
      {documents.map(doc => (
        <GridListTile
          key={doc.id}
          className={classes.gridListTile}
          onClick={() => {
            setDocument(doc);
            toggleDialog();
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <LazyLoadImage
              className={classes.image}
              alt={doc['fileId']}
              effect={'blur'}
              src={`https://nanonets.imgix.net/uploadedfiles/56766bad-b6f8-4e0a-9036-28c6d831fbf4/ImageSets/${doc['fileId']}.jpeg?or=0&w=280`}
              // src={`https://esocr.imgix.net/${uid}/${doc['fileId']}?fm=jpg&or=0&h=300&w=250`}
            />
          </div>

          <GridListTileBar
            title={doc['uploadedFile']}
            classes={{ root: classes.titleBar, title: classes.title }}
          />
        </GridListTile>
      ))}
    </GridList>
  );
};

const Forms = ({ width }) => {
  const classes = useStyles();
  const { uid } = useSelector(state => state.firebase.auth);
  const fetcher = url => axios({ method: 'get', url: url });
  const { data: documents, error } = useSWR(`/ocr/?uid=${uid}`, fetcher, {
    refreshInterval: 10000
  });

  const history = useHistory();

  const [isDetailedDocumentOpen, setDetailedDocumentDialog] = useState(false);
  const [documentData, setDocumentData] = useState({});

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
            <Typography variant={'h4'}>Application Forms</Typography>
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
                <Typography varaint={'body1'} align={'center'}>
                  There are no forms processed , go head and create some of them
                </Typography>
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
                    justify="center"
                    alignItems={'center'}
                    direction="row"
                  >
                    <DocumentsForm
                      width={width}
                      documents={documents.data}
                      toggleDialog={toggleDetailedDocumentDialog}
                      setDocument={setDocumentData}
                    />
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      </Grid>
      <DetailedDocumentDialog
        open={isDetailedDocumentOpen}
        toggleDialog={toggleDetailedDocumentDialog}
        document={documentData}
      />
    </Container>
  );
};

export default withWidth()(Forms);
