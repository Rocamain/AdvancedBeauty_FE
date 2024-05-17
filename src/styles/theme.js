import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';
// import OpenSans from '@fontsource/open-sans';
// import Abel from '@fontsource/abel';

const BREAKPOINTS = { xs: 0, sm: 500, md: 900, lg: 1300, xl: 1600, xxl: 2100 };

let theme = createTheme();

theme = createTheme(theme, {
  breakpoints: createBreakpoints({
    values: BREAKPOINTS,
  }),
  palette: {
    primary: {
      main: '#00BCCC',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ffd4a3',
    },
    tertiary: { main: '#0693e3' },
    text: {
      main: '#888',
      primary: '#333333',
    },
    linkSelected: 'rgba(147, 201, 204, 0.4)',
    linkHover: 'rgba(10, 201, 204, 0.6)',

    background: {
      primary: 'linear-gradient(90deg,#75c9cc 0%,#00bccc 100%)',
    },
  },

  typography: {
    fontFamily: ['Abel', 'Open Sans'].join(','),
    fontSize: 16,

    h1: {
      color: '#333333',
      fontWeight: 500,
      fontSize: '5rem',
      lineHeight: 0.9,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '-0.017em',
    },
    h2: {
      color: '#333333',
      fontWeight: 500,
      fontSize: '4rem',
      lineHeight: 1,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.01em',
    },
    h3: {
      color: '#333333',
      fontWeight: 600,
      fontSize: '3rem',
      lineHeight: 1,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '-0.008em',
    },
    h4: {
      color: '#333333',
      fontWeight: 600,
      fontSize: '2.4rem',
      lineHeight: 1,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.05em',
    },
    h5: {
      color: '#333333',
      fontWeight: 600,
      fontSize: '2.2rem',
      lineHeight: 1.15,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.03em',
    },
    h6: {
      color: '#333333',
      fontWeight: 600,
      fontSize: '1.4rem',
      lineHeight: 1.1,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.03em',
    },
    p: {
      color: '#888',
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.2,
      fontFamily: ['Open Sans', 'Abel'].join(','),
      letterSpacing: '0.03em',
    },

    //  Variants

    form: {
      fontWeight: '500',
      fontSize: '1.3rem',
      color: '#666',
      lineHeight: 1.2,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      [theme.breakpoints.up('sm')]: {
        fontSize: '1.5rem',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '1.7rem',
      },
    },
    heroTitle: {
      fontFamily: ['Abel', 'Open Sans'].join(','),
      fontWeight: 700,
      fontSize: '4rem',
      color: '#00BCCC',
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
      [theme.breakpoints.up(1600)]: {
        fontSize: '9rem',
        lineHeight: 0.94,
        letterSpacing: '-0.257rem',
      },
      [theme.breakpoints.up(2100)]: {
        fontSize: '8.5rem',
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
      [theme.breakpoints.up(1600)]: {
        fontSize: '4.2rem',
      },
      [theme.breakpoints.up(2100)]: {
        fontSize: '5rem',
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
    carouselCardTitle: {
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
    },
    carouselCardParagraph: {
      color: '#666',
      fontSize: '1.05rem',
      letterSpacing: '0.07em',
      lineHeight: 1.2,
      fontWeight: 600,
      marginBottom: '1em',
      fontFamily: ['Open Sans', 'Abel'].join(','),

      [theme.breakpoints.up('sm')]: {
        fontWeight: 600,
        fontSize: '1.15rem',
        lineHeight: 1.2,
        letterSpacing: '0.06em',
      },
      [theme.breakpoints.up(1600)]: {
        fontSize: '1.25rem',
        letterSpacing: '0.035em',
        fontWeight: 600,
      },

      [theme.breakpoints.up(2100)]: {
        fontSize: '1.4rem',
      },
    },
    carouselCardHeadOne: {
      color: '#666',
      fontSize: '1.35rem',
      letterSpacing: '0.08em',
      lineHeight: 1.2,
      fontWeight: 600,
      marginBottom: '1.2em',
      fontFamily: ['Open Sans', 'Abel'].join(','),

      [theme.breakpoints.up('sm')]: {
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.2,
        letterSpacing: '0.06em',
      },
      [theme.breakpoints.up(2100)]: {
        fontSize: '1.7rem',
      },
    },
    carouselCardHeadTwo: {
      color: '#666',
      fontSize: '1.25rem',
      letterSpacing: '0.08em',
      lineHeight: 1.2,
      fontWeight: 600,
      marginBottom: '1.1em',
      fontFamily: ['Open Sans', 'Abel'].join(','),

      [theme.breakpoints.up('sm')]: {
        fontWeight: 600,
        fontSize: '1.35rem',
        lineHeight: 1.2,
        letterSpacing: '0.06em',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '1.45rem',
      },
    },
    carouselCardHeadThree: {
      color: '#666',
      fontSize: '1.1rem',
      letterSpacing: '0.08em',
      lineHeight: 1.2,
      fontWeight: 600,
      marginBottom: '1.1em',
      fontFamily: ['Open Sans', 'Abel'].join(','),

      [theme.breakpoints.up('sm')]: {
        fontWeight: 600,
        fontSize: '1.15rem',
        lineHeight: 1.2,
        letterSpacing: '0.06em',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '1.25rem',
      },
    },
    confirmationText: {
      color: '#777',
      fontFamily: ['Open Sans', 'Abel'].join(','),
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: '1.2rem',
      letterSpacing: '0.07em',
      [theme.breakpoints.up('md')]: {
        fontSize: '1.25rem',
      },

      [theme.breakpoints.up(1600)]: {
        fontSize: '1.35rem',
        fontWeight: 500,
      },
    },

    sectionTitle: {
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
    heroContent: {
      wordBreak: 'break-word',
      wordWrap: 'break-word',
      fontWeight: '500',
      fontSize: '1.3rem',
      letterSpacing: '0.08em',
      color: '#444',
      lineHeight: 1.1,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      [theme.breakpoints.up('md')]: {
        fontSize: '1.4rem',
        letterSpacing: '0.06em',
      },
      [theme.breakpoints.up(1600)]: {
        fontSize: '1.6rem',
        letterSpacing: '0.03em',
      },
    },

    summaryHeader: {
      color: '#c48037',
      fontWeight: '700',
      letterSpacing: '0.08em',
      fontSize: '1.7rem',
      lineHeight: 1.1,
      fontFamily: ['Abel', 'Open Sans'].join(','),

      [theme.breakpoints.down('lg')]: {
        fontSize: '1.45rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.25rem',
      },
    },
    conditions: {
      fontSize: '0.85rem',
      verticalAlign: 'bottom',
      color: 'white',
      fontWeight: '700',
      letterSpacing: '0.09em',
      fontFamily: ['Abel', 'Open Sans'].join(','),
      [theme.breakpoints.up('lg')]: {
        fontSize: '1rem',
      },
      [theme.breakpoints.up(2100)]: {
        fontSize: '1.05rem',
      },
    },
    footerTitle: {
      padding: '1em 0',
      color: '#00BCCC',
      fontWeight: 700,
      fontSize: '1.6rem',
      lineHeight: 1.1,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.012em',
      [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
      },
      [theme.breakpoints.up(2100)]: {
        fontSize: '2.3rem',
      },
    },
    footerSubtitle: {
      color: '#FFFFFF',
      fontWeight: 700,
      fontSize: '1.15rem',
      lineHeight: 1.1,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.1em',
      marginBottom: '0.5em',
      [theme.breakpoints.up('md')]: {
        fontSize: '1.2rem',
      },
      [theme.breakpoints.up(2100)]: {
        fontSize: '1.35rem',
      },
    },
    footerParagraph: {
      color: '#FFFFFF',
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.2,
      fontFamily: ['Abel', 'Open Sans'].join(','),
      letterSpacing: '0.1em',
      [theme.breakpoints.up('md')]: {
        fontSize: '1.1rem',
      },
      [theme.breakpoints.up(2100)]: {
        fontSize: '1.2rem',
      },
    },
  },
  // Components override.
  components: {
    MuiDayCalendar: {
      styleOverrides: {
        weekDayLabel: {
          fontSize: '1.2rem',
        },
      },
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
