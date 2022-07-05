import { Button as MuiButton, styled } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material/';
import { useNavigate } from 'react-router-dom';

const MyButton = styled((props) => <MuiButton component="a" {...props} />)(
  ({ theme }) => ({
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
    },
    ':hover': {
      backgroundColor: 'orange',
      transform: 'translate(0)',
      transition: 'all 0.4s',
    },
  })
);

export default function Button({ buttonText, page, sectionTitle }) {
  let navigate = useNavigate();

  const path = sectionTitle ? page + '/' + sectionTitle : page;
  const handleClick = () => {
    navigate(`/${path}`, { replace: true });
  };

  return (
    <MyButton
      color="primary"
      disableFocusRipple
      disableRipple
      onClick={handleClick}
      variant="contained"
      endIcon={<KeyboardArrowRight />}
    >
      {buttonText}
    </MyButton>
  );
}
