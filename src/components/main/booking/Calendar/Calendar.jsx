import { forwardRef, useContext } from 'react';
import { BookingContext } from 'context/BookingContext.js';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Grid, Box } from '@mui/material';
import {
  CustomPickersDay,
  GridContainer,
} from 'components/main/booking/Calendar/styled/index.jsx';
import TimeSelector from 'components/main/booking/Calendar/TimeSelector.jsx';
import {
  isSunday,
  isBankHoliday,
} from 'components/main/booking/Calendar/utils/index.js';
import gb from 'dayjs/locale/en-gb.js';

const PickersDay = ({ day, bankHolidays, disabled, ...pickersProps }) => {
  const isHoliday = isSunday(day) || isBankHoliday(day, bankHolidays);

  return (
    <CustomPickersDay
      className={isHoliday && 'bank-holiday'}
      disabled={disabled || isHoliday}
      day={day}
      {...pickersProps}
    />
  );
};

const slotProps = (bankHolidays) => ({
  day: {
    bankHolidays,
  },

  calendarHeader: {
    sx: {
      '& .MuiPickersCalendarHeader-label': {
        fontFamily: 'Abel, Open-sans',
        color: 'orange',
        fontWeight: 800,
        fontSize: '1.5rem',
      },
      '.MuiSvgIcon-root': {
        fontSize: '1.5rem',
      },
      span: {
        color: 'orange !important',
      },
    },
  },
});

const Calendar = ({ bankHolidays }) => {
  const { setBooking, booking } = useContext(BookingContext);
  const { date } = booking;

  const handleMonthChange = (date) => {
    setBooking({ ...booking, date: null });
  };

  const handleChange = (newDate) => {
    setBooking(({ date, ...restBooking }) => ({
      date: newDate,
      ...restBooking,
    }));
  };

  return (
    <GridContainer>
      <Grid item xs={12} md={7}>
        <LocalizationProvider
          adapterLocale={gb}
          dateAdapter={AdapterDayjs}
          dateLibInstance={dayjs.tz}
        >
          <DateCalendar
            value={date}
            minDate={dayjs()}
            maxDate={dayjs().add(1, 'year')}
            slots={{ day: PickersDay }}
            slotProps={slotProps(bankHolidays)}
            onChange={handleChange}
            onMonthChange={handleMonthChange}
            dayOfWeekFormatter={(day) => `${day.format('dd')}.`}
          />
        </LocalizationProvider>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        sx={{ paddingLeft: { md: 2 }, minHeight: '130px' }}
      >
        <TimeSelector />
      </Grid>
    </GridContainer>
  );
};

export default forwardRef(({ fadeIn, ...props }, ref) => {
  return (
    <Box
      sx={(theme) => {
        return {
          animation: fadeIn && `fadeIn 0.7s linear forwards 0.2s`,
          '@keyframes fadeIn': {
            '0%': {
              opacity: 0,
            },
            '100%': {
              opacity: 1,
            },
          },
        };
      }}
      ref={ref}
    >
      <Calendar {...props} />
    </Box>
  );
});
