import { useState, useEffect, useRef } from 'react';
import { BookingContext } from 'context/BookingContext';
import { Modal as MuiModal, Button } from '@mui/material/';
import { DialogContent } from '@mui/material';
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
  const [showSummary, setShowSummary] = useState(false);

  const { bookingStep, time, date } = booking;
  const ref = useRef();

  useEffect(() => {
    let handleAnimationEnd;
    let elementGrid = ref?.current;

    if (elementGrid && bookingStep > 1) {
      handleAnimationEnd = () => {
        ref.current.style.display = 'none';
        setShowSummary(true);
      };
      ref.current.addEventListener('animationend', handleAnimationEnd);
      if (bookingStep > 1) {
      }
    }
    return () =>
      elementGrid?.removeEventListener('animationstart', handleAnimationEnd);
  }, [ref, bookingStep]);

  const isBtnActive = Boolean(bookingStep % 2);

  const handleExitBtn = () => {
    handleClose();
  };

  const handleStep = () => {
    setBooking(({ bookingStep, ...rest }) => ({
      bookingStep: 2,
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
            <Stepper bookingStep={bookingStep} />

            <ModalWrapper>
              <ExitBtn onClick={handleExitBtn} />

              <Header title={serviceType} subtitle={serviceName} />

              <Calendar ref={ref} fadeIn={bookingStep > 1} />
              {showSummary && (
                <Summary
                  show={showSummary}
                  date={date}
                  time={time}
                  serviceName={serviceName}
                  serviceType={serviceType}
                />
              )}
              <Button
                variant={isBtnActive ? 'contained' : 'disabled'}
                onClick={handleStep}
                sx={{ position: 'absolute', right: '0.2em', bottom: '0.2em' }}
              >
                {bookingStep > 2 ? 'confirm' : 'continue'}
              </Button>
            </ModalWrapper>
          </DialogContainer>
        </DialogContent>
      </MuiModal>
    </BookingContext.Provider>
  );
}
