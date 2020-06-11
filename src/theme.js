import { createMuiTheme } from '@material-ui/core/styles';

const PURPLE = '#794dff'; //exact sciences purple
const DARKPURPLE = '#6736fc';
const RED = '#d50000';
const BLACK = '#000000';
const WHITE = '#ffffff';

const colors = {
  primary: PURPLE,
  primaryDark: DARKPURPLE,
  secondary: BLACK,
  error: RED,
  hover: DARKPURPLE,
  paper: PURPLE,
  white: WHITE,
  black: BLACK
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary,
      dark: colors.primaryDark
    },
    secondary: {
      main: colors.secondary
    },
    error: { main: colors.error },
    action: {
      active: colors.primaryDark,
      hover: colors.primaryDark
    }
  },
  colors
});

export default theme;
