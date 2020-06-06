import { createMuiTheme } from '@material-ui/core/styles';

const PURPLE = '#794dff'; //exact sciences purple
const DARKPURPLE = '#531aff';
const RED = '#d50000';

const colors = {
  primary: PURPLE,
  secondary: DARKPURPLE,
  error: RED,
  hover: DARKPURPLE,
  paper: PURPLE
};

const props = {
  MuiButton: {
    color: colors.primary
  }
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary
    },
    secondary: {
      main: colors.secondary
    },
    error: { main: colors.error },
    action: {
      active: colors.secondary,
      hover: colors.secondary
    }
  },
  props
});

export default theme;
