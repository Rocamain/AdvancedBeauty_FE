import { CalendarPicker as MuiCalendar } from '@mui/x-date-pickers';
import { addYears } from 'date-fns';
import { Button, Grid as MuiGrid, styled } from '@mui/material';

const GridContainer = styled((props) => (
  <MuiGrid {...props} container spacing={[0, 0, 2]} justifyContent="center" />
))(({ theme, props }) => {
  return {
    minWidth: 280,
    maxWidth: 300,
    margin: '0 auto',
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
      sx={{ minWidth: [240, 300, 330, 380], maxWidth: [300, 500, 300] }}
    />
  );
})(({ theme, props }) => {
  return {
    margin: '0 auto',
    maxHeight: 'none',
    width: '100%',

    // HEADER Month and icons
    '> div:nth-of-type(1)': {
      marginBottom: '1em',
      justifyContent: 'space-evenly',
      fontSize: '2.7rem ',
      margin: 0,

      [theme.breakpoints.down('sm')]: {
        fontSize: '2.8rem',
      },
      // Month
      '& >div[role=presentation]': {
        fontSize: '1.5rem',

        [theme.breakpoints.down('sm')]: {
          fontSize: '1.3rem',
        },
      },
      svg: {},
    },

    '> div:nth-of-type(2)': {
      // HEADER days of the Week
      '> div:nth-of-type(1)': {
        justifyContent: 'space-evenly',
        span: {
          fontSize: '1.2rem',
        },

        '& span:nth-of-type(6)': {
          color: '#0693e3',
        },
        '& span:nth-of-type(7)': {
          color: '#0693e3',
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
            color: '#0693e3',
            ':after': {
              content: "'at'",
            },
          },
          '& span:nth-of-type(7)': {
            color: '#0693e3',
            ':after': {
              color: '#0693e3',
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
        backgroundColor: 'transparent',
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.1rem',
        },
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.14)',
          color: 'black',
          // opacity: '0.2',
        },
        '&.Mui-selected': {
          backgroundColor: '#75C9CC',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.14)',
            color: 'black',
            // opacity: '0.2',
          },
        },
      },
    },
  };
});

export { CalendarPicker, GridContainer, TimeAvailableBtn };
