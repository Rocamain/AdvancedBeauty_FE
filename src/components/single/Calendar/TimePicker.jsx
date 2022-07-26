import { useContext } from 'react';
import { BookingContext } from 'context/BookingContext';
import useButtonSelected from 'hooks/useButtonSelected';
import { Box } from '@mui/material';
import { TimeAvailableBtn } from 'components/single/Calendar/styled/';
import { filterHoursByTimeFrame } from 'components/single/Calendar/utils/';

export default function TimePicker({ timeFrame, timesAvailable }) {
  const { setBooking, booking } = useContext(BookingContext);

  const { date } = booking;
  const { selected, handleSelector } = useButtonSelected({
    timeFrame,
    date,
  });

  const handleClick = (event) => {
    const btnTimeValue = event.target.firstChild.data;

    setBooking(({ time, bookingStep, ...rest }) => {
      return { time: btnTimeValue, bookingStep: 1, ...rest };
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
        timesByTimeFrame.map((timesAvailable, index) => (
          <Box key={index}>
            <TimeAvailableBtn
              onClick={handleClick}
              variant={
                selected === timesAvailable || selected === 'all'
                  ? 'contained'
                  : 'outlined'
              }
              children={timesAvailable}
            />
          </Box>
        ))}
    </Box>
  );
}
