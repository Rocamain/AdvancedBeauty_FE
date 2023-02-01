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
  const { serviceName, date, bookingAPI } = booking;
  
  const bookings = useFetchBookingDb(serviceName, bookingAPI, date);

  useEffect(() => {
    setBooking(({ bookingStep, time, ...rest }) => {
      return {
        time: null,
        bookingStep: 'calendar',
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

    setBooking(({ time, bookingStep, ...rest }) => {
      return {
        appointment: bookingWithTime,
        time: btnTimeValue,
        bookingStep: 'time selected',
        ...rest,
      };
    });
  };

  return (
    bookings && (
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
    )
  );
}
