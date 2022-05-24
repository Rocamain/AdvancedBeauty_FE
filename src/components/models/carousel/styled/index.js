import { Box, Paper, IconButton, styled } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material/';

const CarouselContainer = styled((props, ref) => <Paper {...ref} {...props} />)(
  ({ theme, url }) => ({
    width: '100vw',
    padding: theme.spacing(30, 0),
    backgroundImage: `url(${url})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    overFlowY: 'visible',
    overFlowX: 'hidden',
    [theme.breakpoints.up('md')]: {},
    [theme.breakpoints.up('lg')]: {},
  })
);
const CarouselHero = styled((props) => <Box {...props} />)(
  ({ theme, left, top }) => {
    return {
      display: 'none',
      [theme.breakpoints.up('lg')]: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: left,
        marginTop: theme.spacing(-20),
        top: top,
        zIndex: 100,
      },
    };
  }
);

const SlideContainer = styled((props) => <Box {...props} />)(({ theme }) => ({
  display: 'inline-flex',
  width: '100%',
  margin: '0 auto',
  backgroundColor: theme.palette.primary.main,

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
  minWidth: '10vw',
  padding: 0,
  flex: 1,

  [theme.breakpoints.up('xl')]: {
    flex: value === 'left' ? 2 : 1,
  },
}));

const CardWrapper = styled((props) => <Box elevation={24} {...props} />)(
  ({ theme }) => ({
    maxWidth: '70vw',
    margin: '-6% 0',
    padding: theme.spacing(9, 7),

    borderRadius: '5px',
    backgroundColor: theme.palette.primary.contrastText,
    [theme.breakpoints.up('sm')]: {
      margin: '-12% 0',
      width: '80%',

      marginLeft: 'auto',
    },
    [theme.breakpoints.up('md')]: {
      width: '60%',
    },
    [theme.breakpoints.up('lg')]: {},
  })
);

const CardPhotoContainer = styled((props) => {
  return <Box elevation={24} {...props} />;
})(({ theme }) => ({
  margin: '-10% auto',
  [theme.breakpoints.up('sm')]: {
    width: '50%',
  },
  [theme.breakpoints.up('md')]: {
    margin: '-13% auto',
    width: '30%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '25%',
  },
  [theme.breakpoints.up('lg')]: {},
}));

const Photo = styled((props) => <Box component="img" {...props} />)(
  ({ theme }) => ({
    position: 'relative',
    left: '5%',
    width: '100%',
    zIndex: 100,
    height: 'auto',
    margin: '0 auto',
    borderRadius: '5px',
    minWidth: '220px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      // display: 'none',
      left: '8%',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '400px',
      // display: 'none',
      left: '15%',
    },
    [theme.breakpoints.up('xl')]: {
      // display: 'none',
      maxWidth: '450px',
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
