import { Box, styled } from '@mui/material';

const CarouselContainer = styled((props) => <Box {...props} />)(
  ({ theme }) => ({
    paddingBottom: theme.spacing(9),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // ,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    [theme.breakpoints.up('md')]: {},
    [theme.breakpoints.up('lg')]: {
      paddingBottom: theme.spacing(9),
    },
  })
);
const CarouselHero = styled((props) => <Box {...props} />)(({ theme }) => ({
  marginLeft: 'auto',
  position: 'relative',
  zIndex: 100,
  marginTop: '1em',
  top: 0,
  [theme.breakpoints.between('md', 'lg')]: {
    width: '55.4%',
    top: '3em',
  },
  [theme.breakpoints.between('lg', 'xl')]: {
    width: '53%',
    top: '3.3em',
  },
  [theme.breakpoints.up('xl')]: {
    width: '53%',
    top: '4em',
  },
}));

const SlideContainer = styled((props) => <Box {...props} />)(({ theme }) => ({
  width: '100%',
  height: '140px',
  margin: '0 auto',
  backgroundImage: theme.palette.background.primary,
}));

export { CarouselContainer, CarouselHero, SlideContainer };
