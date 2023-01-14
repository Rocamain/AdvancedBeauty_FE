import { Box, styled, Typography } from '@mui/material';

const Container = styled((props) => <Box component="div" {...props} />)(
  ({ theme, size }) => {
    return {
      width: size === 'Big' ? '80%' : '70%',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '3rem',
      [theme.breakpoints.up('md')]: {
        width: size === 'Big' ? '70%' : '60%',
      },
    };
  }
);
const Card = styled((props) => <Box {...props} />)(({ theme, size }) => {
  return {
    flex: 1,
    minWidth: size === 'Big' ? '280px' : '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      maxWidth: size === 'Big' ? '350px' : '280px',
    },
    a: {
      textDecoration: 'none',
    },
  };
});

const Title = styled((props) => (
  <Typography
    component="h5"
    variant="h5"
    {...props}
    sx={{ fontsize: '1.5rem' }}
  />
))(({ theme, color }) => {
  const COLORS = { blue: '#0693e3', orange: '#8f5f25' };
  return {
    marginBottom: '0.7em',
    textAlign: 'center',
    fontWeight: 700,
    color: COLORS[color],
  };
});

const SubTitle = styled((props) => (
  <Typography
    component="h6"
    variant="h6"
    {...props}
    sx={{ fontsize: '1.1rem', color: 'text.main' }}
  />
))(({ theme, color }) => {
  return {
    marginBottom: '0.5em',
    textAlign: 'center',
    fontWeight: 600,
  };
});

export { Container, Card, Title, SubTitle };
