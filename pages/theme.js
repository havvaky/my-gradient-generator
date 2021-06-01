import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  spacing: 4,
  palette: {
    primary: {
      main:  purple[400],
    },
    secondary: {
      main: purple[700],
    },
  },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // when true No more ripple, on the whole application 💣!
    },
  },
  overrides: {
    MuiInputBase: {
      input: {
        width: '130px',
        height: '55px',
        margin: '25px',
      },
      root: {
        width: '150px',
        height: '80px',
      }
    },
    MuiSvgIcon: {
      root: {
        color: 'floralwhite',
        fontSize: '1em',
        margin: '5px',
        width: '1.5em',
        borderLeft: '1px solid floralwhite',
      }
    }
  },
});

export default theme;
