import React from 'react';
import Dropzone from 'react-dropzone';
import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Paper
} from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { makeStyles } from '@material-ui/core/styles';

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
    justifyContent: 'space-evenly',
    overflow: 'auto',
    maxHeight: '600px',
    border: '1px dashed black '
  },
  title: {
    color: theme.colors.white
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  image: {
    height: '325px !important',
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
  deleteIcon: {
    color: theme.colors.white,
    '&:hover': { color: theme.colors.error }
  }
}));

const DropZoneMultipleField = props => {
  const { name, value, onChange } = props;

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

  const files = value;
  const classes = useStyles();

  return (
    <div className="dropzone dropzone--multiple">
      <Dropzone
        className="dropzone__input"
        accept="image/jpeg, image/png"
        name={name}
        onDrop={filesToUpload => {
          onDrop(value ? value.concat(filesToUpload) : filesToUpload);
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone__input">
            {(!files || files.length === 0) && (
              <Paper variant={'outlined'} className={classes.paper}>
                <h4>Drop Files Here!</h4>
              </Paper>
            )}
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>
      {files && Array.isArray(files) && (
        <Grid container>
          <Grid item xs sm md lg xl>
            <Paper>
              <Grid
                container
                alignItems={'center'}
                justify={'center'}
                direction={'column'}
              >
                <Grid item className={classes.heading}>
                  <h3>Drop files here</h3>
                </Grid>
                <GridList
                  cellHeight={200}
                  className={'dropzone__imgs-wrapper'}
                  cols={6}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    overflow: 'auto',
                    maxHeight: '600px',
                    border: '1px dashed black '
                  }}
                >
                  {files.map((file, index) => (
                    <GridListTile
                      key={index}
                      className={classes.image}
                      style={{ backgroundImage: `url(${file.preview})` }}
                    >
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
          </Grid>
        </Grid>
      )}
    </div>
  );
};

const renderDropZoneMultipleField = props => {
  const { input } = props;
  return <DropZoneMultipleField {...input} />;
};

export default renderDropZoneMultipleField;
