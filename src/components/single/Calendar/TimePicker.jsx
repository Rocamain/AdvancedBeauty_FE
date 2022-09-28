import { useContext } from 'react';
import { BookingContext } from 'context/BookingContext';
import useButtonSelected from 'hooks/useButtonSelected';
import { Box } from '@mui/material';
import { TimeAvailableBtn } from 'components/single/Calendar/styled/';
import { filterHoursByTimeFrame } from 'components/single/Calendar/utils/';
import { addMinutes, addHours, set } from 'date-fns';

export default function TimePicker({ timeFrame, timesAvailable }) {
  const { setBooking, booking } = useContext(BookingContext);

  const { date } = booking;
  const { selected, handleSelector } = useButtonSelected({
    timeFrame,
    date,
  });

  const handleClick = (event) => {
    const btnTimeValue = event.target.firstChild.data;
    const [hours, minutes] = btnTimeValue.split(':');

    const resetTimeOnDate = set(date, {
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    });

    let appointmentDateWithTime = addMinutes(resetTimeOnDate, minutes);
    appointmentDateWithTime = addHours(appointmentDateWithTime, hours);

    setBooking(({ date, bookingStep, ...rest }) => {
      return { date: appointmentDateWithTime, bookingStep: 1, ...rest };
    });

    handleSelector(btnTimeValue);
  };

  const timesByTimeFrame = filterHoursByTimeFrame({
    timesAvailable,
    timeFrame,
  });

  return (
    <Box
      display="grid"
      gap={1}
      justifyContent="center"
      gridTemplateColumns="repeat(auto-fill, minmax(min(4em, 100%), 1fr))"
      sx={{ marginBottom: '1em' }}
    >
      {timesAvailable &&
        timesByTimeFrame.map((timeAvailable, index) => (
          <Box key={index}>
            <TimeAvailableBtn
              onClick={handleClick}
              variant={
                selected === timesAvailable || selected === 'all'
                  ? 'contained'
                  : 'outlined'
              }
              children={timeAvailable}
            />
          </Box>
        ))}
    </Box>
  );
}
