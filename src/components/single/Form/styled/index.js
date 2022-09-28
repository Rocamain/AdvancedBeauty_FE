import { Box, styled } from '@mui/material';
import shop from 'assets/shop.jpg';

const Header = styled((props) => <Box {...props} />)(({ theme }) => ({
  width: '100%',
  maxWidth: '450px',
  marginBottom: theme.spacing(10),

  '&.MuiTypography-root': {
    marginBottom: theme.spacing(1),
  },
}));

const Wrapper = styled((props) => <Box {...props} />)(({ theme }) => ({
  width: '100%',
  maxWidth: '450px',

  [theme.breakpoints.up('md')]: {
    width: '50%',
  },
}));

const FlexContainer = styled(
  (props) => (
    <Box
      {...props}
      component="div"
      sx={{
        mx: ['10vw', '5vh', '10vh', '20vh', '35vh'],
      }}
    />
  ),
  { label: 'flex' }
)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '2em',
}));

const Form = styled(
  (props) => (
    <Box
      {...props}
      component="form"
      autoComplete="off"
      sx={{ padding: ['2em', '2em', '2em', '3em'] }}
    />
  ),
  { label: 'form' }
)(({ theme }) => ({
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
      fontSize: '14px',
      fontWeight: 700,
    },
  },
}));

export { Header, Wrapper, FlexContainer, Form };
