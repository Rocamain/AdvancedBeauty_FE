import { Box, Paper, IconButton, styled } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material/';

const CarouselContainer = styled((props) => <Paper {...props} />)(
  ({ theme, url }) => ({
    width: '100vw',
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(16),
    backgroundImage: `url(${url})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    overFlowY: 'visible',
    overFlowX: 'hidden',

    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(14, 0),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(10, 0),
    },
  })
);
const CarouselHero = styled((props) => <Box {...props} />)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    flexDirection: 'column',
    width: '70vw',
    margin: '0 auto',
    position: 'relative',
    left: '35vw',
    top: theme.spacing(3),
    zIndex: 100,
  },
}));

const SlideContainer = styled((props) => <Box {...props} />)(({ theme }) => ({
  display: 'inline-flex',
  width: '100%',
  margin: '0 auto',
  backgroundColor: theme.palette.primary.main,
  overFlowX: 'hidden',
  [theme.breakpoints.up('md')]: {
    '.chevronIcon-left': {
      transform: 'translate(-100%)',
      transition: 'transform 1s',
    },
    ':hover .chevronIcon-left': {
      transform: 'translate(0)',
      transition: 'transform 1s',
    },
    '.chevronIcon-right': {
      transform: 'translate(100%)',
      transition: 'transform 1s',
    },
    ':hover .chevronIcon-right': {
      transform: 'translate(0)',
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
      pointerEvents="auto"
      children={
        <ChevronIcon
          className={`chevronIcon-${value}`}
          fontSize={'large'}
          sx={{ width: '100%' }}
        />
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
  minWidth: '10vw',
  [theme.breakpoints.up('xl')]: {
    flex: value === 'left' ? 2 : 1,
  },
}));

const CardWrapper = styled((props) => <Box elevation={24} {...props} />)(
  ({ theme }) => ({
    position: 'relative',
    backgroundColor: theme.palette.primary.contrastText,
    maxWidth: '70vw',
    margin: '-6% 0',
    height: 'inherit',
    padding: theme.spacing(3),
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      width: '80%',
      margin: '-16% 0',
      marginLeft: 'auto',
      alignItems: 'center',

      padding: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      width: '60%',
      margin: '-30% auto',
      padding: theme.spacing(10, 5),
    },
    [theme.breakpoints.up('lg')]: {
      width: '60%',
      // margin: ' 0',
      padding: theme.spacing(13, 7),
    },
  })
);

const CardPhotoContainer = styled((props) => {
  return <Box elevation={24} {...props} />;
})(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: '50%',
    margin: '-10% auto',
  },
  [theme.breakpoints.up('md')]: {
    width: '30%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '25%',
  },
  [theme.breakpoints.up('lg')]: {},
}));

const Photo = styled((props) => <Box component="img" {...props} />)(
  ({ theme }) => ({
    width: '100%',
    height: 'auto',
    margin: '0 auto',

    position: 'relative',
    left: '5%',
    zIndex: 100,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      // display: 'none',
      left: '8%',
    },
    [theme.breakpoints.up('lg')]: {
      // display: 'none',
      left: '15%',
    },
    [theme.breakpoints.up('xl')]: {
      // display: 'none',
      maxWidth: '400px',
    },
  })
);

export {
  CarouselContainer,
  CarouselHero,
  SlideContainer,
  ChevronButton,
  CardWrapper,
  CardPhotoContainer,
  Photo,
};
