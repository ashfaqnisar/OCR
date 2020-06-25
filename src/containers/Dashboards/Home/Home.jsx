import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import { LatestFormsTable, Status } from './components';
import UpdateIcon from '@material-ui/icons/Update';
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';
import TimelineIcon from '@material-ui/icons/Timeline';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import useSWR from 'swr';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Home = () => {
  const values = {
    processing: '0',
    totalProcessed: '0',
    cancelled: '0'
  };
  const { uid } = useSelector(state => state.firebase.auth);

  const fetcher = url => axios({ method: 'get', url: url });

  const { data: stats } = useSWR(`/users/${uid}/stats`, fetcher);
  const { data: documents } = useSWR(`/ocr/?uid=${uid}`, fetcher, {
    refreshInterval: 10000
  });

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
        {stats && (
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
                value={stats.data.count}
                icon={<UpdateIcon />}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3} xl={3}>
              <Status
                title={'Total Processed'}
                value={stats.data.count}
                icon={<TimelineIcon />}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3} xl={3}>
              <Status
                title={'Cancelled'}
                value={values.cancelled}
                icon={<CancelPresentationIcon />}
              />
            </Grid>
          </Grid>
        )}
        {documents && (
          <Grid item container>
            <Grid item xs={12} sm md lg xl={12}>
              <LatestFormsTable documents={documents.data} />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Home;
