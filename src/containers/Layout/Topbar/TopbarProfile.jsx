import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Person } from '@material-ui/icons';
import ExitFromAppIcon from '@material-ui/icons/ExitToApp';
import { useSelector } from 'react-redux';
import { isBlank } from '../../../shared/components/Beautifier';
import { Avatar, IconButton, Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: theme.palette.primary.main
  },
  logoutButton: {
    margin: 'auto',
    marginLeft: theme.spacing(1)
  }
}));

const TopbarProfile = () => {
  const classes = useStyles();

  const { profile, auth } = useSelector(state => state.firebase);

  return (
    <div className="topbar__profile">
      <div className="topbar__avatar">
        {!isBlank(auth.photoURL) ? (
          <Avatar
            className={'topbar__avatar-img'}
            src={auth.photoURL}
            alt={'User'}
          />
        ) : (
          <Avatar className={`${classes.avatar} topbar__avatar-img`}>
            {!isBlank(profile.name) ? (
              profile.name.split('')[0].toUpperCase()
            ) : (
              <Person />
            )}
          </Avatar>
        )}
        <p className="topbar__avatar-name">
          {auth.displayName || profile.name || 'User'}
        </p>
        <Hidden lgDown>
          <IconButton
            color={'primary'}
            className={classes.logoutButton}
            onClick={() => console.log('Logout')}
          >
            <ExitFromAppIcon />
          </IconButton>
        </Hidden>
      </div>
    </div>
  );
};

export default TopbarProfile;
