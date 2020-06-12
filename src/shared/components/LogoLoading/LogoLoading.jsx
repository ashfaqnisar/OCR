import React from 'react';
import { Grid, LinearProgress } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: theme.palette.primary.main
  },
  heading: {
    fontWeight: 700,
    color: `${theme.colors.white} !important`
  },
  headingBlack: {
    fontWeight: 700,
    color: `${theme.colors.black} !important`
  }
}));
const TopLinearProgress = withStyles(theme => ({
  root: {
    height: theme.spacing(0.6),
    backgroundColor: theme.palette.primary.light
  },
  bar: {
    backgroundColor: theme.palette.primary.dark
  }
}))(LinearProgress);

const LogoLoading = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      alignItems={'flex-start'}
      justify={'center'}
      direction={'column'}
    >
      <Grid item style={{ width: '100%' }}>
        <TopLinearProgress />
      </Grid>
      <Grid
        item
        xs
        sm
        md
        lg
        xl
        container
        justify={'center'}
        alignItems={'center'}
      >
        <Grid item>
          <h1 className={classes.heading}>
            <span className={classes.headingBlack}>ES</span>OCR
          </h1>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LogoLoading;
