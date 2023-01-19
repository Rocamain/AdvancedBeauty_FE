import { forwardRef, useContext } from 'react';
import { BookingContext } from 'context/BookingContext';
import { keyframes } from '@emotion/react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Grid, Box } from '@mui/material';
import {
  CalendarPicker,
  CustomPickersDay,
  GridContainer,
} from 'components/main/booking/Calendar/styled';
import TimeSelector from 'components/main/booking/Calendar/TimeSelector';
import { isSunday, isBankHoliday } from './utils/index';

export default forwardRef(({ fadeIn, ...props }, ref) => {
  const fadeInAnimation = keyframes`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  `;

  return (
    <Box
      sx={(theme) => {
        return {
          animation: fadeIn && `${fadeInAnimation} 0.7s linear forwards 0.2s`,
        };
      }}
      ref={ref}
    >
      <Calendar {...props} />
    </Box>
  );
});

const Calendar = ({ bankHolidays }) => {
  const { setBooking, booking } = useContext(BookingContext);
  const { date } = booking;

  const renderDay = (day, selectedDates, pickersProps) => {
    const isHoliday = isSunday(day) || isBankHoliday(day, bankHolidays);
    const isDisabled = pickersProps.disabled === true || isHoliday;

    if (date && day.format('DD/MM/YYYY') === date.format('DD/MM/YYYY')) {
      pickersProps.selected = true;
    }

    pickersProps.disabled = isDisabled;

    return (
      <CustomPickersDay
        className={isHoliday && 'bank-holiday'}
        day={day}
        {...pickersProps}
      />
    );
  };

  const handleMonthChange = (date) => {
    setBooking({ ...booking, bookingStep: 0, date: null });
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
          dateAdapter={AdapterDayjs}
          dateLibInstance={dayjs.tz}
        >
          <CalendarPicker
            date={date && date}
            minDate={dayjs()}
            maxDate={dayjs().add(1, 'year')}
            renderDay={renderDay}
            onChange={handleChange}
            onMonthChange={handleMonthChange}
            dayOfWeekFormatter={(day) => `${day}.`}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} md={5} sx={{ paddingLeft: { md: 2 } }}>
        <TimeSelector />
      </Grid>
    </GridContainer>
  );
};
