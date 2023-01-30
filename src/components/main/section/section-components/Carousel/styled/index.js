import { Box, Paper, IconButton, styled } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material/';

const CarouselContainer = styled((props) => <Paper {...props} />)(
  ({ theme, url: { url, formats } }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: `url(${formats.large.url})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${url})`,
      display: 'block',
    },
  })
);
const CarouselHero = styled((props) => <Box {...props} />)(({ theme }) => {
  return {
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      position: 'relative',
      zIndex: 800,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
      maxWidth: 700,
      marginRight: '10vw',
    },
    [theme.breakpoints.up('lg')]: {
      width: '75%',
      marginRight: '20vw',
      maxWidth: '800px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '75%',
      marginRight: '30vw',
      maxWidth: '1200px',
    },
  };
});

const SlideContainer = styled((props) => <Box {...props} />)(
  ({ theme, height }) => ({
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
    alignItems: 'stretch',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      '.chevronIcon-left': {
        transform: 'translateX(-20vw)',
        transition: 'transform 1s',
      },
      ':hover .chevronIcon-left': {
        transform: 'translateX(0)',
        transition: 'transform 1s',
      },
      '.chevronIcon-right': {
        transform: 'translateX(20vw)',
        transition: 'transform 1s',
      },
      ':hover .chevronIcon-right': {
        transform: 'translateX(0)',
        transition: 'transform 1s',
      },
    },
    '@media (hover: none) and (pointer: coarse)': {
      '.chevronIcon-right': {
        transform: 'translateX(0)',
      },
      '.chevronIcon-left': {
        transform: 'translateX(0)',
      },
    },
  })
);

const ChevronButton = styled((props) => {
  const { value } = props;
  const right = value === 'right';
  const ChevronIcon = right ? KeyboardArrowRight : KeyboardArrowLeft;

  return (
    <IconButton
      children={
        <ChevronIcon className={`chevronIcon-${value}`} fontSize={'large'} />
      }
      aria-label={`carousel ${value} button`}
      {...props}
    />
  );
})(({ theme, value }) => ({
  color: theme.palette.primary.contrastText,
  // backgroundColor: 'transparent',
  borderRadius: 0,
  padding: 0,
  flex: 1,
  minWidth: '13vw',
  [theme.breakpoints.up('md')]: {
    minWidth: '10vw',
    flex: value === 'right' ? 1 : 2,
  },
}));

const CardWrapper = styled((props) => <Box elevation={24} {...props} />)(
  ({ theme }) => ({
    boxSizing: 'border-box',
    width: '100%',
    padding: theme.spacing(5, 3),
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.contrastText,
    [theme.breakpoints.up('md')]: {
      display: 'block',
      width: 500,
      padding: theme.spacing(5, 4, 5, 4),
    },
    [theme.breakpoints.up('lg')]: {
      width: 800,
      paddingLeft: theme.spacing(10),
    },
    [theme.breakpoints.up('xll')]: {
      width: 1200,
      paddingLeft: theme.spacing(10),
    },
  })
);

const CardPhotoContainer = styled((props) => {
  return <Box elevation={24} {...props} />;
})(({ theme }) => ({
  width: '50%',
  maxWidth: 300,
}));

const Photo = styled(({ src, ...props }) => {
  const { small, medium } = src.formats;

  return (
    <Box
      width="600"
      height="300"
      component="img"
      {...props}
      sx={{
        content: {
          md: `url(${small.url})`,
          lg: `url(${small.url})`,
          xl: `url(${medium.url})`,
        },
      }}
    />
  );
})(({ theme }) => ({
  position: 'relative',
  zIndex: 200,
  height: 'auto',
  margin: '0 auto',
  borderRadius: 5,
  maxWidth: 'calc(100% + 10px)',
  objectFit: 'contain',
  [theme.breakpoints.up('lg')]: {
    maxWidth: 'calc(100% + 40px)',
  },
}));

export {
  CarouselContainer,
  CarouselHero,
  SlideContainer,
  ChevronButton,
  CardWrapper,
  CardPhotoContainer,
  Photo,
};
