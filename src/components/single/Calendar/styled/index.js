import { CalendarPicker as MuiCalendar } from '@mui/x-date-pickers';
import { addYears } from 'date-fns';
import { Button, Grid as MuiGrid, styled, TextField } from '@mui/material';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';

const GridContainer = styled((props) => (
  <MuiGrid
    {...props}
    container
    rowSpacing={[0, 2, 2, 9]}
    columnSpacing={[0, 0, 3, 4]}
    justifyContent="center"
  />
))(({ theme, props }) => {
  return {
    minWidth: 250,
    width: '85%',
    margin: '0 auto',

    [theme.breakpoints.down('md')]: {
      minWidth: 330,
      maxWidth: 430,
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

const CustomPickersDay = styled(PickersDay)(({ theme }) => ({
  display: 'flex',
  fontSize: '1.3rem',
  fontFamily: ['Open Sans', 'Helvetica'].join(','),
  backgroundColor: 'transparent',

  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
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
}));

const CalendarPicker = styled(({ date, renderWeekPickerDay, ...props }) => {
  return (
    <MuiCalendar
      date={date}
      minDate={new Date()}
      maxDate={addYears(new Date(), 1)}
      reduceAnimations={true}
      views={['day']}
      renderInput={(params) => <TextField {...params} />}
      renderDay={renderWeekPickerDay}
      fullWidth
      {...props}
      disableHighlightToday
      sx={{ minWidth: [220, 330, 330, 380], maxWidth: [300, 500, 300] }}
    />
  );
})(({ theme }) => {
  return {
    margin: '0 auto',
    maxHeight: 'none',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
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

    '>div:nth-of-type(2)': {
      '>div:nth-of-type(1)': {
        justifyContent: 'space-evenly',
        span: {
          fontSize: '1.2rem',
          fontFamily: ['Open Sans', 'Abel'].join(','),
          fontWeight: '500',
        },
        '&span:nth-of-type(6)': {
          color: 'orange',
        },
        '&span:nth-of-type(7)': {
          color: 'orange',
        },
        [theme.breakpoints.down('sm')]: {
          span: {
            fontWeight: '700',
            fontSize: '1rem',
          },
        },
        [theme.breakpoints.up('sm')]: {
          '&span:nth-of-type(1)': {
            ':after': {
              content: '"on"',
            },
          },
          '&span:nth-of-type(2)': {
            ':after': {
              content: '"ue"',
            },
          },
          '&span:nth-of-type(3)': {
            ':after': {
              content: '"ed"',
            },
          },
          '&span:nth-of-type(4)': {
            ':after': {
              content: '"hu"',
            },
          },
          '&span:nth-of-type(5)': {
            ':after': {
              content: '"ri"',
            },
          },
          '&span:nth-of-type(6)': {
            color: 'orange',
            ':after': {
              content: '"at"',
            },
          },
          '&span:nth-of-type(7)': {
            color: 'orange',
            ':after': {
              content: '"un"',
            },
          },
        },
      },
    },

    'div[role=row]': {
      justifyContent: 'space-evenly',
    },
  };
});

export { CalendarPicker, GridContainer, TimeAvailableBtn, CustomPickersDay };
