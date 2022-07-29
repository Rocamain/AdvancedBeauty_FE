import { keyframes } from '@emotion/react';
import { useState, useEffect, useContext, forwardRef } from 'react';
import { useLocation } from 'react-router-dom';
import { BookingContext } from 'context/BookingContext';
import enGb from 'date-fns/locale/en-GB';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TimeSelector from 'components/single/Calendar/TimeSelector';
import { Grid, Box } from '@mui/material';
import {
  CalendarPicker,
  GridContainer,
} from 'components/single/Calendar/styled';

import mockFetchBooking from 'dev-utils/mockFetchBooking';

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
          margin: '2em auto',
          animation: fadeIn && `${fadeInAnimation} 0.7s linear forwards 0.2s`,
        };
      }}
      ref={ref}
    >
      <Calendar {...props} />
    </Box>
  );
});

const Calendar = (props) => {
  const [timesAvailable, setTimesAvailable] = useState(null);
  const { booking, setBooking } = useContext(BookingContext);
  const { date, serviceName } = booking;
  const { pathname } = useLocation();

  useEffect(() => {
    if (date) {
      mockFetchBooking({ serviceName, date, pathname }).then((times) =>
        setTimesAvailable(times)
      );
    }
  }, [date, serviceName, pathname]);

  const handleChange = (newDate) => {
    const day = newDate.getDate();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();
    const formattedDate = new Date(year, month, day);
    setBooking(({ date, time, isBtnActive, ...rest }) => ({
      date: formattedDate,
      isBtnActive: false,
      time: null,
      ...rest,
    }));
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
          <CalendarPicker date={date} onChange={handleChange} />
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
          <TimeSelector date={date} timesAvailable={timesAvailable} />
        </Grid>
      </GridContainer>
    </LocalizationProvider>
  );
};
