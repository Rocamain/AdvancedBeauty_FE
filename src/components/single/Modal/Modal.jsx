import { useState } from 'react';
import { BookingContext } from 'context/BookingContext';
import useShowSummary from 'hooks/useShowSummary';
import { Modal as MuiModal, Button, DialogContent } from '@mui/material/';
import Stepper from 'components/single/Modal/Stepper';
import Summary from 'components/single/Modal/Summary';
import Calendar from 'components/single/Calendar/Calendar.jsx';
import Header from 'components/single/Modal/Header.jsx';
import {
  DialogContainer,
  ModalWrapper,
  ExitBtn,
} from 'components/single/Modal/styled';

export default function Modal({ open, handleClose, serviceName, serviceType }) {
  const [booking, setBooking] = useState({
    serviceName,
    date: new Date(),
    time: null,
    bookingStep: 0,
  });
  const { bookingStep, time, date } = booking;
  const { fromRef, showSummary } = useShowSummary(bookingStep);

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
      <MuiModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus={true}
      >
        <DialogContent>
          <DialogContainer>
            <ModalWrapper fadeIn={bookingStep > 1} showSummary={showSummary}>
              <Stepper bookingStep={bookingStep} />
              <ExitBtn onClick={handleExitBtn} />
              <Header
                className="header"
                title={serviceType}
                subtitle={serviceName}
              />
              <Calendar ref={fromRef} fadeIn={bookingStep > 1} />
              {showSummary && (
                <Summary
                  className="summary"
                  date={date}
                  time={time}
                  serviceName={serviceName}
                  serviceType={serviceType}
                />
              )}
              <Button
                variant={isBtnActive ? 'contained' : 'disabled'}
                onClick={handleStep}
                type={bookingStep > 2 ? 'submit' : null}
                form={bookingStep > 2 ? 'a-form' : null}
                sx={{ position: 'absolute', right: '0.7em', bottom: '0.7em' }}
              >
                {bookingStep > 1 ? 'Confirm Booking' : 'Continue'}
              </Button>
            </ModalWrapper>
          </DialogContainer>
        </DialogContent>
      </MuiModal>
    </BookingContext.Provider>
  );
}
