import { styled, Box, Typography } from '@mui/material';

export default function BookingHeader({ title, subtitle, className }) {
  return (
    <Container className={className}>
      <Typography
        component='h2'
        variant='h2'
        sx={{
          textAlign: 'center',
          color: 'primary.main',
          marginBottom: '0.35em',
          fontWeight: 700,
        }}
      >
        {title}
      </Typography>
      <Typography
        component='h3'
        variant='h5'
        sx={{
          textAlign: 'center',
          color: '#666666',
          fontWeight: 600,
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
    marginBottom: '1em',
    [theme.breakpoints.up('md')]: {
      marginBottom: '2.5em',
    },
  };
});
