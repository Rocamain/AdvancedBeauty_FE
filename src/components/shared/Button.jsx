import { Button as MuiButton, styled, Box } from '@mui/material';
import { ArrowRight } from '@mui/icons-material/';
import { useNavigate } from 'react-router-dom';

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
    fontWeight: 600,
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
  buttonText,
  page,
  sectionTitle,
  width,
  disabled,
  type,
}) {
  const navigate = useNavigate();

  const url = sectionTitle ? `/${page}/#${sectionTitle}` : `/${page}`;

  const handleClick = (event) => {
    event.preventDefault();

    navigate(url);
  };

  return (
    <Box sx={{ width: width && width, margin: '1em auto', overflow: 'hidden' }}>
      <MyButton
        color="primary"
        disabled={disabled}
        disableFocusRipple
        disableRipple
        type={type}
        onClick={handleClick}
        variant="contained"
        sx={{ width: 'inherit' }}
        endIcon={<ArrowRight />}
      >
        {buttonText}
      </MyButton>
    </Box>
  );
}
