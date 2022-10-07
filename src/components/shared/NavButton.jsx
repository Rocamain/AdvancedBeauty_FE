import { Button } from '@mui/material';

import { useNavigate, useLocation } from 'react-router-dom';

export default function NavButton({ buttonText, section, path, ...props }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const url = Boolean(section) ? `/${path}/#${section}` : `/${path}`;

  const handleClick = (event) => {
    event.preventDefault();
    if (pathname !== `/${path}`) {
      window.scrollTo(0, 0);
    }

    navigate(url, { replace: true });
  };

  return (
    <Button
      color="primary"
      disableFocusRipple
      disableRipple
      onClick={handleClick}
      variant="contained"
      {...props}
    >
      {buttonText}
    </Button>
  );
}
