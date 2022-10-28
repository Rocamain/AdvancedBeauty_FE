import { Button as MuiButton, styled, Box } from '@mui/material';
import { ArrowRight } from '@mui/icons-material/';
import { useNavigate, useLocation } from 'react-router-dom';

const MyButton = styled(({ type, onClick, ...props }) => (
  <MuiButton
    component="a"
    type={type}
    onClick={type === 'submit' ? null : onClick}
    {...props}
  />
))(({ theme }) => ({
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

  '& .MuiButton-endIcon': {
    transform: 'translate(-30px)',
    width: 0,
    opacity: 0,
    transition: 'transform 0.6s, width 0.3s, opacity 0.2s ease',
    '& >:nth-of-type(1)': {
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

  const handleClick = (e, { path, title }) => {
    const section = title && title.replaceAll(' ', '-');
    const URLPath = path.replaceAll(' ', '-');
    const url = Boolean(title) ? `/${URLPath}/#${section}` : `/${URLPath}`;

    if (path === 'Contact' && pathname === '/Services-and-Fares/Promotions') {
      const contactMessage = e.target.title;
      const message = `Dear 2U team,\n\nI am interested to claim one or more of the ${contactMessage}, please contact me as soon as possible.\n\nKind regards,`;
      navigate(url, {
        state: { contactMessage: message },
      });
    } else {
      navigate(url);
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
        color="primary"
        disabled={disabled}
        disableFocusRipple
        disableRipple
        type={type}
        title={value}
        id={value}
        onClick={(e) => handleClick(e, linkTo)}
        variant="contained"
        sx={{ width: 'inherit' }}
        endIcon={<ArrowRight />}
      >
        {linkText}
      </MyButton>
    </Box>
  );
}
