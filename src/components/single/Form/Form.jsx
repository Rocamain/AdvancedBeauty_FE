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

export default function ContactForm() {
  const [value, setValue] = useState({
    name: '',
    shop: '',
    email: '',
    phone: '',
    message: '',
  });
  const [checked, setChecked] = useState(false);
  const [result, setResult] = useState('');
  const [disabled, setDisabled] = useState(true);

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
  };

  return (
    <FlexContainer>
      <Wrapper>
        <Header>
          <Typography variant="title" component="h4">
            Contact us
          </Typography>
          <Divider />
          <Typography variant="p" component="p">
            This website is build with React and Strapi, if you want to change
            the content, fill up this form or contact me by email, If you can to
            have more details about the technologies used in this project go to
            the Change Me section.
          </Typography>
          <IconButton
            href="https://www.linkedin.com/in/francisco-javier-roca-vazquez/"
            target="black"
            children={<LinkedInIcon />}
          />
          <IconButton
            href="mailto:fjrocavazquez@gmail.com?subject=Mail from 2U website"
            children={<EmailIcon />}
          />
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
              display: 'inline-block',
              verticalAlign: 'middle',
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
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography>{numbers.first}</Typography>
              <Typography> + {numbers.second} = </Typography>
              <Input id="result" value={result} onChange={handleResult} />
            </Box>

            <Box>
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
          sx={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
        />
      </Box>
    </FlexContainer>
  );
}
