import React, { useState } from 'react';
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  Paper,
  Select,
  TextField,
  Typography
} from '@material-ui/core';

import moment from 'moment';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { Autocomplete, ToggleButtonGroup } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { Element } from 'react-scroll';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {}
}));

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

  const [view, setView] = useState('form');
  const handleViewChange = (event, newView) => setView(newView);
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={toggleDialog} fullWidth={true} maxWidth="md">
      {console.log({ ...document })}
      <DialogTitle>
        <Typography variant="h6">
          Document: {document['uploadedFile']}
        </Typography>
      </DialogTitle>
      <DialogContent dividers>
        <Container maxWidth={'xl'}>
          <Grid
            lg
            xl
            container
            alignItems={'flex-start'}
            justify={'center'}
            spacing={3}
            direction={'row'}
          >
            <Grid
              item
              container
              xs={12}
              sm
              md
              lg
              xl
              justify={'center'}
              alignItems="center"
              direction={'column'}
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
              lg
              xl
              container
              direction={'column'}
              justify={'flex-start'}
              alignItems={'center'}
              style={{ border: 'solid red' }}
            >
              <Grid
                item
                xs
                sm
                lg={12}
                md
                xl={12}
                style={{ border: 'solid yellow' }}
              >
                <ToggleButtonGroup
                  size={'medium'}
                  value={view}
                  exclusive
                  onChange={handleViewChange}
                >
                  <ToggleButton value={'form'}>Form</ToggleButton>
                  <ToggleButton value={'json'}>JSON</ToggleButton>
                  <ToggleButton value={'table'}>Table</ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              <Grid
                item
                xs
                sm
                lg
                md
                xl
                style={{
                  border: 'solid yellow'
                }}
              >
                {view === 'form' ? (
                  <Element
                    style={{
                      position: 'relative',
                      height: '450px',
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
                ) : view === 'json' ? (
                  'JSON'
                ) : (
                  'TABLE'
                )}
              </Grid>
            </Grid>
          </Grid>
        </Container>
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
