import { styled } from '@mui/material';
import {
  Box,
  Paper,
  IconButton,
  TextField,
  InputAdornment,
  Checkbox as MuiCheckbox,
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
    width: '80vw',
    minHeight: '70vh',
    backgroundImage: `url(${circles})`,
    backgroundSize: 'contain',
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    paddingTop: 3,
    paddingBottom: 3,
  };
});

const ModalWrapper = styled(({ children, ...props }) => {
  return <Box {...props} children={children} />;
})(({ theme, showSummary, fadeIn }) => {
  const fadeOutAnimation = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
  // background-color: ${theme.palette.primary.main};
  // color ${theme.palette.text.primary} !important;
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
    gap: showSummary && '2.5em',

    '&  .summary': {
      visibility: showSummary ? `visible` : 'hidden',
      opacity: 0,
      animation: showSummary && animation,
    },
    '&  .header': {
      animation: animation,
      opacity: showSummary && 0,
    },
  };
});

const SummaryContainer = styled(({ show, ...props }) => {
  return <Paper {...props} />;
})(({ theme }) => {
  return {
    maxWidth: 500,

    justifyContent: 'center',
    flexDirection: 'column',
    margin: '0  1em',
    padding: '1em 1.5em',
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

const Input = styled(({ icon, ...props }) => {
  return (
    <TextField
      autoComplete="off"
      variant="standard"
      color="primary"
      multiline
      maxRows={2}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
      {...props}
    />
  );
})(({ theme, props }) => {
  return { margin: '1em', width: '200px' };
});

const Form = styled(({ ...props }) => {
  return <Box noValidate component="form" {...props} />;
})(({ theme, props }) => {
  return { gap: '1em', padding: '1 0em', display: 'flex' };
});

const Checkbox = styled(({ ...props }) => {
  console.log(props);
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
  DialogContainer,
  ModalWrapper,
  ExitBtn,
  SummaryContainer,
  Input,
  Form,
  Checkbox,
};
