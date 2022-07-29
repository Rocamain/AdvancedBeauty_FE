import { CalendarPicker as MuiCalendar } from '@mui/x-date-pickers';
import { addYears } from 'date-fns';
import { Button, Grid as MuiGrid, styled } from '@mui/material';

const GridContainer = styled((props) => (
  <MuiGrid
    {...props}
    container
    rowSpacing={[0, 2, 2, 9]}
    columnSpacing={[0, 0, 1, 4]}
    justifyContent="center"
  />
))(({ theme, props }) => {
  return {
    minWidth: 250,
    maxWidth: 330,
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      minWidth: 330,
      maxWidth: 380,
    },
    [theme.breakpoints.up('md')]: {
      minWidth: 800,
      maxWidth: 900,
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

const CalendarPicker = styled(({ date, ...props }) => {
  return (
    <MuiCalendar
      date={date}
      minDate={new Date()}
      maxDate={addYears(new Date(), 1)}
      reduceAnimations={true}
      views={['day']}
      fullWidth
      {...props}
      disableHighlightToday
      sx={{ minWidth: [240, 330, 330, 380], maxWidth: [300, 500, 300] }}
    />
  );
})(({ theme, props }) => {
  return {
    margin: '0 auto',
    maxHeight: 'none',
    width: '100%',

    // HEADER Month and icons
    '> div:nth-of-type(1)': {
      margin: 0,
      marginBottom: '1em',

      [theme.breakpoints.up('sm')]: {
        paddingLeft: '0.7em',
        paddingRight: '0.1em',
      },
      [theme.breakpoints.down('sm')]: {
        // padding: 0,
        marginBottom: '0.2em',
      },
      // Month
      '& >div[role=presentation]': {
        fontSize: '2rem',
        lineHeight: 1.1,

        fontFamily: ['Abel'].join(','),
        fontWeight: 700,
        color: 'orange',
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.7rem',
          minHeight: '70px',
          maxHeight: '70px',
          pointerEvents: 'none',
          '& >div': {
            // minHeight: '60px',
            // maxHeight: '100px',
          },
        },
      },
      svg: {},
    },

    '> div:nth-of-type(2)': {
      // HEADER days of the Week
      '> div:nth-of-type(1)': {
        justifyContent: 'space-evenly',
        span: {
          fontSize: '1.3rem',
          fontFamily: ['Open Sans', 'Abel'].join(','),
          fontWeight: '500',
        },

        '& span:nth-of-type(6)': {
          color: '#0693e3',
        },
        '& span:nth-of-type(7)': {
          color: '#0693e3',
        },
        [theme.breakpoints.down('sm')]: {
          span: {
            fontWeight: '700',
            fontSize: '1.1rem',
          },
        },
        [theme.breakpoints.up('sm')]: {
          '& span:nth-of-type(1)': {
            ':after': {
              content: "'on'",
            },
          },
          '& span:nth-of-type(2)': {
            ':after': {
              content: "'ue'",
            },
          },
          '& span:nth-of-type(3)': {
            ':after': {
              content: "'ed'",
            },
          },
          '& span:nth-of-type(4)': {
            ':after': {
              content: "'hu'",
            },
          },
          '& span:nth-of-type(5)': {
            ':after': {
              content: "'ri'",
            },
          },
          '& span:nth-of-type(6)': {
            color: 'orange',
            ':after': {
              content: "'at'",
            },
          },
          '& span:nth-of-type(7)': {
            color: 'orange',
            ':after': {
              content: "'un'",
            },
          },
        },
      },
    },

    '.MuiMonthPicker-root': {
      width: '100%',
    },
    // Calendar days
    '.PrivatePickersFadeTransitionGroup-root': {
      display: 'flex',
      justifyContent: 'center',
    },

    'div[role=grid]': {
      display: 'flex',
      flexDirection: 'column',
    },

    // Day
    'div[role=cell]': {
      width: '36px',
      '.MuiPickersDay': {},
    },
    'div[role=row]': {
      justifyContent: 'space-evenly',
      '.MuiPickersDay-root': {
        display: 'flex',
        fontSize: '1.3rem',
        fontFamily: ['Open Sans', 'Helvetica'].join(','),
        backgroundColor: 'transparent',
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.1rem',
          fontWeight: 500,
        },
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.14)',
          fontWeight: 700,
          color: 'orange',
        },
        '&.Mui-selected': {
          backgroundColor: '#75C9CC',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.14)',
          },
        },
      },
    },
  };
});

export { CalendarPicker, GridContainer, TimeAvailableBtn };
