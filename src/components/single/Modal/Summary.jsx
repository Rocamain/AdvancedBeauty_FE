import { useState, useEffect, useContext } from 'react';
import { BookingContext } from 'context/BookingContext';
import {
  SummaryContainer,
  Input,
  Form,
  Checkbox,
} from 'components/single/Modal/styled';
import { Box, Typography, Divider } from '@mui/material/';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { isOk, hasNoError } from 'components/single/Modal/utils/';

export default function Summary({ date, time, className }) {
  const { booking, setBooking } = useContext(BookingContext);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    authorized: false,
  });
  const [error, setError] = useState({ emailError: null, nameError: null });
  const { emailError, nameError } = error;
  const { email, name, authorized } = formData;
  const day = date?.getDate();
  const month = date?.getMonth();
  const year = date?.getFullYear();

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
    // linked submit button in Modal
    e.preventDefault();
  };

  return (
    <SummaryContainer className={className}>
      <Box display="flex" sx={{ gap: 4 }}>
        <Typography variant="h4" sx={{ margin: '8px', width: '220px' }}>
          Date:
          <span
            children={`${day} / ${month} / ${year}`}
            style={{ marginLeft: '0.5em' }}
          />
        </Typography>
        <Typography variant="h4" sx={{ margin: '8px', width: '200px' }}>
          Time:
          <span children={time} style={{ marginLeft: '0.5em' }} />
        </Typography>
      </Box>
      <Divider />
      <Form id="a-form" onSubmit={handleSubmit}>
        <Box display="flex" sx={{ gap: '1em', flexDirection: 'column' }}>
          <Input
            id="name"
            placeholder="name"
            value={name}
            error={nameError}
            onChange={handleChange}
            icon={<PersonOutlineRoundedIcon color="secondary" />}
          />
          <Input
            id="email"
            placeholder="email"
            value={email}
            error={emailError}
            onChange={handleChange}
            icon={<EmailRoundedIcon color="secondary" />}
          />
        </Box>
        <Divider
          orientation="vertical"
          sx={{ backgroundColor: 'orange' }}
          flexItem
        />
        <Box>
          <Typography component="p" variant="conditions">
            <Checkbox
              id="checkbox authorization"
              onChange={handleChangeCheckBox}
            />
            By clicking the box will authorized us to use and store the email
            solely for learning purposes. Also will allow us to send you a the
            confirmation once the booking is done.
          </Typography>
        </Box>
      </Form>
    </SummaryContainer>
  );
}
