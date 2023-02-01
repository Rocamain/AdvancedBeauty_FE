import { useState, useRef } from 'react';
import useFetchBankHolidays from 'hooks/useFetchBankHolidays';
import { BookingContext } from 'context/BookingContext';
import useShowSummary from 'hooks/useShowSummary';
import {
  Modal as MuiModal,
  Button as MuiButton,
  useMediaQuery,
} from '@mui/material/';
import Stepper from 'components/main/booking/Modal/Stepper';
import Summary from 'components/main/booking/Modal/Summary';
import Calendar from 'components/main/booking/Calendar/Calendar.jsx';
import Header from 'components/main/booking/Modal/BookingHeader.jsx';
import {
  Dialog,
  ModalWrapper,
  ExitBtn,
} from 'components/main/booking/Modal/styled';
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
  const smallPhoneHeightScreen = useMediaQuery('(max-height:800px)', {
    noSsr: true,
  });

  const [booking, setBooking] = useState({
    ...INITIAL_BOOKING_STATE,
    serviceName,
    shopName,
    bookingAPI,
    price,
    date: dayjs.tz(),
  });
  const fadeOut = useRef(booking.bookingStep === 0);
  const { bookingStep, year } = booking;
  console.log(shopName);
  const bankHolidays = useFetchBankHolidays(year, shopName);

  const { calenderRef, summaryRef, showSummary } = useShowSummary(bookingStep);

  const isBtnActive = Boolean(bookingStep % 2);

  const handleExitBtn = () => {
    handleClose();
  };

  const handleStep = () => {
    setBooking(({ bookingStep, ...rest }) => ({
      bookingStep: bookingStep + 1,
      ...rest,
    }));
  };

  return (
    <BookingContext.Provider value={{ booking, setBooking }}>
      {bankHolidays && (
        <MuiModal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          disableEnforceFocus
          disableAutoFocus
          sx={
            {
              // overflowY: 'auto',
            }
          }
        >
          <Dialog small_height={smallPhoneHeightScreen ? 'true' : null}>
            <Stepper step={bookingStep} />
            <ExitBtn onClick={handleExitBtn} />
            <ModalWrapper
              fade_out={fadeOut ? 'true' : null}
              sx={{ opacity: fadeOut ? 0 : 1 }}
            >
              <Header title={serviceType} subtitle={serviceName} />
              {showSummary ? (
                <Summary ref={summaryRef} fadeOut={showSummary} />
              ) : (
                <Calendar
                  ref={calenderRef}
                  fadeIn={bookingStep > 1}
                  bankHolidays={bankHolidays}
                />
              )}
            </ModalWrapper>
            <MuiButton
              variant={isBtnActive ? 'contained' : 'disabled'}
              onClick={handleStep}
              type={bookingStep > 2 ? 'submit' : null}
              form={bookingStep > 2 ? 'booking-form' : null}
              sx={{
                position: 'absolute',
                bottom: 20,
                right: 20,
                width: bookingStep > 1 ? '175px' : '100px',
              }}
            >
              {bookingStep > 1 ? 'Confirm Booking' : 'Continue'}
            </MuiButton>
          </Dialog>
        </MuiModal>
      )}
    </BookingContext.Provider>
  );
}
