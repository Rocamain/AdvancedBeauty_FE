import { Box, styled } from '@mui/material';
import curves from 'assets/curves.svg';
import coffee from 'assets/coffee.png';

const HeroContainer = styled(Box)(({ theme, cover, isWithContent }) => {
  return {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingTop: '2em',
    backgroundImage: `linear-gradient(1deg,#ffffff 11%,rgba(255,255,255,0) 68%),url(${cover.url})!important`,
    backgroundSize: 'cover, cover',
    backgroundColor: '#FFFFFF',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: '3em',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: isWithContent ? '4em' : '12em',
      justifyContent: 'flex-end',
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
const HeroHeaderWrapper = styled(Box)(({ theme, isWithContent }) => {
  return {
    position: 'relative',
    zIndex: 140,
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    margin: '0 auto',
    paddingTop: isWithContent ? '0' : '5em',

    [theme.breakpoints.up('sm')]: {
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
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
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'row',
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
const WavesBackground = styled(Box)(({ theme, isWithContent }) => {
  return {
    position: 'absolute',
    bottom: '0',
    backgroundImage: `url(${curves})`,
    backgroundRepeatY: 'no-repeat',
    backgroundSize: '100% 100%',
    width: '100vw',
    height: '70%',
  };
});

const CoffeeMug = styled((props) => (
  <Box
    sx={{
      width: ['100%', '100%', '25%'],
      alignSelf: 'end',
      display: 'flex',
      position: 'relative',
      top: ['4em'],
      paddingBottom: '1.5em',
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
        maxWidth: '150px',
        width: ['40%', '50%', '100%'],
        height: 'auto',
      }}
    />
  </Box>
))();

export {
  HeroContainer,
  WavesBackground,
  HeroHeader,
  HeroHeaderWrapper,
  HeroContentWrapper,
  CoffeeMug,
};
