import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NavButton({ buttonText, linkTo }) {
  const navigate = useNavigate();
  const handleCLick = (url) => navigate(url);
  return (
    <Button
      component="a"
      color="primary"
      disableFocusRipple
      disableRipple
      variant="contained"
      size="large"
      onClick={() => handleCLick(linkTo?.URL)}
      sx={{
        width: {
          xs: '200px',
          sm: '150px',
          md: '170px',
          lg: '190px',
          xl: '220px',
        },
        height: { xs: '90px', sm: '100px' },
        fontWeight: 600,
      }}
    >
      <Typography textAlign="center" variant="h6" sx={{ fontWeight: 600 }}>
        {buttonText}
      </Typography>
    </Button>
  );
}
