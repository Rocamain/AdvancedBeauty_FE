import { styled } from '@mui/material';
import { Box, Typography } from '@mui/material/';

export default function Header({ title, subtitle }) {
  return (
    <Container>
      <Typography
        component="h2"
        sx={{
          textAlign: 'center',
          color: '#75C9CC',
          fontSize: '1.45rem',
          fontWeight: 700,
          backgroundColor: 'transparent ! important',
        }}
      >
        {title}
      </Typography>
      <Typography
        component="h2"
        sx={{
          fontSize: '1.3rem',
          textAlign: 'center',
          color: '#444444',
          fontWeight: 500,
          backgroundColor: 'transparent ! important',
        }}
      >
        {subtitle}
      </Typography>
    </Container>
  );
}

const Container = styled((props) => {
  return <Box {...props} />;
})(({ theme, props }) => {
  return {
    backgroundColor: 'transparent ! important',
    marginBottom: '1.5em',
  };
});
