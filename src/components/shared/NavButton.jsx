import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NavButton({ buttonText, linkTo }) {
  const isExternal = linkTo.type === 'external';

  return (
    <Button
      component={Link}
      color="primary"
      disableFocusRipple
      disableRipple
      variant="contained"
      size="large"
      to={linkTo?.URL}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'no-opener' : undefined}
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
