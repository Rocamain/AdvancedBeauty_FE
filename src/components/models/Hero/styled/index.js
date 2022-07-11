import { Box, styled } from '@mui/material';
import curves from 'assets/curves.svg';
import coffee from 'assets/coffee.png';

const HeroContainer = styled(Box)(({ theme, cover, hasContent }) => {
  console.log(hasContent);

  return {
    backgroundImage: `linear-gradient(1deg,#ffffff 21%,rgba(255,255,255,0) 68%),url(${cover.url})!important`,
    backgroundSize: 'cover, cover',
    backgroundColor: '#FFFFFF',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
    overflow: 'visible',
    position: 'relative',
    top: 0,
    height: hasContent ? '35vh' : '25vh',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    //
    [theme.breakpoints.up('sm')]: {
      height: hasContent ? '50vvh' : '35vh',
      minHeight: hasContent && '',
    },
    [theme.breakpoints.up('md')]: {
      minHeight: hasContent && '50vh',
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: hasContent && '70vh',
    },
    [theme.breakpoints.up('xl')]: {
      minHeight: hasContent && '60vh',
    },
    [theme.breakpoints.up('xxl')]: {
      minHeight: hasContent && '50vh',
    },
  };
});

const HeroHeader = styled(Box)(({ theme }) => {
  return {
    zIndex: 100,
    justifyContent: 'flex-end',
    [theme.breakpoints.up('md')]: {
      width: '65%',
    },
  };
});
const HeroHeaderWrapper = styled(Box)(({ theme, hasContent }) => {
  return {
    width: 'inherit',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: hasContent ? '0' : '5em',

    [theme.breakpoints.up('sm')]: {
      // paddingBottom: hasContent ? '1em' : 0,
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
      width: '70%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '70%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '50%',
    },
  };
});

const HeroContentWrapper = styled(Box)(({ theme, cover }) => {
  return {
    width: '85%',
    margin: '0 auto',
    gap: '1.5em',
    zIndex: 100,
    [theme.breakpoints.up('sm')]: {
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
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
    backgroundImage: `url(${curves})`,
    backgroundRepeatY: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    position: 'absolute',
    zIndex: 1,
    height: 'calc(100% - 230px)',
    [theme.breakpoints.up('xs')]: {
      height: 'calc(100% + 60px)',
    },
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 60px)',
    },
    [theme.breakpoints.up('md')]: {
      height: 'calc(100%  + 10px)',
    },
  };
});
const CoffeeMug = styled((props) => (
  <Box
    sx={{
      width: '20%',
      alignSelf: 'end',
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
        maxWidth: '100%',
        minWidth: '140px',
        height: 'auto',
        marginTop: { md: '3em' },
        display: { xs: 'none', sm: 'block' },
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
