import { Box, Paper, IconButton, styled } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material/';

const CarouselContainer = styled((props, ref) => <Paper {...ref} {...props} />)(
  ({ theme, url }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundImage: `url(${url.small.url})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: theme.spacing(16, 0),
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url(${url.large.url})`,
      padding: theme.spacing(0),
      paddingBottom: theme.spacing(24),
    },
  })
);
const CarouselHero = styled((props) => <Box {...props} />)(({ theme }) => {
  return {
    [theme.breakpoints.up('md')]: {
      width: '60%',
      margin: '50px auto 130px auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
    },
  };
});

const SlideContainer = styled((props) => <Box {...props} />)(({ theme }) => ({
  display: 'inline-flex',
  justifyContent: 'center',
  backgroundColor: theme.palette.primary.main,
  height: '225px',
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
}));

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
  backgroundColor: 'transparent',
  borderRadius: 0,
  padding: 0,
  flex: 1,
  [theme.breakpoints.up('md')]: {
    flex: value === 'right' ? 1 : 2,
  },
}));

const CardWrapper = styled((props) => <Box elevation={24} {...props} />)(
  ({ theme }) => ({
    boxSizing: 'border-box',
    width: '100%',
    padding: theme.spacing(5, 3),
    borderRadius: '5px',
    backgroundColor: theme.palette.primary.contrastText,
    [theme.breakpoints.up('md')]: {
      width: '500px',
      padding: theme.spacing(5, 4, 5, 4),
    },
    [theme.breakpoints.up('lg')]: {
      width: '600px',
      paddingLeft: theme.spacing(10),
    },
  })
);

const CardPhotoContainer = styled((props) => {
  return <Box elevation={24} {...props} />;
})(({ theme }) => ({
  width: '50%',
  maxWidth: '300px',
}));

const Photo = styled(({ src, ...props }) => {
  const { small, medium } = src.formats;
  console.log(src.formats);
  return (
    <Box
      component="img"
      loading="lazy"
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
  borderRadius: '5px',
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
