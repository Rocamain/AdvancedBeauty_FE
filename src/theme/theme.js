import { createTheme, responsiveFontSizes } from '@mui/material';
let theme = createTheme();
theme = createTheme(theme, {});

theme = createTheme(theme, {
  palette: {
    primary: {
      main: '#75C9CC',
      contrastText: '#fff',
    },
    secondary: {
      main: '#00BCCC',
      contrastText: '#fff',
    },
    text: {
      primary: '#333333',
      secondary: '#75C9CC',
    },

    background: {
      primary: 'linear-gradient(90deg,#75c9cc 0%,#00bccc 100%)!important',
      secondary: 'linear-gradient(90deg,##fcb900 0%,#ff6900 100%)!important',
    },
  },

  typography: {
    htmlFontSize: 16,
    fontFamily: ['Abel', 'Open Sans'].join(','),

    h1: {
      fontWeight: '300',
      fontSize: '5rem',
      lineHeight: 1.16,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '-0.017em',
    },
    h2: {
      fontWeight: '500',
      fontSize: '3.5rem',
      lineHeight: 1.2,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '-0.008em',
    },
    h3: {
      fontWeight: '400',
      fontSize: '3rem',
      lineHeight: 1.2,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '-0.008em',
    },
    h4: {
      fontWeight: '600',
      fontSize: '2rem',
      lineHeight: 1.1,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '-0.04rem',
    },
    h5: {
      fontWeight: '400',
      fontSize: '1.5rem',
      lineHeight: 1.1,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '-0.01rem',
    },
    p: {
      fontWeight: '400',
      fontSize: '0.9rem',
      lineHeight: 0.9,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.007em',
    },

    //  Variants

    // Components override.

    MuiTypography: {
      styleOverrides: {
        root: {
          wordBreak: 'break-word',
          wordWrap: 'break-word',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
