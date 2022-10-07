import { BookingContext } from 'context/BookingContext';
import { keyframes } from '@emotion/react';
import { useState, forwardRef, useContext } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import gb from 'dayjs/locale/en-gb';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Grid, Box } from '@mui/material';
import {
  CalendarPicker,
  CustomPickersDay,
  GridContainer,
} from 'components/single/Calendar/styled';
import TimeSelector from 'components/single/Calendar/TimeSelector';
import { Loading } from 'components/shared/index';
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

  const renderDay = (date, selectedDates, pickersProps) => {
    if (
      isSunday(date)
      // || isBankHoliday(date, bankHolidays)
    ) {
      pickersProps.disabled = true;
      return <CustomPickersDay className="bank-holiday" {...pickersProps} />;
    }
    if (true) return <CustomPickersDay day={dayjs(date)} {...pickersProps} />;
  };

  const handleMonthChange = (date) => {
    const newYear = date.year();
    if (newYear !== year) {
      setYear(newYear);
    }
  };

  const handleChange = (newDate) => {
    setBooking(({ date, ...restBooking }) => ({
      date: dayjs(newDate).tz(),
      ...restBooking,
    }));
  };

  return (
    // bankHolidays &&
    <GridContainer>
      <Grid
        item
        xs={12}
        md={5}
        sx={{ position: 'relative', overflow: 'hidden' }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={gb}>
          <CalendarPicker
            label="Calendar appointment picker"
            date={date}
            minDate={dayjs()}
            maxDate={dayjs().add(1, 'year')}
            disablePast={true}
            renderDay={renderDay}
            onChange={(day) => handleChange(day)}
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
          overflowXp: 'hidden',
          marginBottom: '1em',
        }}
      >
        <TimeSelector />
      </Grid>
    </GridContainer>
  );
};
