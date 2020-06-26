import React, { useState } from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { LatestFormsTable, Status } from './components';
import useSWR from 'swr';
import axios from 'axios';
import { useSelector } from 'react-redux';
import none from '../../../shared/img/other/none.png';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useHistory } from 'react-router';
import Skeleton from '@material-ui/lab/Skeleton';
import UpdateIcon from '@material-ui/icons/Update';
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';
import TimelineIcon from '@material-ui/icons/Timeline';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

const Home = () => {
  const values = {
    processing: '0',
    totalProcessed: '0',
    cancelled: '0'
  };
  const { uid } = useSelector(state => state.firebase.auth);

  const fetcher = url => axios({ method: 'get', url: url });

  const skeletonArray = Array.from(new Array(4));
  const { data: stats } = useSWR(`/users/${uid}/stats`, fetcher);
  const { data: documents } = useSWR(`/ocr/?uid=${uid}`, fetcher, {
    refreshInterval: 10000
  });
  const history = useHistory();

  const [isStatsEmpty, setStatsEmpty] = useState(false);
  const [isDocumentsEmpty, setDocumentsEmpty] = useState(false);

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
        {!stats ? (
          <Grid item container spacing={2}>
            {skeletonArray.map((item, index) => (
              <Grid item xs={12} sm={6} lg={3} xl={3} key={index}>
                <Skeleton
                  variant="rect"
                  width={'100%'}
                  height={120}
                  style={{ backgroundColor: '#eaeaea' }}
                />
              </Grid>
            ))}
          </Grid>
        ) : !stats.data.count ? (
          <Grid
            item
            container
            alignItems={'center'}
            justify={'center'}
            direction={'column'}
            spacing={1}
          >
            <Grid item>
              <img
                src={none}
                name={'none'}
                style={{ height: '400px' }}
                alt={'None '}
              />
            </Grid>
            <Grid item>
              <Typography variant={'body1'} align={'center'}>
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
        {!documents ? (
          <Grid item container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Skeleton
                variant="rect"
                width={'100%'}
                height={300}
                style={{ backgroundColor: '#eaeaea' }}
              />
            </Grid>
          </Grid>
        ) : documents.data.length === 0 ? (
          <></>
        ) : (
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
