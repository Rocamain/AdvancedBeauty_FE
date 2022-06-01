import { Box, styled, Typography } from '@mui/material';

const Container = styled((props) => <Box component="div" {...props} />)(
  ({ theme, size }) => {
    return {
      width: size === 'Big' ? '80%' : '70%',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '2em',
      [theme.breakpoints.up('md')]: {
        width: size === 'Big' ? '70%' : '60%',
      },
    };
  }
);
const Card = styled((props) => <Box component="div" {...props} />)(
  ({ theme, size }) => {
    return {
      flex: 1,
      maxWidth: 'calc(50% - (2em))',
      minWidth: size === 'Big' ? '200px' : '150px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      [theme.breakpoints.up('md')]: {
        maxWidth: size === 'Big' ? '350px' : '280px',
      },
    };
  }
);

const Title = styled((props) => (
  <Typography component="h5" variant="h5" {...props} />
))(({ theme, color }) => {
  const palette = {
    orange: '#ffd4a3',
  };

  return {
    marginBottom: '0.6em',
    textAlign: 'center',
    color: palette[color],
  };
});

export { Container, Card, Title };
