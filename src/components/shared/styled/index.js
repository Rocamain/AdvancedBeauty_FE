import { Box, Paper, Grid as MuiGrid, styled } from '@mui/material';

const Container = styled((props) => <Box component="div" {...props} />)(
  ({ theme }) => ({
    width: '100%',
    backgroundImage: 'linear-gradient(90deg,#75c9cc 0%,#00bccc 100%)!important',
    display: 'inline-block',
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {},
    [theme.breakpoints.up('lg')]: {},
  })
);
const Wrapper = styled((props) => <Box component="div" {...props} />)(
  ({ theme }) => ({
    width: '80%',
    margin: theme.spacing(-7, 'auto'),
    [theme.breakpoints.up('md')]: {},
    [theme.breakpoints.up('lg')]: {
      width: '65%',
    },
  })
);

const Card = styled((props) => <Box component="" {...props} />)(
  ({ theme, isFirstCard }) => ({
    borderRadius: '5px',
    alignItems: 'flex-start',
    padding: theme.spacing(3, 3),

    textAlign: 'center',
    background: isFirstCard
      ? 'linear-gradient(160deg,#75c9cc 0%,#00bccc 100%)'
      : 'white',
    boxShadow: isFirstCard
      ? 'rgb(117, 201, 204) 0px 50px 80px 0px'
      : '0px 50px 80px 0px rgba(12,2,2,0.1)',
  })
);
const ImageContainer = styled((props) => (
  <Box component="div" {...props}>
    <Image {...props} />
  </Box>
))(({ theme }) => ({
  maxWidth: '7em',
  margin: '0 auto',
  marginBottom: '1em',
}));
const Image = styled((props) => <Box component="img" {...props} />)(
  ({ theme }) => {
    return {
      objectFit: 'cover',
      width: '100%',
      height: 'auto',
    };
  }
);
const Grid = styled((props) => (
  <MuiGrid container direction={'row'} component="div" {...props} />
))(({ theme }) => ({
  height: '100%',
  backgroundColor: '#edf4f8',
  margin: '0 auto',
  padding: '2em',
  boxShadow: 'rgba(56, 21, 11, 0.09) 0px 50px 80px 0px',
}));

export { Container, Wrapper, Card, ImageContainer, Grid };
