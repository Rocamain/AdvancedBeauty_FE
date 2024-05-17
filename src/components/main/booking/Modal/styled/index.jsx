import { styled } from '@mui/material';
import {
  Box,
  Paper,
  IconButton,
  TextField,
  InputAdornment,
  Checkbox as MuiCheckbox,
  Dialog as MuiDialog,
} from '@mui/material/';

import NorthWestSharpIcon from '@mui/icons-material/NorthWestSharp';
import circles from 'assets/circles.jpg';

const Dialog = styled((props) => {
  return <MuiDialog {...props} />;
})(({ theme }) => {
  return {
    '.MuiDialog-paper': {
      width: '100vw',
      backgroundImage: `url(${circles})`,
      backgroundSize: 'cover',
      height: '100%',
      top: 0,
      minWidth: 'none',
      maxHeight: 'none',
      marginInline: 0,

      [theme.breakpoints.between('xs', '280')]: {
        height: '900px',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        maxWidth: 600,
        maxHeight: 750,
      },
      [theme.breakpoints.up('md')]: {
        maxHeight: 640,
        maxWidth: 800,
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: 1000,
      },
    },
  };
});

const ModalWrapper = styled(({ children, ...props }) => {
  return <Box {...props} children={children} />;
})(({ theme, animate }) => {
  return {
    flex: 1,
    opacity: 0,
    animation: animate ? `in 0.7s linear forwards 0.7s` : undefined,
    margin: '0 auto',
    width: '90%',
    '@keyframes in': {
      '0%': {
        opacity: 0,
      },

      '100%': {
        opacity: 1,
      },
    },
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
      autoComplete='off'
      variant='standard'
      color='primary'
      multiline
      maxRows={2}
      InputProps={{
        startAdornment: (
          <InputAdornment
            position='start'
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
  return <Box noValidate component='form' {...props} />;
})(({ theme, smallphone }) => {
  return {
    gap: '1em',
    padding: '1 0em',
    display: 'flex',
    flexDirection: smallphone ? 'column' : 'row',
  };
});

const Checkbox = styled(({ ...props }) => {
  return <MuiCheckbox disableRipple color='secondary' {...props} />;
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

const StepTwo = styled(({ nextStep, ...props }) => <Box {...props} />)(
  ({ theme, props }) => {
    return {
      backgroundColor: '#D3D3D3',
      width: '4em',
      height: '10px',
      borderRadius: '5px',
    };
  }
);
const Gap = styled((props) => {
  return <Box {...props} />;
})(({ theme, props }) => ({
  zIndex: 200,
  border: 'none',
  backgroundColor: 'white',
  width: '2em',
  height: '10px',
}));

const StepOne = styled((props) => {
  return <Box {...props} />;
})(({ theme }) => {
  return {
    backgroundColor: '#BCF0F0',
    width: '4em',
    height: '10px',
    borderRadius: '5px',
  };
});

const Slider = styled(({ ...props }) => {
  return <Box {...props} />;
})(({ theme, step }) => {
  const isActive = step > 1;
  return {
    position: 'relative',
    backgroundColor: theme.palette.primary.main,
    width: '4em',
    height: '10px',
    borderRadius: '5px',
    transition: isActive && 'transform 1s',
    transform: isActive ? 'translateX(6em)' : 'translateX(0)',
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
  StepTwo,
  StepOne,
  Slider,
  Gap,
};
