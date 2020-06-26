import React from 'react';
import Dropzone from 'react-dropzone';
import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Paper,
  Typography
} from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { makeStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import classnames from 'classnames';
import { Document, Page, pdfjs } from 'react-pdf';
import CircularProgress from '@material-ui/core/CircularProgress';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
    overflow: 'auto',
    maxHeight: '550px',
    [theme.breakpoints.down('lg')]: {
      maxHeight: '400px'
    }
  },
  title: {
    color: theme.colors.white
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  gridItem: {
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
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: theme.spacing(2),
    border: `solid ${theme.palette.primary.main}`,
    borderRadius: '5px',
    cursor: 'default'
  },
  heading: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  dropzone: {
    border: '2px dashed black',
    borderRadius: '4px'
  },
  dropzoneActive: {
    border: `2px dashed ${theme.colors.primary}`,
    borderRadius: '4px'
  },
  deleteIcon: {
    color: theme.colors.white,
    '&:hover': { color: theme.colors.error }
  },
  dropzoneMultiple: {
    minHeight: '400px',
    [theme.breakpoints.down('lg')]: {
      minHeight: '300px'
    }
  },
  page: {
    svg: {
      width: '100%',
      height: '100%',
      '& svg': {
        width: '100%',
        height: '100%'
      }
    }
  }
}));

const DropZoneMultipleField = props => {
  const { name, value, onChange, width } = props;

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

  const onDrop = files => {
    onChange(
      files.map(fl =>
        Object.assign(fl, {
          preview: URL.createObjectURL(fl)
        })
      )
    );
  };

  const removeFile = (index, e) => {
    e.preventDefault();
    onChange(value.filter((val, i) => i !== index));
  };

  const PDFLoading = () => (
    <div
      style={{
        padding: '8px',
        margin: 'auto'
      }}
    >
      <CircularProgress color={'primary'} />
    </div>
  );

  const files = value;
  const classes = useStyles();

  return (
    <div className={classnames('dropzone', classes.dropzoneMultiple)}>
      <Dropzone
        className="dropzone__input"
        name={name}
        onDrop={filesToUpload => {
          onDrop(value ? value.concat(filesToUpload) : filesToUpload);
        }}
      >
        {({ getRootProps, getInputProps, isDragActive }) => (
          <div
            {...getRootProps()}
            className={classnames(
              isDragActive ? classes.dropzoneActive : classes.dropzone,
              'dropzone__input'
            )}
          >
            {(!files || files.length === 0) && (
              <Paper variant={'outlined'} className={classes.paper}>
                <Typography variant={'subtitle1'}>Drop Files Here!</Typography>
              </Paper>
            )}
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>
      {files && Array.isArray(files) && (
        <Paper style={{ width: '100%' }}>
          <Grid
            container
            alignItems={'center'}
            justify={'center'}
            direction={'column'}
          >
            <Grid item className={classes.heading}>
              <Typography variant={'subtitle1'}>Drop Files Here!</Typography>
            </Grid>

            <GridList cols={getGridListCols()} className={classes.gridList}>
              {files.map((file, index) => (
                <GridListTile
                  key={index}
                  className={classes.gridItem}
                  style={{ backgroundImage: `url(${file.preview})` }}
                >
                  {file.type === 'application/pdf' && (
                    <Document
                      file={file.preview}
                      renderMode={'svg'}
                      style={{ width: '100%', height: '100%' }}
                      loading={<PDFLoading />}
                    >
                      <Page
                        pageNumber={1}
                        renderTextLayer={false}
                        className={'react-pdf__Page__svg'}
                      />
                    </Document>
                  )}
                  <GridListTileBar
                    title={file.name}
                    classes={{
                      root: classes.titlebar,
                      title: classes.title
                    }}
                    actionIcon={
                      <IconButton onClick={e => removeFile(index, e)}>
                        <DeleteOutlineIcon className={classes.deleteIcon} />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </Grid>
        </Paper>
      )}
    </div>
  );
};

const renderDropZoneMultipleField = props => {
  const { input, width } = props;
  return <DropZoneMultipleField {...input} width={width} />;
};

export default withWidth()(renderDropZoneMultipleField);
