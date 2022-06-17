import { Box, Paper, IconButton, styled } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material/';

const CarouselContainer = styled((props, ref) => <Paper {...ref} {...props} />)(
  ({ theme, url }) => ({
    width: '100vw',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundImage: `url(${url})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    overFlowY: 'visible',
    overFlowX: 'hidden',
    [theme.breakpoints.up('md')]: {
      height: '80vh',
      justifyContent: 'flex-start',
    },
  })
);
const CarouselHero = styled((props) => <Box {...props} />)(({ theme }) => {
  return {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      width: '60%',
      margin: '70px auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
      position: 'relative',
      top: '35px',
      zIndex: 300,
    },
    [theme.breakpoints.up('xl')]: {
      width: '60%',
      margin: '70px auto',
    },
  };
});

const SlideContainer = styled((props) => <Box {...props} />)(({ theme }) => ({
  display: 'inline-flex',

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
  padding: 0,
  flex: 1,
  [theme.breakpoints.up('sm')]: {
    minWidth: '10vw',
  },

  [theme.breakpoints.up('xl')]: {
    flex: value === 'left' ? 2 : 1,
  },
}));

const CardWrapper = styled((props) => <Box elevation={24} {...props} />)(
  ({ theme }) => ({
    boxSizing: 'border-box',
    margin: '-70px auto',
    padding: theme.spacing(5, 3),

    borderRadius: '5px',
    backgroundColor: theme.palette.primary.contrastText,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(7, 5),
      width: '90%',
    },
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(9, 7),
      paddingLeft: theme.spacing(12),
      width: '70%',
    },
  })
);

const CardPhotoContainer = styled((props) => {
  return <Box elevation={24} {...props} />;
})(({ theme }) => ({
  margin: '-100px auto',
  [theme.breakpoints.up('sm')]: {
    width: '50%',
  },
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(7),
    width: '30%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '25%',
    margin: '-150px auto',
  },
}));

const Photo = styled((props) => <Box component="img" {...props} />)(
  ({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: 'auto',
    margin: '0 auto',
    borderRadius: '5px',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      left: '8%',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '400px',
      left: '15%',
    },
    [theme.breakpoints.up('xl')]: {
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
