import { Box, styled } from '@mui/material';
import curves from 'assets/curves.svg';
import coffee from 'assets/coffee.png';

const HeroContainer = styled(Box)(({ theme, cover, biggerBackground }) => {
  return {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    height: biggerBackground ? '70vh' : '40vh',
    paddingTop: '4em',
    backgroundImage: `linear-gradient(1deg,#ffffff 11%,rgba(255,255,255,0) 68%),url(${cover.url})!important`,
    backgroundSize: 'cover, cover',
    backgroundColor: '#FFFFFF',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',

    [theme.breakpoints.down('sm')]: {
      height: biggerBackground ? '70vh' : '25vh',
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
      paddingTop: '0',
    },
  };
});

const HeroHeader = styled(Box)(({ theme }) => {
  return {
    [theme.breakpoints.up('md')]: {
      width: '65%',
    },
  };
});
const HeroHeaderWrapper = styled(Box)(({ theme, biggerBackground }) => {
  return {
    position: 'relative',
    zIndex: 140,
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    margin: '0 auto',
    paddingTop: biggerBackground ? '0' : '5em',

    [theme.breakpoints.up('sm')]: {
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
      width: '70%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '50%',
    },
  };
});

const HeroContentWrapper = styled(Box)(({ theme, cover }) => {
  return {
    position: 'relative',
    zIndex: 140,
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5em',
    width: '90%',
    margin: '0 auto',

    [theme.breakpoints.up('sm')]: {
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    [theme.breakpoints.up('lg')]: {
      width: '70%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '50%',
    },
    [theme.breakpoints.up('xxl')]: {
      width: '40%',
    },
  };
});
const WavesBackground = styled(Box)(({ theme, biggerBackground }) => {
  return {
    position: 'absolute',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundImage: `url(${curves})`,
    backgroundRepeatY: 'no-repeat',
    backgroundSize: '100% 500px',
    height: biggerBackground ? '60%' : '90%',
    transform: 'scale(1,1)',
  };
});

const CoffeeMug = styled((props) => (
  <Box
    sx={{
      width: ['100%', '100%', '25%'],
      alignSelf: 'end',
      display: 'flex',
      position: 'relative',
      top: '4em',
    }}
  >
    <Box
      component="img"
      src={coffee}
      title="shop"
      alt="shop"
      srcSet={`${coffee} 1200w, ${coffee} 980w, ${coffee} 480w`}
      sizes="(min-width: 0px) and (max-width: 480px) 85vw, (min-width: 481px) and (max-width: 980px) 95vw, (min-width: 981px) 90vw, 100vw"
      sx={{
        maxWidth: '250px',
        width: ['60%', '60%', '100%'],
        height: 'auto',
      }}
    />
  </Box>
))(({ theme }) => ({}));

export {
  HeroContainer,
  WavesBackground,
  HeroHeader,
  HeroHeaderWrapper,
  HeroContentWrapper,
  CoffeeMug,
};
