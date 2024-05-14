import { useState, useRef } from 'react';
import useFetchBankHolidays from 'hooks/useFetchBankHolidays';
import { BookingContext } from 'context/BookingContext';
import useShowSummary from 'hooks/useShowSummary';
import {
  // Modal as MuiModal,
  Box,
  Button as MuiButton,
} from '@mui/material/';
import Stepper from 'components/main/booking/Modal/Stepper.jsx';
import Summary from 'components/main/booking/Modal/Summary.jsx';
import Calendar from 'components/main/booking/Calendar/Calendar.jsx';
import Header from 'components/main/booking/Modal/BookingHeader.jsx';
import {
  // DialogContent,
  Dialog,
  ModalWrapper,
  ExitBtn,
} from 'components/main/booking/Modal/styled/index.jsx';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import gb from 'dayjs/locale/en-gb.js';
import { INITIAL_BOOKING_STATE } from 'constants/index.js';
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Europe/Madrid');
dayjs.extend(customParseFormat);
dayjs.locale(gb);

export default function Modal({
  open,
  handleClose,
  serviceName,
  price,
  serviceType,
  shopName,
  bookingAPI,
}) {
  const [booking, setBooking] = useState({
    ...INITIAL_BOOKING_STATE,
    serviceName,
    shopName,
    bookingAPI,
    price,
    date: dayjs.tz(),
  });

  const fadeOut = useRef(booking.bookingStep === 'initial');
  const { bookingStep, year } = booking;
  const bankHolidays = useFetchBankHolidays(year, shopName);
  const { calenderRef, summaryRef, showSummary } = useShowSummary(bookingStep);

  const isBtnActive = Boolean(
    bookingStep === 'time selected' || bookingStep === 'confirmation'
  );

  const handleExitBtn = () => {
    handleClose();
  };

  const handleStep = () => {
    setBooking(({ bookingStep, ...rest }) => ({
      bookingStep: 'summary',
      ...rest,
    }));
  };

  return (
    <BookingContext.Provider value={{ booking, setBooking }}>
      {bankHolidays && (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='booking calendar'
          aria-describedby='booking calendar, choose a date'
          scroll='paper'
        >
          <Stepper step={bookingStep} />
          <ExitBtn onClick={handleExitBtn} />
          <ModalWrapper fade_out={fadeOut.current ? 'fadeout' : undefined}>
            <Header title={serviceType} subtitle={serviceName} />
            {showSummary ? (
              <Summary ref={summaryRef} fadeOut={showSummary} />
            ) : (
              <Calendar
                ref={calenderRef}
                fadeIn={bookingStep === 'summary'}
                bankHolidays={bankHolidays}
              />
            )}
          </ModalWrapper>
          <Box sx={{ margin: '1em', alignSelf: 'end' }}>
            <MuiButton
              variant={isBtnActive ? 'contained' : 'disabled'}
              onClick={handleStep}
              type={bookingStep === 'summary' ? 'submit' : null}
              form={bookingStep === 'summary' ? 'booking-form' : null}
              sx={{ marginLeft: 'auto' }}
            >
              {bookingStep !== 'initial' ? 'Confirm Booking' : 'Continue'}
            </MuiButton>
          </Box>
        </Dialog>
      )}
    </BookingContext.Provider>
  );
}
