import { styled } from '@mui/material';
import { Box, IconButton, Typography } from '@mui/material/';
import NorthWestSharpIcon from '@mui/icons-material/NorthWestSharp';
import circles from 'assets/circles.jpg';

const Header = styled(({ title }) => {
  return (
    <Box>
      <Typography
        component="h2"
        sx={{
          textAlign: 'center',
          color: '#75C9CC',
          fontSize: '1.45rem',
          fontWeight: 700,
        }}
      >
        Service:
      </Typography>
      <Typography
        component="h2"
        sx={{
          fontSize: '1.3rem',
          textAlign: 'center',
          color: '#444444',
          fontWeight: 500,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
})(({ theme, props }) => {
  return {
    marginBottom: '1.5em',
  };
});

const ModalWrapper = styled((props) => {
  return <Box {...props} />;
})(({ theme, props }) => {
  return {
    display: 'inline-table',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    height: '70vh',
    backgroundImage: `url(${circles})`,
    backgroundSize: 'contain',
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    paddingTop: 3,
    paddingBottom: 3,
  };
});

const ExitIconBtn = styled((props) => {
  return <IconButton children={<NorthWestSharpIcon />} {...props} />;
})(({ theme, props }) => {
  return {
    position: 'absolute',
    left: '0.2em',
    top: '0.2em',
    color: 'info',
    ':hover': {
      color: 'primary.main',
    },
  };
});
export { ModalWrapper, ExitIconBtn, Header };
