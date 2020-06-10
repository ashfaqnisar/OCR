import React, { useState } from 'react';
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Select,
  TextField,
  Typography,
  Grid,
  Divider
} from '@material-ui/core';

import moment from 'moment';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

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

  const [view, setView] = useState('json');
  const handleViewChange = (event, newView) => setView(newView);

  return (
    <Dialog open={open} onClose={toggleDialog} fullWidth={true} maxWidth="md">
      {console.log({ ...document })}
      <DialogTitle>
        <Typography variant="h6">
          Document: {document['uploadedFile']}
        </Typography>
      </DialogTitle>
      <DialogContent dividers>
        <Container maxWidth={'md'}>
          <Grid
            container
            alignItems={'flex-start'}
            justify={'space-evenly'}
            spacing={1}
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
              style={{ border: 'solid red' }}
            >
              <Grid item>
                <LazyLoadImage
                  alt={document['fileId']}
                  effect={'blur'}
                  src={`https://nanonets.imgix.net/uploadedfiles/56766bad-b6f8-4e0a-9036-28c6d831fbf4/ImageSets/${document['fileId']}.jpeg?or=0&w=500`}
                />
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
              justify={'center'}
              alignItems={'center'}
              style={{ border: 'solid red' }}
            >
              <Grid
                item
                xs
                sm
                lg
                md
                xl
                container
                justify={'flex-start'}
                alignItems={'center'}
                direction={'row'}
              >
                <ToggleButtonGroup
                  size={'medium'}
                  value={view}
                  exclusive
                  onChange={handleViewChange}
                >
                  <ToggleButton value={'json'}>JSON</ToggleButton>
                  <ToggleButton value={'table'}>Table</ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        {/*<div className="form">
          <div className="form__form-group">
            <span className="form__form-group-label typography-message">
              Exam Type
            </span>
            <div className="form__form-group-field">
              <FormControl size={'small'} variant="outlined" fullWidth>
                <Select
                  native
                  type="text"
                  name="examType"
                  required
                  value={formData.examType}
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
              <FormControl size={'small'} variant="outlined" fullWidth>
                <Select
                  native
                  type="text"
                  name="midType"
                  required
                  value={formData.midType}
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
              <FormControl size={'small'} variant="outlined" fullWidth>
                <Select
                  native
                  type="text"
                  name="semType"
                  required
                  value={formData.semType}
                  onChange={handleTheFormChange}
                >
                  <option value={'1'}>First Semester</option>
                  <option value={'2'}>Second Semester</option>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="form__form-group">
            <span className="form__form-group-label">Student Year</span>
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
                    <Chip label={option.title} {...getTagProps({ index })} />
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
            <span className="form__form-group-label">Blocks For Exam</span>
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
                    <Chip label={option.title} {...getTagProps({ index })} />
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
        </div>*/}
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
