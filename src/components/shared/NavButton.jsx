import { Button, Typography } from '@mui/material';

export default function NavButton({
  buttonText,
  linkTo,

  ...props
}) {
  const { title, path } = linkTo;
  const section = title && title.replaceAll(' ', '-');
  const URLPath = path.replaceAll(' ', '-');
  const url = Boolean(title) ? `/${URLPath}/#${section}` : `/${URLPath}`;

  return (
    <Button
      color="primary"
      disableFocusRipple
      disableRipple
      variant="contained"
      size="large"
      href={url}
      {...props}
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
