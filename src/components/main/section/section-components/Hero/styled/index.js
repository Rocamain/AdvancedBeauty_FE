import { Box, styled } from '@mui/material';
import curves from 'assets/curves.svg';
import coffee from 'assets/coffee.png';

const HeroContainer = styled(Box)(({ theme, cover, content }) => {
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
      paddingTop: content ? '4em' : '12em',
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
const HeroHeaderWrapper = styled(Box)(({ theme, content }) => {
  return {
    position: 'relative',
    zIndex: 140,
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    margin: '0 auto',
    paddingTop: content ? '0' : '5em',

    [theme.breakpoints.up('sm')]: {
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '65%',
    },
  };
});

const HeroContentWrapper = styled(Box)(({ theme }) => {
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
const WavesBackground = styled(Box)(({ theme }) => {
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
  <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
    <CoffeeImg />
  </Box>
))(({ theme }) => {
  return {
    display: 'none !important',
    img: {
      display: 'none !important',
    },
    [theme.breakpoints.up('lg')]: {
      width: '25%',
      display: 'flex',
      alignSelf: 'end',
      position: 'relative',
      top: '4em',
      maxWidth: '150px',
      paddingBottom: '1.5em',
    },
  };
});

const CoffeeImg = styled((props) => (
  <Box
    onLoad={() => true}
    component="img"
    src={coffee}
    title="shop"
    alt="shop"
    srcSet={`${coffee} 1200w, ${coffee} 980w, ${coffee} 900w`}
    sizes="(min-width: 900px) and (max-width: 1200px) 95vw, (min-width: 1700px) 90vw, 100vw"
    sx={{
      display: { xs: 'none', md: 'block' },
      maxWidth: { md: '150px', lg: '290px', xl: '321px' },
      width: '100%',
      height: 'auto',
    }}
  />
))(({ theme }) => {
  return {};
});

export {
  HeroContainer,
  WavesBackground,
  HeroHeader,
  HeroHeaderWrapper,
  HeroContentWrapper,
  CoffeeMug,
};
