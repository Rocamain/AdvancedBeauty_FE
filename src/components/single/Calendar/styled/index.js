import { CalendarPicker as MuiCalendar } from '@mui/x-date-pickers';
import { addYears } from 'date-fns';
import { Button, Grid as MuiGrid, styled } from '@mui/material';

const GridContainer = styled((props) => (
  <MuiGrid {...props} container spacing={0} justifyContent="center" />
))(({ theme, props }) => {
  return {};
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
    />
  );
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
        '& .Mui-selected': { backgroundColor: 'green' },
      },
    },
  };
});

export { CalendarPicker, GridContainer, TimeAvailableBtn };
