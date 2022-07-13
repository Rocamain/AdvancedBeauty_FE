import { Button as MuiButton, styled, Box } from '@mui/material';
import { ArrowRight } from '@mui/icons-material/';
import { useNavigate, useLocation } from 'react-router-dom';

const MyButton = styled((props) => <MuiButton component="a" {...props} />)(
  ({ theme }) => ({
    // wordBreak: 'break-word',
    // wordWrap: 'break-word',
    // display: 'inline',
    fontWeight: '600',
    zIndex: 100,
    minWidth: '0',
    maxWidth: '80%',
    fontSize: '0.9rem',
    padding: '1em 2.3em',
    margin: '0 auto',
    transition: 'background-color 0.65s !important',
    ':hover': {
      backgroundColor: 'orange',
      '.MuiButton-endIcon': {
        opacity: 1,
        transform: 'translate(-5px)',
        width: '6px',
        '&>:nth-of-type(1)': {
          fontSize: '2.3rem',
        },
      },
    },

    '& .MuiButton-endIcon': {
      transform: 'translate(-20px)',

      width: 0,
      opacity: 0,
      transition: 'transform 0.6s, width 0.3s, opacity 0.5s ease',
      span: {
        fontWeight: 900,
      },
    },
  })
);

export default function Button({ buttonText, page, sectionTitle, width }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const url = sectionTitle ? `/${page}/#${sectionTitle}` : `/${page}`;

  const handleClick = (event) => {
    event.preventDefault();
    if (!sectionTitle) {
      window.scrollTo(0, 0);
    }

    navigate(url, { replace: true });
  };

  return (
    <Box sx={{ width: width, margin: '0 auto' }}>
      <MyButton
        color="primary"
        disableFocusRipple
        disableRipple
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
