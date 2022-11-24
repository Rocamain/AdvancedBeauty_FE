import { useContext, useEffect } from 'react';
import { BookingContext } from 'context/BookingContext';
import { Box } from '@mui/material';
import { TimeAvailableBtn } from 'components/single/Calendar/styled/';
import { filterHoursByTimeFrame } from 'components/single/Calendar/utils/';
import dayjs from 'dayjs';
import useFetchBookingDb from 'hooks/useFetchBookingDb';

export default function TimePicker({ timeFrame }) {
  const { setBooking, booking } = useContext(BookingContext);
  const { serviceName, shopName, date } = booking;
  const { bookings } = useFetchBookingDb(
    'getAvailableTimes',
    serviceName,
    shopName,
    date
  );

  const availableTimes = bookings?.availableTimes;
  const availableBookings = bookings?.availableBookings;

  useEffect(() => {
    setBooking(({ bookingStep, time, ...rest }) => {
      return {
        time: null,
        bookingStep: 0,
        ...rest,
      };
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeFrame]);

  const handleClick = (event) => {
    const btnTimeValue = event.target.id;
    const timeIndex = availableTimes.indexOf(btnTimeValue);
    const bookingWithTime = availableBookings[timeIndex];
    const offset = date.$offset;

    const appointmentDateWithTime = dayjs(date)
      .subtract(offset)
      .set('hour', 0)
      .set('minutes', 0)
      .set('seconds', 0)
      .set('milliseconds', 0);

    setBooking(({ bookingStep, time, ...rest }) => {
      return {
        date: appointmentDateWithTime,
        dbBookingDate: bookingWithTime,
        time: btnTimeValue,
        bookingStep: 1,
        ...rest,
      };
    });
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
                booking.time === timeAvailable || booking.time === null
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
