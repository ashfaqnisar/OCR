import React from 'react';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Error404Image from '../../../images/404.svg';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useHistory } from 'react-router';

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: '100vh'
  }
}));
const NotFound404 = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Container maxWidth={'xl'}>
      <Grid
        container
        className={classes.container}
        justify={'center'}
        alignItems={'center'}
        direction={'column'}
        spacing={2}
      >
        <Grid item>
          <LazyLoadImage src={Error404Image} effect={'blur'} alt={'404'} />
        </Grid>
        <Grid
          item
          container
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
          spacing={1}
        >
          <Grid item>
            <Typography variant="h4">Page Not Found</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" align={'center'}>
              Looks like you've followed a broken link or entered a URL that
              doesn't exist on this site.
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant={'contained'}
              color={'primary'}
              onClick={() => history.push('/home')}
            >
              Back To Home
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default NotFound404;
