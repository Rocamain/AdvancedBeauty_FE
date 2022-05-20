import { Button as MuiButton, styled } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material/';
import { Link as LinkRouter } from 'react-router-dom';

const MyButton = styled((props) => <MuiButton {...props} />)(({ theme }) => ({
  // alignItems: 'base-line',
  '.MuiSvgIcon-root': {
    transform: 'translate(-20px)',
    width: 0,
    display: 'inline-block',
    opacity: 0,
    transition: 'all 1s',
  },
  // '.MuiSvgIcon-root': { height: '20px' },
  ':hover  .MuiSvgIcon-root': {
    // padding: '0',
    width: '20px',
    opacity: 1,
    transform: 'translate(0)',
    transition: 'all 1s',
  },
}));

export default function Button({ text, buttonTo }) {
  return (
    <MyButton
      color="primary"
      disableFocusRipple
      disableRipple
      variant="contained"
      component={LinkRouter}
      to={{}}
      endIcon={<KeyboardArrowRight />}
    >
      {text}
    </MyButton>
  );
}