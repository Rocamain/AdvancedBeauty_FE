import { Button as MuiButton, styled, Box } from '@mui/material';
import { ArrowRight } from '@mui/icons-material/';
import { useNavigate, useLocation } from 'react-router-dom';

const MyButton = styled(({ type, onClick, href, children, ...props }) => {
  const isExternalLink = Boolean(href);

  if (isExternalLink) {
    return (
      <MuiButton
        variant="contained"
        color="primary"
        endIcon={<ArrowRight />}
        component="a"
        disableFocusRipple
        disableRipple
        href={href}
        target="_blank"
        rel="noopener"
        children={children}
        {...props}
      />
    );
  }

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
      children={children}
      {...props}
    />
  );
})(({ theme }) => ({
  fontWeight: 600,
  zIndex: 100,
  minWidth: '0',
  maxWidth: '80%',
  fontSize: '0.9rem',
  borderLeft: '15px solid transparent',
  borderRight: '15px solid transparent',
  margin: '0 auto',
  textAlign: 'center',
  transition: 'background-color 0.65s !important',
  ':hover': {
    backgroundColor: 'orange',
    color: 'white',
    '.MuiButton-endIcon': {
      opacity: 1,
      transform: 'translate(-10px)',
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
  linkText,
  linkTo,
  width,
  disabled,
  type,
  value,
}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isExternalLink = linkTo.type === 'external';

  const handleClick = (URL) => {
    const path = URL.split('#')[0];

    if (path === '/Contact' && pathname === '/Services-and-Fares/Promotions') {
      const contactMessage = value;
      const message = `Dear 2U team,\n\nI am interested to claim one or more of the ${contactMessage}, please contact me as soon as possible.\n\nKind regards,`;
      navigate(URL, {
        state: { contactMessage: message },
      });
    } else {
      navigate(URL);
    }
  };

  return (
    <Box
      sx={{
        width: width && width,
        overflow: 'hidden',
      }}
    >
      <MyButton
        disabled={disabled}
        type={type}
        title={value}
        id={value}
        onClick={() => handleClick(linkTo.URL)}
        href={isExternalLink && linkTo.URL}
      >
        {linkText}
      </MyButton>
    </Box>
  );
}
