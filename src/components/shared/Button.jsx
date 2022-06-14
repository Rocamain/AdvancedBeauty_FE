import { Button as MuiButton, styled } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material/';
import { Link as LinkRouter } from 'react-router-dom';
import { orange } from '@mui/material/colors';

const MyButton = styled((props) => <MuiButton {...props} />)(({ theme }) => ({
  wordBreak: 'break-word',
  wordWrap: 'break-word',
  padding: '1em',
  fontSize: '1rem',

  '.MuiSvgIcon-root': {
    transform: 'translate(-20px)',
    width: 0,
    display: 'inline-block',
    opacity: 0,
    transition: 'all 0.5s',
  },
  ':hover  .MuiSvgIcon-root': {
    width: '20px',
    opacity: 1,
    transform: 'translate(0)',
    transition: 'all 0.5s',
  },
  ':hover': {
    backgroundColor: 'orange',
    transform: 'translate(0)',
    transition: 'all 1s',
  },
}));

export default function Button({ buttonText, buttonTo }) {
  return (
    <MyButton
      color="primary"
      disableFocusRipple
      disableRipple
      variant="contained"
      component={LinkRouter}
      to={{ buttonTo }}
      endIcon={<KeyboardArrowRight />}
    >
      {buttonText}
    </MyButton>
  );
}
