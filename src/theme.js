import { createMuiTheme } from '@material-ui/core/styles';

const PURPLE = '#794dff'; //exact sciences purple
const DARKPURPLE = '#6736fc';
const RED = '#d50000';

const colors = {
  primary: PURPLE,
  primaryDark: DARKPURPLE,
  error: RED,
  hover: DARKPURPLE,
  paper: PURPLE
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
      dark: colors.primaryDark
    },
    secondary: {
      main: colors.primaryDark
    },
    error: { main: colors.error },
    action: {
      active: colors.primaryDark,
      hover: colors.primaryDark
    }
  }
});

export default theme;
