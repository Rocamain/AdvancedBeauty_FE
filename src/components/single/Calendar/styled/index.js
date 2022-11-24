import { CalendarPicker as MuiCalendar } from '@mui/x-date-pickers';
import { Button, Grid as MuiGrid, styled } from '@mui/material';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';

const GridContainer = styled((props) => (
  <MuiGrid
    {...props}
    container
    columnSpacing={[0, 0, 2, 5]}
    justifyContent="center"
  />
))(({ theme, props }) => {
  return {
    minWidth: 250,
    margin: '0 auto',
    paddingBottom: '5em',

    [theme.breakpoints.up('sm')]: {
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: 1300,
    },
  };
});

const TimeAvailableBtn = styled((props) => {
  return <Button fullWidth={true} color={'primary'} {...props} />;
})(({ theme, props }) => {
  return { fontSize: '1rem', fontWeight: 900 };
});

const CustomPickersDay = styled(({ ...props }) => {
  return <PickersDay {...props} disableRipple />;
})(({ theme }) => {
  return {
    display: 'flex',
    fontSize: '1.3rem',
    fontFamily: ['Open Sans', 'Helvetica'].join(','),
    backgroundColor: 'transparent',
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.14) !important',
      fontWeight: 700,
      color: '#75C9CC',
    },
    ':focus': {
      backgroundColor: '#75C9CC !important',
      color: 'white',
    },

    '&.Mui-selected': {
      backgroundColor: '75C9CC !important',
      fontWeight: '700 !important',
    },
    '&.bank-holiday': {
      color: 'orange',
      fontWeight: 500,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      fontWeight: 600,
    },
  };
});

const CalendarPicker = styled(({ ...props }) => {
  return (
    <MuiCalendar
      reduceAnimations={true}
      disableHighlightToday
      views={['day']}
      fullWidth
      {...props}
    />
  );
})(({ theme }) => {
  return {
    margin: '0 auto',
    maxHeight: 'none',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem',
      width: '90%',
    },

    '&>div:nth-of-type(1)': {
      padding: '0 ! important',
      paddingLeft: '0.5em ! important',
      paddingBottom: '0.3em',

      [theme.breakpoints.down('sm')]: {
        paddingLeft: '0.9em ! important',
      },
      '&>div[role=presentation]': {
        pointerEvents: 'none',
        fontSize: '1.7rem',
        lineHeight: 1.1,
        fontFamily: ['Abel'].join(','),
        fontWeight: 700,
        color: 'orange',
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.4rem',
          minHeight: '70px',
          maxHeight: '70px',
          pointerEvents: 'none',
        },
      },
    },

    '> div:nth-of-type(2)': {
      '> div:nth-of-type(1)': {
        justifyContent: 'space-between',
        span: {
          fontSize: '1.2rem',
          fontFamily: ['Open Sans', 'Abel'].join(','),
          fontWeight: '500',
        },
        '& span:nth-of-type(6)': {
          color: 'orange',
        },
        '& span:nth-of-type(7)': {
          color: 'orange',
        },
        [theme.breakpoints.down('sm')]: {
          span: {
            fontWeight: '700',
            fontSize: '1rem',
          },
        },
        [theme.breakpoints.up('sm')]: {
          '& span:nth-of-type(1)': {
            ':after': {
              content: '"on"',
            },
          },
          '& span:nth-of-type(2)': {
            ':after': {
              content: '"ue"',
            },
          },
          '& span:nth-of-type(3)': {
            ':after': {
              content: '"ed"',
            },
          },
          '& span:nth-of-type(4)': {
            ':after': {
              content: '"hu"',
            },
          },
          '& span:nth-of-type(5)': {
            ':after': {
              content: '"ri"',
            },
          },
          '& span:nth-of-type(6)': {
            color: 'orange',
            ':after': {
              content: '"at"',
            },
          },
          '& span:nth-of-type(7)': {
            color: 'orange',
            ':after': {
              content: '"un"',
            },
          },
        },
      },
    },

    'div[role=row]': {
      justifyContent: 'space-between',
    },
  };
});

export { CalendarPicker, GridContainer, TimeAvailableBtn, CustomPickersDay };
