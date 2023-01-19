import { useContext, useEffect } from 'react';
import { BookingContext } from 'context/BookingContext';
import { Box } from '@mui/material';
import { TimeAvailableBtn } from 'components/main/booking/Calendar/styled';
import { filterHoursByTimeFrame } from 'components/main/booking/Calendar/utils';
import useFetchBookingDb from 'hooks/useFetchBookingDb';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import gb from 'dayjs/locale/en-gb.js';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.locale(gb);
dayjs.tz.setDefault('Europe/Madrid');

export default function TimePicker({ timeFrame }) {
  const { setBooking, booking } = useContext(BookingContext);
  const { serviceName, shopName, date } = booking;

  const bookings = useFetchBookingDb(
    'getAvailableTimes',
    serviceName,
    shopName,
    date
  )?.bookings;

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
  const availableTimes = bookings?.availableTimes;
  const availableBookings = bookings?.availableBookings;

  const handleClick = (event) => {
    const btnTimeValue = event.target.id;

    const timeIndex = availableTimes.indexOf(btnTimeValue);
    const bookingWithTime = availableBookings[timeIndex];

    setBooking(({ bookingStep, time, ...rest }) => {
      return {
        appointment: bookingWithTime,
        time: btnTimeValue,
        bookingStep: 1,
        ...rest,
      };
    });
  };

  return (
    <Box
      display="grid"
      gap={1}
      justifyContent="center"
      gridTemplateColumns="repeat(auto-fill, minmax(min(4em, 100%), 1fr))"
    >
      {availableTimes &&
        filterHoursByTimeFrame({
          availableTimes,
          timeFrame,
        }).map((timeAvailable, index) => (
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