import { BookingContext } from 'context/BookingContext';
import { keyframes } from '@emotion/react';
import { useState, forwardRef, useContext } from 'react';
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
      visibility: hidden;
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

const Calendar = ({ shopName, serviceName, date }) => {
  const [year, setYear] = useState(date.year());
  const { setBooking, booking } = useContext(BookingContext);

  // const { data: bankHolidays, loading } = useFetchData('calendar', {
  //   year,
  //   location: shopName,
  // });

  const renderDay = (day, selectedDates, pickersProps) => {
    if (
      isSunday(day)
      // || isBankHoliday(day, bankHolidays)
    ) {
      pickersProps.disabled = true;

      return (
        <CustomPickersDay
          className="bank-holiday"
          day={day}
          {...pickersProps}
        />
      );
    }

    if (day.$D === date.$D) {
      pickersProps.selected = day.$D === date.$D;
    }

    return <CustomPickersDay day={date} {...pickersProps} />;
  };

  const handleMonthChange = (date) => {
    const newYear = date.year();
    if (newYear !== year) {
      setYear(newYear);
    }
  };

  const handleChange = (newDate) => {
    setBooking(({ date, ...restBooking }) => ({
      date: dayjs(newDate),
      ...restBooking,
    }));
  };
  

  return (
    // bankHolidays &&
    <GridContainer>
      <Grid item xs={12} md={6}>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          //
          adapterLocale={gb}
        >
          <CalendarPicker
            label="Calendar appointment picker"
            data={date}
            minDate={dayjs()}
            maxDate={dayjs(new Date()).add(1, 'year')}
            disablePast
            renderDay={renderDay}
            onChange={handleChange}
            onMonthChange={handleMonthChange}
          />
        </LocalizationProvider>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        sx={{
          position: 'relative',
          overflowX: 'hidden',
          marginBottom: '1em',
        }}
      >
        <TimeSelector />
      </Grid>
    </GridContainer>
  );
};
