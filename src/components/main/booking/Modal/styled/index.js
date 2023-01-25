import { forwardRef } from 'react';
import { styled } from '@mui/material';
import {
  Box,
  Paper,
  IconButton,
  TextField,
  InputAdornment,
  Checkbox as MuiCheckbox,
  DialogContent,
} from '@mui/material/';

import NorthWestSharpIcon from '@mui/icons-material/NorthWestSharp';
import circles from 'assets/circles.jpg';
import { keyframes } from '@emotion/react';

const DialogContainer = styled((props) => {
  return <Box {...props} />;
})(({ theme, small_height }) => {
  return {
    position: 'absolute',
    top: small_height ? 0 : '50%',
    left: 0,
    transform: !small_height && 'translate(0,-50%)',
    width: '100vw',
    backgroundImage: `url(${circles})`,
    backgroundSize: 'contain',
    backgroundColor: 'white',
    boxShadow: 24,
    paddingTop: 3,
    paddingBottom: 3,
    minHeight: 'calc(100%)',
    [theme.breakpoints.between('xs', '280')]: {
      minHeight: 'calc(100% + 4em)',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      top: '50%',
      left: '50%',
      maxWidth: 600,
      minHeight: 720,
      transform: 'translate(-50%,-50%)',
    },
    [theme.breakpoints.up('md')]: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      maxWidth: 800,
      minHeight: 650,
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: 1000,
    },
  };
});

const Dialog = forwardRef((props, ref) => {
  return (
    <DialogContent tabIndex={-1} ref={ref} sx={{ height: 'inherit' }}>
      <DialogContainer {...props} />
    </DialogContent>
  );
});

const ModalWrapper = styled(({ children, ...props }) => {
  return <Box {...props} children={children} />;
})(({ theme, fade_out }) => {
  const fadeInAnimation = keyframes`
0% {
   opacity: 0;
}
100% {
  opacity: 1;
  
}`;

  let animation = `${fadeInAnimation} 0.7s linear forwards 0.7s`;

  return {
    animation: fade_out && animation,
    margin: '0 auto',
    width: '90%',
    [theme.breakpoints.up('sm')]: {
      maxWidth: 600,
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: 660,
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: 730,
    },
  };
});

const SummaryContainer = styled(({ show, ...props }) => {
  return <Paper {...props} />;
})(({ theme }) => {
  return {
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '2em 1.5em',
    display: 'flex',
    margin: '0 auto 2em auto',
    backgroundImage: theme.palette.background.primary,
  };
});

const ExitBtn = styled((props) => {
  return <IconButton children={<NorthWestSharpIcon />} {...props}></IconButton>;
})(({ theme, props }) => {
  return {
    position: 'absolute',
    left: '0.2em',
    top: '0.2em',
    fontWeight: 900,
    color: theme.palette.primary.main,
    svg: {
      fontSize: '2.3rem',
    },
  };
});

const Input = styled(({ icon, error, ...props }) => {
  return (
    <TextField
      autoComplete="off"
      variant="standard"
      color="primary"
      multiline
      maxRows={2}
      InputProps={{
        startAdornment: (
          <InputAdornment
            position="start"
            sx={{ color: error ? '#ef5350' : 'orange' }}
          >
            {icon}
          </InputAdornment>
        ),
      }}
      {...props}
      error={error}
    />
  );
})(({ theme, smallphone }) => {
  return {
    margin: '1em',
    [theme.breakpoints.up('xs')]: {
      width: !smallphone ? 200 : '65vw',
    },
    [theme.breakpoints.up('sm')]: {
      width: 260,
    },
    [theme.breakpoints.up('md')]: {
      width: 300,
    },
    textarea: {
      color: 'white',
      fontWeight: 700,
      letterSpacing: '0.05em',
      '::placeholder': {
        fontWeight: 700,
        opacity: 0.5,
        color: '#333333',
      },
    },

    '&.MuiInput-underline': {
      color: 'rgba(0, 0, 0, 0.12)',
      borderBottom: `2px solid`,
      '::before': {
        color: 'rgba(0, 0, 0, 0.12)',
        borderBottom: `1px solid`,
      },
      ':hover': {
        '::before': {
          borderBottom: `2px solid ${theme.palette.secondary.main}`,
        },
      },
    },
  };
});

const Form = styled(({ ...props }) => {
  return <Box noValidate component="form" {...props} />;
})(({ theme, smallphone }) => {
  return {
    gap: '1em',
    padding: '1 0em',
    display: 'flex',
    flexDirection: smallphone ? 'column' : 'row',
  };
});

const Checkbox = styled(({ ...props }) => {
  return <MuiCheckbox disableRipple color="secondary" {...props} />;
})(({ theme, props }) => {
  return {
    display: 'inline-block',
    borderRadius: '5px',
    lineHeight: '0',
    verticalAlign: 'inherit',
    padding: '0',
    color: 'orange',
  };
});
export {
  Dialog,
  ModalWrapper,
  ExitBtn,
  SummaryContainer,
  Input,
  Form,
  Checkbox,
};
