import { createTheme, responsiveFontSizes } from '@mui/material';
import { createBreakpoints } from '@mui/system';
import OpenSans from '@fontsource/open-sans';
import Abel from '@fontsource/abel';

let theme = createTheme();
const BREAKPOINTS = { xs: 0, sm: 600, md: 900, lg: 1400, xl: 1736, xxl: 2100 };
const breakpointsValues = {
  breakpoints: createBreakpoints({
    values: BREAKPOINTS,
  }),
};

theme = createTheme(theme, { ...breakpointsValues });

theme = createTheme(theme, {
  palette: {
    primary: {
      main: '#75C9CC',
      secondary: '#fff',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffd4a3',
      contrastText: '#fff',
    },
    tertiary: { main: '#0693e3', contrastText: '#fff' },
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
    fontSize: 8,
    color: '#666',
    h1: {
      fontWeight: 400,
      fontSize: '5rem',
      lineHeight: 1.16,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '-0.017em',
    },
    h2: {
      fontWeight: 500,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '-0.008em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '3rem',
      lineHeight: 1.2,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '-0.008em',
    },
    h4: {
      fontWeight: 600,
      fontSize: '2.2rem',
      lineHeight: 1.1,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '-0.04rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.1,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '-0.01rem',
    },
    p: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.4,
      color: '#666',
      fontFamily: ['Open Sans', 'Abel'].join(','),
      letterSpacing: '0.05em',
      [theme.breakpoints.up('sm')]: {
        fontSize: '0.8rem',
      },
    },
    navLink: {
      fontFamily: ['Abel'].join(','),
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.1,
      wordBreak: 'break-word',
      wordWrap: 'break-word',
      [theme.breakpoints.up('sm')]: {
        fontSize: '1.3rem',
      },
    },

    //  Variants
    heroTitle: {
      fontFamily: ['Abel', 'Open Sans'].join(','),
      fontWeight: 700,
      fontSize: '4rem',
      color: '#00BCCC !important',
      letterSpacing: '-0.017em',
      textAlign: 'center',
      textShadow: '0.05em 0.08em 0.12em #ffff !important',
      lineHeight: 1.1,
      wordBreak: 'break-word',
      wordWrap: 'break-word',
      [theme.breakpoints.up('sm')]: {
        fontSize: '4.5rem',
        letterSpacing: '-0.117rem',
        textAlign: 'left',
      },
      [theme.breakpoints.up('md')]: {
        textAlign: 'right',
        fontSize: '5rem',
        lineHeight: 1,
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '6rem',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '6.5rem',
        lineHeight: 0.94,
        letterSpacing: '-0.257rem',
      },
      [theme.breakpoints.up('xxl')]: {
        fontSize: '8.5rem',
        lineHeight: 0.94,
        letterSpacing: '-0.257rem',
      },
      [theme.breakpoints.up('xxl')]: {
        fontSize: '10.5rem',
        lineHeight: 0.94,
        letterSpacing: '-0.257rem',
      },
    },

    heroSubtitle: {
      wordBreak: 'break-word',
      wordWrap: 'break-word',
      color: '#444444',
      fontFamily: ['Abel', 'Open Sans'].join(','),
      fontWeight: 500,
      textAlign: 'center',
      fontSize: '1.9rem',
      textShadow: '-17em 7em 0.3em #ffffff',
      [theme.breakpoints.up('sm')]: {
        fontWeight: 600,
        fontSize: '2.4rem',
        lineHeight: 1,
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '2.4rem',
        color: '#666',
        fontWeight: 600,
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '3.7rem',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '4.2rem',
      },
      [theme.breakpoints.up('xxl')]: {
        fontSize: '5rem',
      },
      [theme.breakpoints.up('xxxl')]: {
        fontSize: '7rem',
      },
    },

    carouselTitle: {
      fontFamily: ['Abel', 'Open Sans'].join(','),
      fontWeight: 700,
      fontSize: '6.5rem',
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
      fontSize: '2.8rem',
    },
    cardTitle: {
      color: '#666',
      fontSize: '2.4rem',
      lineHeight: 1.1,
      fontWeight: 400,
      fontFamily: ['Open Sans', 'Abel'].join(','),
    },
    cardText: {
      color: '#666',
      fontFamily: ['Open Sans', 'Abel'].join(','),
      fontWeight: 300,
      lineHeight: 1.7,
      fontSize: '1.2rem',
    },

    title: {
      wordBreak: 'break-word',
      wordWrap: 'break-word',
      color: '#666',
      fontSize: '2rem',
      lineHeight: 1.1,
      fontWeight: 400,

      fontFamily: ['Open Sans', 'Abel'].join(','),
      [theme.breakpoints.up('sm')]: {
        fontSize: '2.2rem',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '2.8rem',
      },
    },
    content: {
      wordBreak: 'break-word',
      wordWrap: 'break-word',
      fontWeight: '500',
      fontSize: '0.9rem',
      letterSpacing: '0.03em',
      color: '#444',
      lineHeight: 1.1,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      [theme.breakpoints.up('sm')]: {
        fontSize: '1.35rem',
      },
    },
    gridText: {
      fontWeight: '400',
      fontSize: '1.15rem',
      color: '#666',
      lineHeight: 1.2,
      fontFamily: ['Abel', 'Open Sans'].join(','),
    },
    summaryHeader: {
      color: '#c48037',
      fontWeight: '700',
      letterSpacing: '0.08em',
      fontSize: '1.7rem',
      lineHeight: 1.1,
      fontFamily: ['Abel', 'Open Sans'].join(','),

      [theme.breakpoints.down('sm')]: {
        fontSize: '1.45rem',
      },
    },
    conditions: {
      fontSize: '0.85rem',
      verticalAlign: 'bottom',
      color: 'white',
      fontWeight: '700',
      letterSpacing: '0.09em',
      fontFamily: ['Abel', 'Open Sans'].join(','),
    },
    footerTitle: {
      padding: '1em 0',
      color: '#75C9CC',
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.1,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.012em',
    },
    footerSubtitle: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.1,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.1em',
      marginBottom: '0.5em',
    },
    footerParagraph: {
      fontWeight: 500,
      fontSize: '0.85rem',
      lineHeight: 1.2,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.1em',
    },
  },
  // Components override.
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Abel';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Abel'), local('Abel-Regular'), url(${Abel}) format('Abel');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Open sans';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Open sans'), local('Open sans-Regular'), url(${OpenSans}) format('Open sans');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          ':hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.14)',
            color: 'orange',
          },
        },
      },
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme, {
  breakpoints: [theme.breakpoints],
});

export default responsiveTheme;
