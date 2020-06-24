import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import { LatestFormsTable, Status } from './components';
import UpdateIcon from '@material-ui/icons/Update';
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';
import TimelineIcon from '@material-ui/icons/Timeline';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

const Home = () => {
  const values = {
    processed: '10',
    processing: '3',
    totalProcessed: '25',
    cancelled: '0'
  };
  return (
    <Container maxWidth={'xl'}>
      <Grid
        container
        justify={'center'}
        alignItems={'flex-start'}
        direction={'column'}
        spacing={2}
      >
        <Grid item>
          <Typography variant={'h4'}>Home</Typography>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item xs={12} sm={6} lg={3} xl={3}>
            <Status
              title={'Processing'}
              value={values.processing}
              icon={<FlipCameraAndroidIcon />}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3} xl={3}>
            <Status
              title={'Processed'}
              value={values.processed}
              icon={<UpdateIcon />}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3} xl={3}>
            <Status
              title={'Total Processed'}
              value={values.totalProcessed}
              icon={<TimelineIcon />}
            />{' '}
          </Grid>
          <Grid item xs={12} sm={6} lg={3} xl={3}>
            <Status
              title={'Cancelled'}
              value={values.cancelled}
              icon={<CancelPresentationIcon />}
            />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={12} sm md lg xl={12}>
            <LatestFormsTable />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
