import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  Paper,
  Select,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@material-ui/core';

import moment from 'moment';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Autocomplete } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { Element } from 'react-scroll';
import Chip from '@material-ui/core/Chip';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles(theme => ({
  root: {}
}));

function allyProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`
  };
}

const DetailedDocumentDialog = props => {
  const { open, toggleDialog, document } = props;

  const [formData, setFormData] = useState({});

  const handleTheFormChange = event => {
    const object = { [event.target.name]: event.target.value };
    setFormData({ ...formData, ...object });
  };

  const handleTheNewExam = async () => {
    console.log('clicked on create button');
  };

  const handleTheDateChange = (date, name) => {
    const isoDate = moment(date).toISOString();
    const object = { [name]: isoDate };
    setFormData({ ...formData, ...object });
  };

  const yearOptions = [
    {
      title: 'First Year',
      year: 1
    },
    {
      title: 'Second Year',
      year: 2
    },
    {
      title: 'Third Year',
      year: 3
    },
    {
      title: 'Fourth Year',
      year: 4
    }
  ];
  const blockOptions = [
    {
      title: 'North Block',
      block: 'N'
    },
    {
      title: 'South Block',
      block: 'S'
    },
    {
      title: 'Central Block',
      block: 'C'
    },
    {
      title: 'East Block',
      block: 'E'
    }
  ];

  const [view, setView] = useState(0);
  const handleViewChange = (event, newView) => setView(newView);
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={toggleDialog} fullWidth={true} maxWidth="lg">
      {console.log({ ...document })}
      <DialogTitle>
        <Typography variant="h6">
          Document: {document['uploadedFile']}
        </Typography>
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
                  alt={document['fileId']}
                  effect={'blur'}
                  src={`https://nanonets.imgix.net/uploadedfiles/56766bad-b6f8-4e0a-9036-28c6d831fbf4/ImageSets/${document['fileId']}.jpeg?or=0&w=400`}
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
              <AppBar position="static" color="default">
                <Tabs
                  value={view}
                  onChange={handleViewChange}
                  textColor={'primary'}
                  indicatorColor="primary"
                  variant="fullWidth"
                >
                  <Tab label={'JSON'} />
                  <Tab label={'Form'} {...allyProps(0)} />
                  <Tab label={'Table'} {...allyProps(0)} />
                </Tabs>
              </AppBar>
            </Grid>
            <Grid item xs sm lg md xl>
              {view === 0 ? (
                'JSON'
              ) : view === 1 ? (
                <Element
                  style={{
                    position: 'relative',
                    height: '435px',
                    overflow: 'scroll'
                  }}
                >
                  <div className="form">
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Exam Type
                      </span>
                      <div className="form__form-group-field">
                        <FormControl
                          size={'small'}
                          variant="outlined"
                          fullWidth
                        >
                          <Select
                            native
                            type="text"
                            name="examType"
                            required
                            value={'value '}
                            onChange={handleTheFormChange}
                          >
                            <option value={'mid'}>Mid</option>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Type of Exam Number
                      </span>
                      <div className="form__form-group-field">
                        <FormControl
                          size={'small'}
                          variant="outlined"
                          fullWidth
                        >
                          <Select
                            native
                            type="text"
                            name="midType"
                            required
                            value={'1'}
                            onChange={handleTheFormChange}
                          >
                            <option value={'1'}>1</option>
                            <option value={'2'}>2</option>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Type of Semester
                      </span>
                      <div className="form__form-group-field">
                        <FormControl
                          size={'small'}
                          variant="outlined"
                          fullWidth
                        >
                          <Select
                            native
                            type="text"
                            name="semType"
                            required
                            value={'1'}
                            onChange={handleTheFormChange}
                          >
                            <option value={'1'}>First Semester</option>
                            <option value={'2'}>Second Semester</option>
                          </Select>
                        </FormControl>
                      </div>
                    </div>

                    <div className="form__form-group">
                      <span className="form__form-group-label">
                        Student Year
                      </span>
                      <div className="form__form-group-field priority">
                        <Autocomplete
                          multiple
                          id="fixed-tags-demo"
                          options={yearOptions}
                          onChange={(event, objects) => {
                            const yearsObjectArray = [];
                            objects.map(object => {
                              yearsObjectArray.push(object.year);
                            });
                            console.log(yearsObjectArray);
                            let updatedFormData = formData;
                            updatedFormData.studentsYear = yearsObjectArray;
                            setFormData(updatedFormData);
                          }}
                          size={'small'}
                          fullWidth
                          disableCloseOnSelect
                          getOptionLabel={option => option.title}
                          renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                              <Chip
                                label={option.title}
                                {...getTagProps({ index })}
                              />
                            ))
                          }
                          style={{ width: '100%' }}
                          renderInput={params => (
                            <TextField
                              {...params}
                              variant="outlined"
                              placeholder="Year"
                              fullWidth
                            />
                          )}
                        />
                      </div>
                    </div>
                    <div className="form__form-group">
                      <span className="form__form-group-label">
                        Blocks For Exam
                      </span>
                      <div className="form__form-group-field priority">
                        <Autocomplete
                          multiple
                          id="fixed-tags-demo"
                          options={blockOptions}
                          onChange={(event, objects) => {
                            const blocksObjectArray = [];
                            objects.map(object => {
                              blocksObjectArray.push(object.block);
                            });
                            let updatedFormData = formData;
                            updatedFormData.blocks = blocksObjectArray;
                            setFormData(updatedFormData);
                          }}
                          size={'small'}
                          fullWidth
                          disableCloseOnSelect
                          getOptionLabel={option => option.title}
                          renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                              <Chip
                                label={option.title}
                                {...getTagProps({ index })}
                              />
                            ))
                          }
                          style={{ width: '100%' }}
                          renderInput={params => (
                            <TextField
                              {...params}
                              variant="outlined"
                              placeholder="Block"
                              fullWidth
                            />
                          )}
                        />
                      </div>
                    </div>
                    <div className="form__form-group">
                      <span className="form__form-group-label">
                        Blocks For Exam
                      </span>
                      <div className="form__form-group-field priority">
                        <Autocomplete
                          multiple
                          id="fixed-tags-demo"
                          options={blockOptions}
                          onChange={(event, objects) => {
                            const blocksObjectArray = [];
                            objects.map(object => {
                              blocksObjectArray.push(object.block);
                            });
                            let updatedFormData = formData;
                            updatedFormData.blocks = blocksObjectArray;
                            setFormData(updatedFormData);
                          }}
                          size={'small'}
                          fullWidth
                          disableCloseOnSelect
                          getOptionLabel={option => option.title}
                          renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                              <Chip
                                label={option.title}
                                {...getTagProps({ index })}
                              />
                            ))
                          }
                          style={{ width: '100%' }}
                          renderInput={params => (
                            <TextField
                              {...params}
                              variant="outlined"
                              placeholder="Block"
                              fullWidth
                            />
                          )}
                        />
                      </div>
                    </div>
                    <div className="form__form-group">
                      <span className="form__form-group-label">
                        Blocks For Exam
                      </span>
                      <div className="form__form-group-field priority">
                        <Autocomplete
                          multiple
                          id="fixed-tags-demo"
                          options={blockOptions}
                          onChange={(event, objects) => {
                            const blocksObjectArray = [];
                            objects.map(object => {
                              blocksObjectArray.push(object.block);
                            });
                            let updatedFormData = formData;
                            updatedFormData.blocks = blocksObjectArray;
                            setFormData(updatedFormData);
                          }}
                          size={'small'}
                          fullWidth
                          disableCloseOnSelect
                          getOptionLabel={option => option.title}
                          renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                              <Chip
                                label={option.title}
                                {...getTagProps({ index })}
                              />
                            ))
                          }
                          style={{ width: '100%' }}
                          renderInput={params => (
                            <TextField
                              {...params}
                              variant="outlined"
                              placeholder="Block"
                              fullWidth
                            />
                          )}
                        />
                      </div>
                    </div>
                    <div className="form__form-group">
                      <span className="form__form-group-label">
                        Blocks For Exam
                      </span>
                      <div className="form__form-group-field priority">
                        <Autocomplete
                          multiple
                          id="fixed-tags-demo"
                          options={blockOptions}
                          onChange={(event, objects) => {
                            const blocksObjectArray = [];
                            objects.map(object => {
                              blocksObjectArray.push(object.block);
                            });
                            let updatedFormData = formData;
                            updatedFormData.blocks = blocksObjectArray;
                            setFormData(updatedFormData);
                          }}
                          size={'small'}
                          fullWidth
                          disableCloseOnSelect
                          getOptionLabel={option => option.title}
                          renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                              <Chip
                                label={option.title}
                                {...getTagProps({ index })}
                              />
                            ))
                          }
                          style={{ width: '100%' }}
                          renderInput={params => (
                            <TextField
                              {...params}
                              variant="outlined"
                              placeholder="Block"
                              fullWidth
                            />
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </Element>
              ) : (
                'TABLE'
              )}
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button autoFocus color="primary" onClick={handleTheNewExam}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailedDocumentDialog;
