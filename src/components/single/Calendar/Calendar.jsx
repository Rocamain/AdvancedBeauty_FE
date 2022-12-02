import { forwardRef, useContext } from 'react';
import { BookingContext } from 'context/BookingContext';
import { keyframes } from '@emotion/react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import gb from 'dayjs/locale/en-gb.js';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Grid, Box } from '@mui/material';
import {
  CalendarPicker,
  CustomPickersDay,
  GridContainer,
} from 'components/single/Calendar/styled';
import TimeSelector from 'components/single/Calendar/TimeSelector';
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
    const isSelected = date && day.toString() === date.toString();

    pickersProps.selected = isSelected;
    pickersProps.disabled = isDisabled;

    return (
      <CustomPickersDay
        className={isHoliday && 'bank-holiday'}
        day={day}
        {...pickersProps}
      />
    );
  };

  const handleMonthChange = () => {
    setBooking({ ...booking, date: null });
  };

  const handleChange = (newDate) => {
    setBooking(({ date, ...restBooking }) => ({
      date: dayjs(newDate),
      ...restBooking,
    }));
  };

  return (
    <GridContainer>
      <Grid item xs={12} md={7}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={gb}>
          <CalendarPicker
            data={date}
            minDate={dayjs()}
            maxDate={dayjs().add(1, 'year')}
            renderDay={renderDay}
            onChange={handleChange}
            onMonthChange={handleMonthChange}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} md={5} sx={{ paddingLeft: { md: 2 } }}>
        <TimeSelector />
      </Grid>
    </GridContainer>
  );
};
