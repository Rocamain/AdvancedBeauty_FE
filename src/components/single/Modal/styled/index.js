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
})(({ theme, props }) => {
  return {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    backgroundImage: `url(${circles})`,
    backgroundSize: 'contain',
    backgroundColor: 'white',
    boxShadow: 24,
    paddingTop: 3,
    paddingBottom: 3,
    [theme.breakpoints.up('sm')]: {
      width: '100vw',
      maxWidth: '650px',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: 800,
    },
    [theme.breakpoints.up('lg')]: {
      height: '65vh',
      maxHeight: 650,
      maxWidth: 1000,
    },
    [theme.breakpoints.up('xl')]: {
      height: '65vh',
      maxHeight: 700,
      maxWidth: 1000,
    },
  };
});

const Dialog = forwardRef((props, ref) => {
  return (
    <DialogContent tabIndex={-1} ref={ref}>
      <DialogContainer {...props} />
    </DialogContent>
  );
});

const ModalWrapper = styled(({ children, ...props }) => {
  return <Box {...props} children={children} />;
})(({ theme, showSummary, fadeIn, smallPhone }) => {
  const fadeOutAnimation = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}`;

  const fadeInAnimation = keyframes`
0% {
   opacity: 1;
}
100% {
  opacity: 0;
  visibility: hidden;
}`;

  let animation;

  if (fadeIn) {
    animation = `${fadeInAnimation} 0.7s linear forwards 0.2s`;
  }

  if (showSummary) {
    animation = `${fadeOutAnimation} 0.7s linear forwards 0.2s`;
  }

  return {
    display: showSummary && 'flex',
    flexDirection: showSummary && 'column',
    padding: '0 1em 0 1em',
    margin: '0 auto',
    width: '90%',
    maxWidth: '400px',
    '&.summary': {
      visibility: showSummary ? `visible` : 'hidden',
      opacity: 0,
      animation: showSummary && animation,
    },
    '&.header': {
      animation: animation,
      opacity: showSummary && 0,
    },
    [theme.breakpoints.up('sm')]: {
      width: '80%',
      maxWidth: '600px',
      margin: '0 auto',
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '750px',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '950px',
    },
  };
});

const SummaryContainer = styled(({ show, ...props }) => {
  return <Paper {...props} />;
})(({ theme }) => {
  return {
    maxWidth: 600,
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '2em 1.5em',
    display: 'flex',
    gap: '1em',
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
      width: !smallphone ? '200px' : '65vw',
    },
    [theme.breakpoints.up('sm')]: {
      width: '260px',
    },
    [theme.breakpoints.up('md')]: {},
    [theme.breakpoints.up('lg')]: {},
    textarea: {
      color: 'white',
      letterSpacing: '0.05em',
      '::placeholder': {
        fontWeight: '700',
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
