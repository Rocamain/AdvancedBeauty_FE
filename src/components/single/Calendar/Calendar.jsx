import { keyframes } from '@emotion/react';
import { useState, useContext, useEffect, forwardRef } from 'react';
import { utcToZonedTime } from 'date-fns-tz';
import { BookingContext } from 'context/BookingContext';
import {
  getYear,
  getMonth,
  getDate,
  set,
  isSunday as checkIsSunday,
} from 'date-fns';
import enGb from 'date-fns/locale/en-GB';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TimeSelector from 'components/single/Calendar/TimeSelector';
import { Grid, Box } from '@mui/material';
import { CustomPickersDay } from 'components/single/Calendar/styled';
import {
  CalendarPicker,
  GridContainer,
} from 'components/single/Calendar/styled';

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

const formatDate = (date) => {
  const year = getYear(date);
  const month = getMonth(date) + 1;

  const day = getDate(date);

  return `${day}/${month}/${year}`;
};

const Calendar = ({ bankHolidays }) => {
  const [timesAvailable, setTimesAvailable] = useState(null);
  const { booking, setBooking } = useContext(BookingContext);
  const { date, serviceName, shopName } = booking;

  useEffect(() => {
    let controller = new AbortController();
    if (date) {
      const formattedDate = formatDate(date);

      const fetchData = async () => {
        const URL = `http://localhost:9000/bookings/available?date=${formattedDate}&shopName=${shopName}&serviceName=${serviceName}`;

        try {
          let data = await fetch(URL, {
            signal: controller.signal,
          });

          data = await data.json();
          const { availableTimes } = data.bookings;

          setTimesAvailable(availableTimes);

          controller = null;
        } catch (err) {
          console.log({ err });
        }
      };
      fetchData();
    }
    return () => controller?.abort();
  }, [date, serviceName, shopName]);

  const handleChange = (newDate) => {
    const formattedDate = utcToZonedTime(newDate, 'Europe/Madrid');

    const appointmentDate = set(formattedDate, {
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });

    setBooking(({ date, time, isBtnActive, ...rest }) => ({
      date: appointmentDate,
      isBtnActive: false,

      ...rest,
    }));
  };

  const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
    if (bankHolidays) {
      let day = getDate(date).toString();
      day = day.length === 1 ? `0${day}` : day;
      const month = getMonth(date);
      const year = getYear(date);
      const formattedDate = `${year}-${month}-${day}`;
      const isBankHoliday = bankHolidays.includes(formattedDate);
      const isSunday = checkIsSunday(date);

      if (isSunday || isBankHoliday) {
        pickersDayProps.disabled = true;

        return (
          <CustomPickersDay
            {...pickersDayProps}
            sx={{ color: 'orange !important', fontWeight: 900 }}
          />
        );
      }

      return <CustomPickersDay {...pickersDayProps} />;
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGb}>
      <GridContainer>
        <Grid
          item
          xs={12}
          md={5}
          sx={{ position: 'relative', overflow: 'hidden' }}
        >
          <CalendarPicker
            date={date}
            onChange={handleChange}
            renderWeekPickerDay={renderWeekPickerDay}
          />
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
          <TimeSelector date={date} timesAvailable={timesAvailable} />
        </Grid>
      </GridContainer>
    </LocalizationProvider>
  );
};
