import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme();

theme = createTheme(theme, {
  palette: {
    primary: {
      main: '#75C9CC',
      secondary: '#fff',
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
      fontSize: '1.1rem',
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.007em',
    },

    //  Variants
    carouselTitle: {
      fontFamily: ['Abel', 'Open Sans'].join(','),
      fontWeight: 700,
      fontSize: '6rem',
      lineHeight: 0.8,
      color: '#00BCCC',
      letterSpacing: '-0.017em',
      textShadow: '10px 0px 15px white',
    },

    carouselSubtitle: {
      color: '#666',
      fontFamily: ['Abel', 'Open Sans'].join(','),
      fontWeight: 500,
      lineHeight: 1,
      fontSize: '2.4rem',
    },
    cardTitle: {
      color: 'black',
      fontSize: '3rem',
      lineHeight: 1.1,
      fontWeight: 400,
      fontFamily: ['Open Sans', 'Abel'].join(','),
    },
    cardText: {
      color: 'black',
      fontFamily: ['Open Sans', 'Abel'].join(','),
      fontWeight: 300,
      lineHeight: 1.1,
      fontSize: '1.2rem',
    },

    title: {
      color: '#666',
      fontSize: '2rem',
      lineHeight: 1.1,
      fontWeight: 400,

      fontFamily: ['Open Sans', 'Abel'].join(','),
      [theme.breakpoints.up('sm')]: {
        fontSize: '3rem',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '4rem',
      },
    },
    content: {
      fontWeight: '400',
      fontSize: '1.15rem',
      color: '#666',
      lineHeight: 1.4,
      fontFamily: ['Abel', 'Open Sans'].join(','),
    },
    gridText: {
      fontWeight: '400',
      fontSize: '1.15rem',
      color: '#666',
      lineHeight: 1.2,
      fontFamily: ['Abel', 'Open Sans'].join(','),
    },

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

const responsiveTheme = responsiveFontSizes(theme, {
  breakpoints: ['xs', 'xm', 'lg', 'xl'],

  variants: [
    'carouselTitle',
    'carouselSubtitle',
    'cardTitle',
    'cardText',
    'gridText',
  ],
});

export default responsiveTheme;
