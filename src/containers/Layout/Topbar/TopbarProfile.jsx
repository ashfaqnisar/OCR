import React, { useState } from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import { Collapse } from 'reactstrap';
import TopbarMenuLink from './TopbarMenuLink';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import UserIcon from '@material-ui/icons/Person';
import { useSelector } from 'react-redux';
import { isBlank } from '../../../shared/components/Beautifier';

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: theme.palette.primary.main
  }
}));

const TopbarProfile = () => {
  const classes = useStyles();
  const [isCollapseOpen, SetCollapse] = useState(false);
  const toggleCollapse = () => {
    SetCollapse(!isCollapseOpen);
  };

  const { profile, auth } = useSelector(state => state.firebase);

  return (
    <div className="topbar__profile">
      <button className="topbar__avatar" type="button" onClick={toggleCollapse}>
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
              <UserIcon />
            )}
          </Avatar>
        )}
        <p className="topbar__avatar-name">
          {auth.displayName || profile.name || 'User'}
        </p>
        <DownIcon className="topbar__icon" />
      </button>
      {isCollapseOpen && (
        <button
          className="topbar__back"
          type="button"
          onClick={toggleCollapse}
        />
      )}
      <Collapse isOpen={isCollapseOpen} className="topbar__menu-wrap">
        <div className="topbar__menu">
          <TopbarMenuLink
            title="Account Settings"
            icon="cog"
            path="/settings"
            onClick={toggleCollapse}
          />

          <TopbarMenuLink
            title="Log Out"
            icon="exit"
            path="/login"
            onClick={() => console.log('logout')}
          />
        </div>
      </Collapse>
    </div>
  );
};

export default TopbarProfile;
