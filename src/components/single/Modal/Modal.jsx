import { useState } from 'react';
import useFetchBankHolidays from 'hooks/useFetchBankHolidays';
import { BookingContext } from 'context/BookingContext';
import useMediaQuery from '@mui/material/useMediaQuery';
import useShowSummary from 'hooks/useShowSummary';
import { Modal as MuiModal, Button as MuiButton } from '@mui/material/';
import Stepper from 'components/single/Modal/Stepper';
import Summary from 'components/single/Modal/Summary';
import Calendar from 'components/single/Calendar/Calendar.jsx';
import Header from 'components/single/Modal/Header.jsx';
import { Dialog, ModalWrapper, ExitBtn } from 'components/single/Modal/styled';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.tz.setDefault('Europe/Madrid');

const today = dayjs()
  .set('hour', 0)
  .set('minute', 0)
  .set('second', 0)
  .set('millisecond', 0);

const initialBookingState = {
  serviceName: null,
  shopName: null,
  date: today,
  year: dayjs().year(),
  time: null,
  price: null,
  bookingStep: 0,
  emailAuthorization: false,
  bookingConfirmation: false,
};

export default function Modal({
  open,
  handleClose,
  serviceName,
  price,
  serviceType,
  shopName,
}) {
  const smallPhoneHeightScreen = useMediaQuery('(max-height:800px)');
  const [booking, setBooking] = useState({
    ...initialBookingState,
    serviceName,
    shopName,
    price,
  });
  const { bookingStep, year } = booking;
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
    <BookingContext.Provider
      value={{ booking, setBooking }}
      dateLibInstance={dayjs.tz}
    >
      {bankHolidays && (
        <MuiModal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          disableEnforceFocus
          disableAutoFocus
          sx={{
            overflowY: 'auto',
          }}
        >
          <Dialog small_height={smallPhoneHeightScreen ? 'true' : null}>
            <Stepper step={bookingStep} />
            <ExitBtn onClick={handleExitBtn} />
            <ModalWrapper
              fade_out={bookingStep === 0 ? 'true' : null}
              sx={{ opacity: bookingStep === 0 ? 0 : 1 }}
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
              <MuiButton
                variant={isBtnActive ? 'contained' : 'disabled'}
                onClick={handleStep}
                type={bookingStep > 2 ? 'submit' : null}
                form={bookingStep > 2 ? 'booking-form' : null}
                sx={{
                  float: 'right',
                  marginBottom: '1.3em',
                  width: bookingStep > 1 ? '175px' : '100px',
                  alignSelf: 'end',
                }}
              >
                {bookingStep > 1 ? 'Confirm Booking' : 'Continue'}
              </MuiButton>
            </ModalWrapper>
          </Dialog>
        </MuiModal>
      )}
    </BookingContext.Provider>
  );
}
