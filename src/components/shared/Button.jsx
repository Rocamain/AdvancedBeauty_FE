import { Button as MuiButton, styled, Box } from '@mui/material';
import { ArrowRight } from '@mui/icons-material/';
import { useNavigate, useLocation } from 'react-router-dom';

const MyButton = styled(({ type, onClick, ...props }) => {
  return (
    <MuiButton
      variant="contained"
      color="primary"
      endIcon={<ArrowRight />}
      component="a"
      disableFocusRipple
      disableRipple
      type={type}
      onClick={type === 'submit' ? null : onClick}
      {...props}
    />
  );
})(({ theme }) => ({
  fontWeight: 600,
  zIndex: 100,
  fontSize: '1rem',
  borderLeft: '15px solid transparent',
  borderRight: '0.5em solid transparent',
  padding: '0.5em 0.5em 0.5em 0',
  textAlign: 'center',
  transition: 'background-color 0.65s !important',
  ':hover': {
    borderRight: 0,
    paddingRight: '1.5em',
    backgroundColor: 'rgba(0, 0, 0, 0.14)',
    color: 'orange',
    '.MuiButton-endIcon': {
      opacity: 1,
      transform: 'translate(-14px)',
      width: '6px',
    },
  },

  '.MuiButton-endIcon': {
    transform: 'translate(-30px)',
    width: 0,
    opacity: 0,
    transition: 'transform 0.6s, width 0.3s, opacity 0.2s ease',
    '>:nth-of-type(1)': {
      fontSize: '2.5rem',
      fontWeight: 800,
    },
  },
}));

export default function Button({
  linkTo,
  linkText,
  width,
  disabled,
  type,
  value,
}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isExternalLink = linkTo.type === 'external';

  const handleClick = (to) => {
    console.log(to === '/contact');
    if (to === '/contact' && pathname === '/services_and_fares/promotions/') {
      console.log('YAHH');
      const contactMessage = value;

      const message = `Dear AB team,\n\nI am interested to claim one or more of the ${contactMessage}, please contact me as soon as possible.\n\nKind regards,`;
      navigate(to, {
        state: { contactMessage: message },
      });
    } else {
      navigate(to);
    }
  };

  return isExternalLink ? (
    <Box
      sx={{
        width: width && width,
      }}
    >
      <MyButton
        disabled={disabled}
        type={type}
        title={value}
        id={value}
        href={linkTo.URL}
      >
        {linkText}
      </MyButton>
    </Box>
  ) : (
    <Box
      sx={{
        width: width && width,
      }}
    >
      <MyButton
        disabled={disabled}
        type={type}
        title={value}
        id={value}
        onClick={() => handleClick(linkTo.URL)}
      >
        {linkText}
      </MyButton>
    </Box>
  );
}
