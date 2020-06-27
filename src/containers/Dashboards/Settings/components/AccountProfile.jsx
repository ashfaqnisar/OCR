import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  avatar: {
    marginLeft: 'auto',
    height: 100,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  }
}));

const AccountProfile = props => {
  const { className, user, profile, uid, ...rest } = props;

  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2} alignItems={'center'}>
          <Grid item>
            <Avatar
              className={classes.avatar}
              src={user.photoURL || user.avatar}
            />
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="h2">
              {user.displayName || profile.name}
            </Typography>
            <Typography color="textSecondary" variant="body1">
              Email: {user.email || profile.email}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              User Id: {uid}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
    </Card>
  );
};

export default AccountProfile;
