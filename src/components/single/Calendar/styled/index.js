import { CalendarPicker as MuiCalendar } from '@mui/x-date-pickers';
import { styled } from '@mui/material';

const CalendarPicker = styled((props) => {
  return <MuiCalendar {...props} />;
})(({ theme, props }) => {
  return {
    margin: '0 auto',
    maxHeight: 'none',
    width: '70%',
    maxWidth: 500,

    // HEADER Month and icons
    '> div:nth-of-type(1)': {
      marginBottom: '1em',
      justifyContent: 'space-evenly',
      fontSize: '1.5rem ',
      padding: 0,
      margin: 0,
      '& >div[role=presentation]': {
        fontSize: '1.3rem',
      },
      svg: {},
    },

    '> div:nth-of-type(2)': {
      // HEADER days of the Week
      '> div:nth-of-type(1)': {
        justifyContent: 'space-evenly',
        span: {
          fontSize: '1rem',
        },
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
        '&.Mui-selected': { backgroundColor: theme.palette.primary.main },
      },
    },
  };
});

export { CalendarPicker };
