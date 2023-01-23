import { createTheme, responsiveFontSizes } from '@mui/material';
import { createBreakpoints } from '@mui/system';
import OpenSans from '@fontsource/open-sans';
import Abel from '@fontsource/abel';

let theme = createTheme();
const BREAKPOINTS = { xs: 0, sm: 600, md: 900, lg: 1300, xl: 1600, xxl: 2100 };
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
      secondary: 'rgba(10, 201, 204, 0.6)',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffd4a3',
      contrastText: '#fff',
    },
    tertiary: { main: '#0693e3', contrastText: '#fff' },
    text: {
      main: '#666',
      primary: '#333333',
      secondary: '#75C9CC',
    },
    linkSelected: 'rgba(147, 201, 204, 0.4)',
    linkHover: 'rgba(10, 201, 204, 0.6)',

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
      fontSize: '4rem',
      lineHeight: 1.2,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.01em',
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
      fontSize: '2.4rem',
      lineHeight: 0.8,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.05em',
    },
    h5: {
      fontWeight: 600,
      fontSize: '2.2rem',
      lineHeight: 1,
      fontFamily: ['Open Sans', 'Abel'].join(','),
      letterSpacing: '-0.003em',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.35rem',
      lineHeight: 1.4,
      fontFamily: ['Open Sans', 'Abel'].join(','),
      letterSpacing: '0.06em',
    },
    p: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.4,
      color: '#666',
      fontFamily: ['Open Sans', 'Abel'].join(','),
      letterSpacing: '0.05em',
      // [theme.breakpoints.down('sm')]: {
      //   fontSize: '0.9rem',
      // },
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

    body1: {
      fontWeight: '500',
      fontSize: '1.7rem',
      color: '#666',
      lineHeight: 1.2,
      fontFamily: ['Abel', 'Open Sans'].join(','),
    },
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
        fontSize: '7rem',
        lineHeight: 1,
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '8rem',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '9rem',
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
      fontWeight: 700,
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
      lineHeight: 0.9,
      color: '#00BCCC',
      letterSpacing: '-0.017em',
      textShadow: '10px 0px 15px white',
      wordBreak: 'break-word',
    },

    carouselSubtitle: {
      color: '#666',
      fontFamily: ['Abel', 'Open Sans'].join(','),
      fontWeight: 700,
      lineHeight: 1.1,
      fontSize: '3.2rem',
    },
    cardTitle: {
      color: '#333',
      textAlign: 'center',
      fontSize: '1.6rem',
      letterSpacing: '0.04em',
      lineHeight: 1.3,
      fontWeight: 700,
      padding: 0,
      fontFamily: ['Open Sans', 'Abel'].join(','),

      [theme.breakpoints.down(300)]: {
        wordBreak: 'break-all',
      },
      [theme.breakpoints.up('sm')]: {
        fontWeight: 600,
        fontSize: '1.7rem',
        lineHeight: 1.2,
        letterSpacing: '0.03em',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '1.9rem',
        letterSpacing: '0.035em',
        fontWeight: 600,
      },

      [theme.breakpoints.up('xxl')]: {
        fontSize: '2.5rem',
      },
    },
    cardText: {
      color: '#777',
      fontFamily: ['Open Sans', 'Abel'].join(','),
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: '1.2rem',
      letterSpacing: '0.07em',
      [theme.breakpoints.up('md')]: {
        fontSize: '1.25rem',
      },

      [theme.breakpoints.up('xl')]: {
        fontSize: '1.35rem',
        fontWeight: 500,
      },
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
      fontSize: '1.1rem',
      letterSpacing: '0.03em',
      color: '#444',
      lineHeight: 1.1,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      [theme.breakpoints.up('sm')]: {
        fontSize: '1.35rem',
      },
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
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.1,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.012em',
    },
    footerSubtitle: {
      color: '#FFFFFF',
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: 1.1,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.1em',
      marginBottom: '0.5em',
    },
    footerParagraph: {
      color: '#FFFFFF',
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
    MuiInputBase: {
      styleOverrides: {
        '&-MuiOutlinedInput-input': {
          fontSize: '1.2rem',
        },
      },
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme, {
  breakpoints: [theme.breakpoints],
});

export default responsiveTheme;
