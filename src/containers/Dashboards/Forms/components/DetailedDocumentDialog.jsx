import React, { useState } from 'react';
import {
  AppBar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  Tab,
  Tabs,
  Tooltip,
  Typography
} from '@material-ui/core';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import FormComponent from './FormComponent';
import ReactJson from 'react-json-view';
import { useSelector } from 'react-redux';
import axios from 'axios';
import useSWR from 'swr';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles(theme => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));

const DetailedDocumentDialog = props => {
  const { open, toggleDialog, document, setDocument } = props;

  const jsonViewStyles = {
    base00: 'white',
    base01: '#ddd',
    base02: '#ddd',
    base03: '#444',
    base04: '#794dff',
    base05: '#444',
    base06: '#444',
    base07: '#444',
    base08: '#444',
    base09: '#794dff',
    base0A: '#794dff',
    base0B: '#794dff',
    base0C: '#794dff',
    base0D: '#794dff',
    base0E: '#794dff',
    base0F: '#794dff'
  };

  const classes = useStyles();
  const [tooltip, setTooltip] = useState(false);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const closeTooltip = () => {
    if (tooltip) {
      setTooltip(!tooltip);
    }
  };
  const openTooltip = () => {
    if (!tooltip) {
      setTooltip(!tooltip);
    }
  };

  const copyObjectToClipboard = () => {
    navigator.clipboard
      .writeText(JSON.stringify(document['prediction']))
      .then(() => openTooltip());
  };

  const TabPanel = ({ children, value, index, ...other }) => {
    return (
      <div
        role={'tabpanel'}
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && children}
      </div>
    );
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    };
  }

  const { uid } = useSelector(state => state.firebase.auth);

  const getFileId = id => {
    return id ? id.split('.')[0] : id;
  };

  const { enqueueSnackbar } = useSnackbar();

  const updateForm = documentData => {
    console.log(documentData);
    axios({
      method: 'put',
      url: `/ocr/${document.id}/?uid=${uid}`,
      data: documentData
    })
      .then(() => {
        enqueueSnackbar('Successfully Updated the data', {
          variant: 'success'
        });
        setDocument(documentData);
      })
      .catch(err => {
        console.log(err);
        enqueueSnackbar('Error updating the data', {
          variant: 'error'
        });
      });
  };

  return (
    <Dialog open={open} onClose={toggleDialog} fullWidth={true} maxWidth="lg">
      <DialogTitle>
        <Typography variant="h5">
          Document: {document['uploadedFile']}
        </Typography>
        <IconButton
          size={'small'}
          aria-label="close"
          className={classes.closeButton}
          onClick={toggleDialog}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Grid
          container
          alignItems={'flex-start'}
          justify={'center'}
          direction={'row'}
          spacing={3}
        >
          <Grid
            item
            xs={12}
            sm
            md
            lg={4}
            xl={5}
            container
            justify={'center'}
            alignItems="center"
          >
            <Grid item>
              <Paper variant={'outlined'}>
                <LazyLoadImage
                  alt={document['gcsFile']}
                  effect={'blur'}
                  src={`https://nanonets.imgix.net/uploadedfiles/56766bad-b6f8-4e0a-9036-28c6d831fbf4/ImageSets/${getFileId(
                    document['gcsFile']
                  )}.jpeg?or=0&w=380`}
                  // src={`https://esocr.imgix.net/${uid}/${document['gcsFile']}?fm=jpg&or=0&w=380`}
                />
              </Paper>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm
            md
            lg={8}
            xl={7}
            container
            direction={'column'}
            spacing={2}
          >
            <Grid item xs sm lg={12} md={12} xl={12}>
              <AppBar position="sticky" color="default">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor={'primary'}
                  indicatorColor="primary"
                  variant="fullWidth"
                >
                  <Tab label={'Form'} {...a11yProps(0)} />
                  <Tab label={'JSON'} {...a11yProps(1)} />
                </Tabs>
              </AppBar>
            </Grid>
            <Grid item xs sm lg={12} md={12} xl={12}>
              <TabPanel value={value} index={0}>
                <FormComponent updateForm={updateForm} document={document} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Grid container direction={'column'} spacing={1}>
                  <Grid
                    item
                    xs
                    sm
                    lg
                    md
                    xl
                    container
                    alignItems={'center'}
                    spacing={1}
                  >
                    <Grid item>
                      <Typography variant={'subtitle1'}>Response</Typography>
                    </Grid>
                    <Grid item>
                      <Tooltip
                        title={'Copied'}
                        open={tooltip}
                        onClose={closeTooltip}
                        interactive
                      >
                        <IconButton onClick={copyObjectToClipboard}>
                          <FileCopyIcon color={'primary'} fontSize={'small'} />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                  </Grid>
                  <Grid item xs sm lg md xl>
                    <div
                      style={{
                        position: 'relative',
                        height: '375px',
                        overflow: 'auto'
                      }}
                    >
                      <ReactJson
                        src={document['prediction']}
                        name={'prediction'}
                        enableClipboard={false}
                        iconStyle={'square'}
                        style={{ fontFamily: 'Roboto', fontSize: '0.9rem' }}
                        collapsed={false}
                        collapseStringsAfterLength={10}
                        displayDataTypes={false}
                        displayObjectSize={false}
                        theme={jsonViewStyles}
                      />
                    </div>
                  </Grid>
                </Grid>
              </TabPanel>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default DetailedDocumentDialog;
