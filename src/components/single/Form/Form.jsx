import { useState, useMemo, useEffect } from 'react';
import { Box, Grid, Typography, Checkbox, Button } from '@mui/material';
import IconButton from 'components/single/Form/IconButton.jsx';
import { Divider } from 'components/shared/styled';
import {
  Header,
  Wrapper,
  FlexContainer,
  Form,
} from 'components/single/Form/styled/index.js';
import Input from 'components/single/Form/Input.jsx';
import { inputs } from 'components/single/Form/utils/index.js';
import shop from 'assets/shop.jpg';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom';
const initialValue = {
  name: '',
  shop: '',
  email: '',
  phone: '',
  message: '',
};

export default function ContactForm() {
  const [value, setValue] = useState(initialValue);
  const [checked, setChecked] = useState(false);
  const [result, setResult] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [mailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();
  const numbers = useMemo(() => {
    const first = Math.floor(Math.random() * 21);
    const second = Math.floor(Math.random() * 21);
    return { first, second };
  }, []);

  useEffect(() => {
    if (checked) {
      const parsedResult = Number(result);
      const isResultCorrect = parsedResult === numbers.first + numbers.second;

      setDisabled(!isResultCorrect);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked, result]);

  const handleChange = (event) => {
    const key = event.target.id ? event.target.id : 'shop';
    setValue({ ...value, [key]: event.target.value });
  };

  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  const handleResult = (event) => {
    setResult(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(value),
    };
    fetch('http://localhost:9000/contact', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if ((data.msg = 'Email sent')) {
          setEmailSent(true);
          setChecked(false);
          setDisabled(true);
          setResult('');
          setValue(initialValue);
        }
      })
      .catch((err) => navigate('/error'))
      .finally(() => setValue(initialValue));
  };

  return (
    <FlexContainer>
      <Wrapper>
        <Header>
          <Box sx={{ marginBottom: '1em' }}>
            <Typography variant="title" component="h4">
              Contact us
            </Typography>
            <Divider />
            <Typography variant="p" component="p">
              This website is build with React and Strapi, if you want to change
              the content, fill up this form or contact me by email, If you can
              to have more details about the technologies used in this project
              go to the Change Me section.
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '0.2em',
              position: 'relative',
              left: '-10px',
            }}
          >
            <IconButton
              href="https://www.linkedin.com/in/francisco-javier-roca-vazquez/"
              target="_blank"
              children={<LinkedInIcon />}
            />
            <IconButton
              href="mailto:fjrocavazquez@gmail.com?subject=Mail from 2U website"
              children={<EmailIcon />}
            />
          </Box>
        </Header>
        <Form id="contact-form" onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            {inputs.map(({ id, ...rest }, index) => (
              <Input
                key={index}
                id={id.toLowerCase()}
                label={id}
                {...rest}
                value={value[id.toLowerCase()]}
                onChange={handleChange}
              />
            ))}
          </Grid>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '0.9rem',
              margin: '1em auto',
            }}
          >
            <Checkbox
              disableRipple
              onChange={handleCheck}
              inputProps={{ 'aria-label': 'checkbox send approval' }}
              type="checkbox"
              checked={checked}
              sx={{ padding: 0 }}
            />
            By clicking you will allow us to send you and email
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5em',
              justifyContent: 'flex-end',
            }}
          >
            {mailSent ? (
              <h1>Your query is been sent, you will received an email soon </h1>
            ) : (
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '2em',
                  }}
                >
                  <Typography>
                    {numbers.first} + {numbers.second} ={' '}
                  </Typography>
                  <Input id="result" value={result} onChange={handleResult} />
                </Box>

                <Box sx={{ position: 'relative' }}>
                  <Button
                    disabled={disabled}
                    type="submit"
                    value="submit"
                    variant="contained"
                    size="large"
                  >
                    SUBMIT
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </Form>
      </Wrapper>
      <Box
        sx={{
          width: ['100%', '100%', '40%'],
          display: 'inline-block',
          height: '80%',
        }}
      >
        <Box
          component="img"
          src={shop}
          sx={{
            maxWidth: '100%',
            height: 'auto',
            objectFit: 'contain',
            boxShadow: '0px 45px 84px -40px rgba(0,0,0,0.3)',
          }}
        />
      </Box>
    </FlexContainer>
  );
}
