import { Box, styled } from '@mui/material';
import { FormControl } from '@mui/material';

const Header = styled((props) => (
  <Box
    {...props}
    sx={{ marginBottom: '0.5em', padding: { xs: '1em', xl: '1em' } }}
  />
))(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const Wrapper = styled((props) => <Box {...props} />)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    width: '50%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '60%',
  },
}));

const FlexContainer = styled((props) => (
  <Box
    {...props}
    component="div"
    sx={{
      width: ['85vw', '80vw', '80vw', '65vw'],
      margin: '0 auto',
      gap: [0, 0, '2em', '2em'],
    }}
  />
))(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Form = styled((props) => (
  <FormControl
    {...props}
    component="form"
    autoComplete="off"
    noValidate
    sx={{ padding: { xs: '2em', xl: '2.5em' }, mb: { xs: '6em', md: 0 } }}
  />
))(({ theme }) => ({
  backgroundColor: '#FFFBF5',
  borderRadius: '15px',
  boxShadow: '0px 45px 84px -40px rgba(0,0,0,0.3)',
  '&.MuiTextField-root': {
    backgroundColor: '#eee',
    width: '100%',
    textArea: {
      fontSize: '16px',
    },
    label: {
      color: '#999',
      fontSize: '12px',
      fontWeight: 700,
    },
  },
}));

export { Header, Wrapper, FlexContainer, Form };
