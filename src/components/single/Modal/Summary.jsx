import { useState } from 'react';

import { FadeOut } from 'components/single/Modal/styled';

import {
  Box,
  Typography,
  Checkbox,
  TextField,
  Paper,
  Divider,
} from '@mui/material/';
import InputAdornment from '@mui/material/InputAdornment';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';

export default function Summary({
  show,
  date,
  time,
  serviceName,
  serviceType,
}) {
  const [formData, setFormData] = useState({ email: null, name: null });

  const day = date?.getDate();
  const month = date?.getMonth();
  const year = date?.getFullYear();

  const handleChange = (e) => {
    e.preventDefault();

    console.log(e.target.value);
  };

  return (
    <>
      <FadeOut
        show={show}
        sx={({ palette }) => {
          return {
            position: 'relative',
            top: 0,
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundImage: palette.background.primary,
            padding: '1em 1.5em',
            display: 'flex',
            gap: '1em',
          };
        }}
      >
        <Box display="flex">
          <Typography variant="h4" sx={{ margin: '8px', width: '25ch' }}>
            Date:
            <span style={{ marginLeft: '0.5em' }}>
              {day}/{month}/{year}
            </span>
          </Typography>
          <Typography variant="h4">
            Time: <span style={{ marginLeft: '0.5em' }}> {time} </span>
          </Typography>
        </Box>
        <Divider />
        <Box
          display="flex"
          sx={{ flex: 1, gap: '1em', padding: '1 0em' }}
          noValidate
          component="form"
        >
          <Box display="flex" sx={{ gap: '1em', flexDirection: 'column' }}>
            <TextField
              // label="With normal TextField"
              id="name"
              sx={{ m: 1, width: '25ch' }}
              placeholder="name"
              color="primary"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineRoundedIcon color="secondary" />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
            <TextField
              // label="Error"
              id="email"
              required
              sx={{ m: 1, width: '25ch' }}
              placeholder="email"
              // error={true}
              maxRows={2}
              multiline
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailRoundedIcon color="secondary" />
                  </InputAdornment>
                ),
              }}
              variant="standard"
            />
          </Box>
          <Divider
            orientation="vertical"
            // variant="inset"
            sx={{ backgroundColor: 'orange' }}
            flexItem
          />
          <Box>
            <Typography
              component="p"
              sx={{ fontSize: '0.6rem', verticalAlign: 'bottom' }}
            >
              <Checkbox
                // disabled
                color="secondary"
                id="checkbox authorization"
                required
                disableRipple
                sx={{
                  display: 'inline-block',
                  borderRadius: '5px',
                  lineHeight: '0',
                  verticalAlign: 'inherit',
                  padding: '0',
                  color: 'orange',
                }}
                // onChange
              />
              By clicking the box will authorized us to use and store the email
              solely for learning purposes. Also will allow us to send you a the
              confirmation once the booking is done.
            </Typography>
          </Box>
        </Box>
      </FadeOut>
    </>
  );
}
