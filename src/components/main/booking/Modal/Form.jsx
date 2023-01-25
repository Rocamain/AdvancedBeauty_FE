import { useState, useEffect, useContext } from 'react';
import { BookingContext } from 'context/BookingContext';
import { useNavigate } from 'react-router-dom';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import {
  Input,
  Form as MuiForm,
  Checkbox,
} from 'components/main/booking/Modal/styled';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { Box, Typography, Divider } from '@mui/material/';
import { isOk, hasNoError } from 'components/main/booking/Modal/utils';

const PATH = process.env.REACT_APP_BOOKING;

export default function Form({ mobile }) {
  const { booking, setBooking } = useContext(BookingContext);
  const { serviceName, shopName } = booking;

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    authorized: false,
  });
  const navigate = useNavigate();

  const [error, setError] = useState({ emailError: null, nameError: null });
  const { emailError, nameError } = error;
  const { email, name, authorized } = formData;

  useEffect(() => {
    setBooking({ ...booking, bookingStep: 2 });
    if (authorized && hasNoError(emailError) && hasNoError(nameError)) {
      setBooking({ ...booking, bookingStep: 3, ...formData });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorized, emailError, nameError]);

  const handleChange = ({ target }) => {
    const { id, value } = target;
    const idError = `${id}Error`;

    // id is email or name
    if (!isOk(id, value)) {
      setError({ ...error, [idError]: true });
    } else {
      setError({ ...error, [idError]: false });
    }
    setFormData({ ...formData, [id]: value });
  };

  const handleChangeCheckBox = ({ target }) => {
    setFormData(({ authorized }) => ({
      ...formData,
      authorized: !authorized,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify({
        customerName: name,
        email,
        serviceName,
        shopName,
        appointment: booking.appointment,
      }),
    };

    fetch(`${PATH}/api/bookings`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.booking) {
          setBooking((booking) => ({
            bookingConfirmed: true,
            ...booking,
          }));

          navigate('/confirmation', { state: booking });
        } else {
          const err = new Error();
          err.msg = data.msg;
          throw err;
        }
      })
      .catch((err) => {
        navigate('/error');
      });
  };

  return (
    <MuiForm
      id="booking-form"
      onSubmit={handleSubmit}
      smallphone={mobile ? 'true' : null}
    >
      <Box display="flex" sx={{ gap: '1em', flexDirection: 'column' }}>
        <Input
          id="name"
          placeholder="name"
          smallphone={mobile ? 'true' : null}
          value={name}
          error={nameError}
          onChange={handleChange}
          icon={<PersonOutlineRoundedIcon />}
        />
        <Input
          id="email"
          smallphone={mobile ? 'true' : null}
          placeholder="email"
          value={email}
          error={emailError}
          onChange={handleChange}
          icon={<EmailRoundedIcon />}
        />
      </Box>

      {!mobile && (
        <Divider
          orientation="vertical"
          variant="middle"
          sx={{ backgroundColor: 'orange' }}
          flexItem
        />
      )}

      <Box>
        <Typography
          component="p"
          variant="conditions"
          sx={{ paddingLeft: mobile && '1em' }}
        >
          <Checkbox
            id="checkbox authorization"
            onChange={handleChangeCheckBox}
            sx={{ marginLeft: '-4px' }}
          />
          <Typography variant="span" sx={{ fontWeight: 900 }}>
            {` By clicking the box will authorized us to use and store the email
          solely for learning purposes. Also will allow us to send you a the
          confirmation once the booking is done.`}
          </Typography>
        </Typography>
      </Box>
    </MuiForm>
  );
}
