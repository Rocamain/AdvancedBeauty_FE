import { useState, useMemo, useEffect } from 'react';
import { useNavigate, useLocation, useLoaderData } from 'react-router-dom';
import { Box, Grid, Typography, Checkbox, Button } from '@mui/material';
import SectionTitle from 'components/shared/SectionTitle.jsx';
import {
  Header,
  Wrapper,
  FlexContainer,
  Form,
} from 'components/main/section/section-components/Form/styled/index.jsx';
import IconButton from 'components/main/section/section-components/Form/IconButton.jsx';
import Input from 'components/main/section/section-components/Form/Input.jsx';
import { INPUTS } from 'constants/index.js';
import {
  initialErrors,
  initialValues,
  validation,
} from 'components/main/section/section-components/Form/utils/index.js';
import shop from 'assets/shop.jpg';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const { VITE_APP_BOOKING } = import.meta.env;

export default function ContactForm() {
  const { shops } = useLoaderData();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(true);
  const [mailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const numbers = useMemo(() => {
    const first = Math.floor(Math.random() * 21);
    const second = Math.floor(Math.random() * 21);
    return { first, second };
  }, []);

  const isError = Object.values(errors).every((error) => error === false);
  const isResultCorrect =
    Number(values.result) === numbers.first + numbers.second;

  //  If if passed a message through a navigation state, it will display the message
  //  in the message box

  useEffect(() => {
    if (location.state?.contactMessage) {
      setValues(({ message, ...prevState }) => ({
        ...prevState,
        message: location.state.contactMessage,
      }));
    }
  }, [location]);

  // Once all requirements have been meet activate the submit button

  useEffect(() => {
    const passRequirements = values.checked && isResultCorrect && isError;
    setDisabled(true);
    if (passRequirements) {
      setDisabled(false);
    }
  }, [values.checked, isError, isResultCorrect]);

  const handleChange = (event) => {
    const { value, id } = event.target;
    const idKey = !id ? 'shop' : id;

    if (idKey === 'result' || idKey === 'shop') {
      setValues({ ...values, [idKey]: event.target.value });
    } else {
      const error = validation[idKey](value);
      setValues({ ...values, [idKey]: event.target.value });
      setErrors({ ...errors, [idKey]: error });
    }
    setEmailSent(false);
  };
  const handleCheck = (e) => {
    setValues({ ...values, checked: true });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    };
    fetch(`${VITE_APP_BOOKING}/api/contact`, requestOptions)
      .then((response) => {
        if (response.status !== 200) {
          navigate('/error');
        }
        setEmailSent(true);
      })
      .catch((err) => {
        if (err) {
          navigate('/error');
        }
      })
      .finally(() => {
        setValues(initialValues);
        setDisabled(true);
        setErrors(initialErrors);
      });
  };

  return (
    shops && (
      <FlexContainer>
        <Wrapper>
          <Header>
            <SectionTitle title='Contact us' grid />
            <Typography
              variant='form'
              component='p'
              sx={{ marginBottom: '1em' }}
            >
              This website is build with React , Strapi and back end server as a
              booking system, if you want to change the content, fill up this
              form or contact me by email and I will send send you and
              invitation to your email. Also you can send me an email or
              contacting me by linkedIn below
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: '0.2em',
                position: 'relative',
              }}
            >
              <IconButton
                href='https://www.linkedin.com/in/francisco-javier-roca-vazquez/'
                target='_blank'
                rel='noopener'
                children={<LinkedInIcon />}
              />
              <IconButton
                href='mailto:fjrocavazquez@gmail.com?subject=Mail from Advance beauty website'
                children={<EmailIcon />}
              />
            </Box>
          </Header>
          <Form id='contact-form' onSubmit={handleSubmit}>
            <Grid container spacing={3} sx={{ marginBottom: '1.5em' }}>
              {INPUTS.map(({ id, ...rest }, index) => {
                return (
                  <Input
                    key={index}
                    id={id.toLowerCase()}
                    label={id}
                    shops={id === 'Subject' ? shops : null}
                    error={Boolean(errors[id.toLowerCase()])}
                    {...rest}
                    value={values[id.toLowerCase()]}
                    onChange={handleChange}
                  />
                );
              })}
            </Grid>
            <Box
              sx={{
                display: { sm: 'flex', md: 'block', xl: 'flex' },
                fontSize: '0.9rem',
                justifyContent: { sm: 'space-between', xl: 'space-between' },
                gap: { xl: '1em' },
                marginBottom: '2em',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5em',
                  mb: { xs: '1em', sm: 0, md: '1em', xl: 0 },
                }}
              >
                {mailSent ? (
                  <Typography sx={{ color: 'red' }}>
                    Your query is been sent, you will received an email soon.
                  </Typography>
                ) : (
                  <>
                    <Checkbox
                      disableRipple
                      onChange={handleCheck}
                      inputProps={{ 'aria-label': 'checkbox send approval' }}
                      type='checkbox'
                      checked={values.checked}
                      sx={{ padding: 0, backgroundColor: '#eee' }}
                    />
                    <Typography>
                      Click to allow us to send you an email
                    </Typography>
                  </>
                )}
              </Box>
              {!mailSent && (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    alignSelf: { xl: 'right' },
                    justifyContent: 'right',
                    gap: '0.3em',
                  }}
                >
                  <Typography>
                    {numbers.first} + {numbers.second} =
                  </Typography>
                  <Input
                    id='result'
                    value={values.result}
                    size='small'
                    onChange={handleChange}
                  />
                </Box>
              )}
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5em',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                disabled={disabled}
                type='submit'
                value='submit'
                variant='contained'
                size='large'
              >
                SUBMIT
              </Button>
            </Box>
          </Form>
        </Wrapper>
        <Box
          sx={{
            width: ['100%', '100%', '50%', '40%'],
            height: '80%',
          }}
        >
          <Box
            component='img'
            src={shop}
            sx={{
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'cover',
              boxShadow: '0px 45px 84px -40px rgba(0,0,0,0.3)',
            }}
          />
        </Box>
      </FlexContainer>
    )
  );
}
