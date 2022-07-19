import { useState, useEffect } from 'react';
import enGb from 'date-fns/locale/en-GB';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { addYears } from 'date-fns';
import TimeSelector from 'components/single/Calendar/TimeSelector';
import { CalendarPicker } from 'components/single/Calendar/styled';
import { Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import mockFetchBooking from 'dev-utils/mockFetchBooking';

export default function Calendar({ service }) {
  const [date, setDate] = useState(new Date());
  const [timesAvailable, setTimesAvailable] = useState(null);
  const [booking, setBooking] = useState(null);

  const { pathname } = useLocation();

  useEffect(() => {
    if (date && service && pathname) {
      mockFetchBooking({ date, service, pathname }).then((times) =>
        setTimesAvailable(times)
      );
    }
  }, [date, service, pathname]);

  const handleClickTime = (event) => {
    setBooking({
      service,
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      time: event.target.innerText,
    });
  };

  const handleChange = (date) => {
    setDate(new Date(date));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGb}>
      <Grid container spacing={0} justifyContent="center">
        <Grid
          item
          xs={12}
          md={4}
          sx={{ position: 'relative', overflow: 'hidden' }}
        >
          <CalendarPicker
            date={date}
            views={['day']}
            minDate={new Date()}
            maxDate={addYears(new Date(), 1)}
            reduceAnimations={true}
            daySelected={date}
            fullWidth
            onChange={handleChange}
            disableHighlightToday
          />
        </Grid>
        <Grid
          item
          xs={10}
          md={4}
          sx={{
            position: 'relative',
            overflowX: 'hidden',
            marginBottom: '1em',
          }}
        >
          <TimeSelector
            date={date}
            timesAvailable={timesAvailable}
            handleClickTime={handleClickTime}
          />
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}
