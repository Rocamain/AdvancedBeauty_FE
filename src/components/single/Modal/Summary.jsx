import { useState, useEffect, useContext } from 'react';
import { BookingContext } from 'context/BookingContext';
import useMediaQuery from '@mui/material/useMediaQuery';
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
import { getYear, getMonth, getDate, getHours, getMinutes } from 'date-fns';

const getFormattedDate = (date) => {
  const year = getYear(date);
  const month = getMonth(date) + 1;
  const day = getDate(date);

  return `${day}/${month}/${year}`;
};

const getFormattedTime = (date) => {
  const hours = getHours(date);
  let minutes = getMinutes(date).toString();

  if (minutes.length === 1) {
    minutes = '0' + minutes;
  }
  return hours + ':' + minutes;
};

export default function Summary({ className }) {
  const { booking, setBooking } = useContext(BookingContext);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    authorized: false,
  });
  const { date, price, serviceName, shopName } = booking;
  const [error, setError] = useState({ emailError: null, nameError: null });
  const { emailError, nameError } = error;
  const { email, name, authorized } = formData;

  const formattedDate = getFormattedDate(date);
  const formattedTime = getFormattedTime(date);

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

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customerName: name,
        email,
        serviceName,
        shopName,
        appointment: date,
      }),
    };
    fetch('http://localhost:9000/bookings', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setBooking((booking) => ({
          confirmedBooking: data.booking,
          ...booking,
        }));
      });
  };

  const matches = useMediaQuery('(min-width:760px)');
  const smallPhone = useMediaQuery('(max-width:460px)');
  return (
    <Box sx={{ margin: matches ? '0 auto' : '1.5em auto' }}>
      <SummaryContainer
        className={className}
        sx={{ gap: !smallPhone && '1em' }}
      >
        <Box display={smallPhone && 'flex'} sx={{ gap: '1em' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
            <Box
              display="flex"
              sx={{
                alignItems: 'center',
                gap: '1em',
              }}
            >
              <Box>
                <Box
                  sx={({ palette }) => ({
                    margin: '0.5em 1em',

                    minWidth: ['200px', '260px', '360px'],
                  })}
                >
                  <Typography component="h4" variant="summaryHeader">
                    Date:
                    <Box
                      component="span"
                      children={formattedDate}
                      style={{
                        marginLeft: '0.5em',
                        color: 'white',
                      }}
                    />
                  </Typography>
                </Box>
                {smallPhone && (
                  <Box
                    sx={({ palette }) => ({
                      margin: '0.5em 1em',
                      minWidth: '200px',
                    })}
                  >
                    <Typography variant="summaryHeader" component="h4">
                      Time:
                      <Box
                        component="span"
                        children={formattedTime}
                        sx={{
                          fontsize: 'inherit',
                          marginLeft: '0.5em',
                          color: 'white',
                        }}
                      />
                    </Typography>
                  </Box>
                )}
              </Box>

              {!smallPhone && (
                <Divider
                  orientation="vertical"
                  variant="middle"
                  sx={{ backgroundColor: 'orange' }}
                  flexItem
                />
              )}
              {!smallPhone && (
                <Box
                  sx={({ palette }) => ({
                    minWidth: ['200px', '200px', '300px'],
                  })}
                >
                  <Typography variant="summaryHeader" component="h4">
                    Time:
                    <Box
                      component="span"
                      children={formattedTime}
                      sx={{
                        fontsize: 'inherit',
                        marginLeft: '0.5em',
                        color: 'white',
                      }}
                    />
                  </Typography>
                </Box>
              )}
            </Box>
            <Divider sx={{ backgroundColor: 'orange' }} />
            <Box>
              <Form
                id="a-form"
                onSubmit={handleSubmit}
                smallphone={smallPhone ? smallPhone : undefined}
              >
                <Box
                  display="flex"
                  sx={{ gap: '1em', flexDirection: 'column' }}
                >
                  <Input
                    id="name"
                    placeholder="name"
                    smallphone={smallPhone ? smallPhone : undefined}
                    value={name}
                    error={nameError}
                    onChange={handleChange}
                    icon={<PersonOutlineRoundedIcon />}
                  />
                  <Input
                    id="email"
                    smallphone={smallPhone ? smallPhone : undefined}
                    placeholder="email"
                    value={email}
                    error={emailError}
                    onChange={handleChange}
                    icon={<EmailRoundedIcon />}
                  />
                </Box>

                {!smallPhone && (
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
                    sx={{ paddingLeft: smallPhone && '1em' }}
                  >
                    <Checkbox
                      id="checkbox authorization"
                      onChange={handleChangeCheckBox}
                    />
                    By clicking the box will authorized us to use and store the
                    email solely for learning purposes. Also will allow us to
                    send you a the confirmation once the booking is done.
                  </Typography>
                </Box>
              </Form>
            </Box>

            <Divider
              orientation="vertical"
              sx={{ backgroundColor: 'orange' }}
              flexItem
            />
          </Box>
          <Divider
            orientation="vertical"
            sx={{ backgroundColor: 'orange' }}
            flexItem
          />
        </Box>
      </SummaryContainer>
      <Box
        display="flex"
        sx={{ justifyContent: 'flex-end', gap: '1em', padding: '2em' }}
      >
        <Typography
          component="h5"
          sx={{ color: '#75C9CC', fontSize: '1.65rem', fontWeight: 700 }}
        >
          Total cost:
        </Typography>
        <Typography
          component="h5"
          sx={{ color: '#c48037', fontSize: '1.55rem', fontWeight: 700 }}
        >
          {' '}
          {price} &#x20AC;
        </Typography>
      </Box>
    </Box>
  );
}
