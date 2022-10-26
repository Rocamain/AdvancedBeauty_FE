import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NavButton({
  buttonText,
  linkTo,

  ...props
}) {
  const navigate = useNavigate();

  const handleClick = (e, { path, title }) => {
    const section = title && title.replaceAll(' ', '-');
    const URLPath = path.replaceAll(' ', '-');
    const url = Boolean(title) ? `/${URLPath}/#${section}` : `/${URLPath}`;

    navigate(url);
  };

  return (
    <Button
      color="primary"
      disableFocusRipple
      disableRipple
      onClick={(e) => handleClick(linkTo)}
      variant="contained"
      {...props}
      sx={{
        width: { xs: '200px', sm: '150px', xl: '170px' },
        height: { xs: '60px', sm: '100px', xl: '90px' },
        fontWeight: 600,
      }}
    >
      {buttonText}
    </Button>
  );
}
