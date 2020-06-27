import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import { AccountDetails, AccountProfile } from './components';
import { useSelector } from 'react-redux';

const Settings = () => {
  const { uid, providerData } = useSelector(state => state.firebase.auth);
  const profileData = useSelector(state => state.firebase.profile);

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
          <Typography variant={'h4'}>Account Settings</Typography>
        </Grid>
        {uid && (
          <Grid item container>
            <Grid item xs sm md lg xl>
              <AccountProfile
                user={providerData[0]}
                profile={profileData}
                uid={uid}
              />
            </Grid>
          </Grid>
        )}
        {/*{uid && (
          <Grid item container spacing={3}>
            <Grid item lg={4} md={6} xl={4} xs={12}>
              <AccountProfile
                user={providerData[0]}
                profile={profileData}
                uid={uid}
              />
            </Grid>
            <Grid item lg={8} md={6} xl={8} xs={12}>
              <AccountDetails
                user={providerData[0]}
                profile={profileData}
                uid={uid}
              />
            </Grid>
          </Grid>
        )}*/}
      </Grid>
    </Container>
  );
};

export default Settings;
