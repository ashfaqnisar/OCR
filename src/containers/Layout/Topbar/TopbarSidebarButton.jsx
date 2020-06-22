import React from 'react';
import MenuIcon from '@material-ui/icons/MenuRounded';
import { makeStyles } from '@material-ui/core/styles';
import { Hidden, Grid } from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';

const useStyles = makeStyles(theme => ({
  headingPurple: {
    fontWeight: 700,
    color: `${theme.colors.primary} !important`
  },
  headingBlack: {
    fontWeight: 700,
    color: `${theme.colors.black} !important`
  }
}));

const TopbarSidebarButton = props => {
  const classes = useStyles();
  const {
    changeMobileSidebarVisibility,
    changeSidebarVisibility,
    width
  } = props;

  return (
    <div>
      <Grid container spacing={2} alignItems={'center'}>
        <Grid item>
          <div
            className={'topbar__button'}
            onClick={
              width === 'xs'
                ? changeMobileSidebarVisibility
                : changeSidebarVisibility
            }
          >
            <MenuIcon className="topbar__button-icon" />
          </div>
        </Grid>
        <Grid item>
          <Hidden mdDown>
            <h1 className={classes.headingPurple}>
              <span className={classes.headingBlack}>ES</span>OCR
            </h1>
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
};

export default withWidth()(TopbarSidebarButton);
