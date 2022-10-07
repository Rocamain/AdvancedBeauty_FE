import { useContext } from 'react';
import { BookingContext } from 'context/BookingContext';
import useButtonSelected from 'hooks/useButtonSelected';
import { Box } from '@mui/material';
import { TimeAvailableBtn } from 'components/single/Calendar/styled/';
import { filterHoursByTimeFrame } from 'components/single/Calendar/utils/';
import dayjs from 'dayjs';

import useFetchData from 'hooks/useFetchData';

export default function TimePicker({ timeFrame }) {
  const { setBooking, booking } = useContext(BookingContext);
  const { serviceName, shopName, date } = booking;

  const { data: bookings } = useFetchData('bookingSystem', {
    action: 'getAvailableTimes',
    serviceName,
    shopName,
    date,
  });

  const availableTimes = bookings?.availableTimes;
  const availableBookings = bookings?.availableBookings;

  const { selected, handleSelector } = useButtonSelected({
    timeFrame,
    date,
  });

  const handleClick = (event) => {
    const btnTimeValue = event.target.id;
    const timeIndex = availableTimes.indexOf(btnTimeValue);
    const bookingWithTime = availableBookings[timeIndex];

    const [hours, minutes] = btnTimeValue.split(':');
    const offset = date.$offset;

    const appointmentDateWithTime = dayjs(date)
      .subtract(offset)
      .set('hour', hours)
      .set('minutes', minutes)
      .set('seconds', 0)
      .tz();

    setBooking(({ bookingStep, date, time, ...rest }) => {
      return {
        date: appointmentDateWithTime,
        dbBookingDate: bookingWithTime,
        time: btnTimeValue,
        bookingStep: 1,
        ...rest,
      };
    });

    handleSelector(btnTimeValue);
  };

  if (availableTimes) {
    const timesByTimeFrame = filterHoursByTimeFrame({
      availableTimes,
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
        {timesByTimeFrame.map((timeAvailable, index) => (
          <Box key={index} id={timeAvailable}>
            <TimeAvailableBtn
              id={timeAvailable}
              onClick={handleClick}
              variant={
                selected === availableTimes || selected === 'all'
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
}
