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

  const matches = useMediaQuery('(min-width:760px)');
  const smallPhone = useMediaQuery('(max-width:460px)');
  return (
    <Box sx={{ margin: matches && '0 auto' }}>
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
                      children={`${day}/${month}/${year}`}
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
                      // marginBottom: '0.5em',
                      minWidth: '200px',
                    })}
                  >
                    <Typography variant="summaryHeader" component="h4">
                      Time:
                      <Box
                        component="span"
                        children={time}
                        sx={{
                          fontsize: 'inherit',
                          // margin: '0 1em',
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
                      children={time}
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
              <Form id="a-form" onSubmit={handleSubmit} smallPhone={smallPhone}>
                <Box
                  display="flex"
                  sx={{ gap: '1em', flexDirection: 'column' }}
                >
                  <Input
                    id="name"
                    placeholder="name"
                    smallPhone={smallPhone}
                    value={name}
                    error={nameError}
                    onChange={handleChange}
                    icon={<PersonOutlineRoundedIcon />}
                  />
                  <Input
                    id="email"
                    smallPhone={smallPhone}
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
                    />{' '}
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
      <Box display="flex" sx={{ justifyContent: 'space-between', gap: '1em' }}>
        <Typography variant="h5">Total cost:</Typography>
        <Typography variant="h5"> 40,00 &#163;</Typography>
      </Box>
    </Box>
  );
}
