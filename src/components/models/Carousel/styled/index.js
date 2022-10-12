import { Box, Paper, IconButton, styled } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material/';

const CarouselContainer = styled((props, ref) => <Paper {...ref} {...props} />)(
  ({ theme, url }) => ({
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundImage: `url(${url.small.url})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    overFlowY: 'visible',
    overFlowX: 'hidden',
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
      margin: '100px auto 160px auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
      zIndex: 300,
    },
    [theme.breakpoints.up('lg')]: {
      width: '40%',
      margin: '80px auto 160px auto',
    },
    [theme.breakpoints.up('xl')]: {
      width: '40%',
      margin: '80px auto 130px auto',
    },
  };
});

const SlideContainer = styled((props) => <Box {...props} />)(
  ({ theme, height }) => ({
    display: 'inline-flex',
    backgroundColor: theme.palette.primary.main,
    height: height && height,
    width: '100%',

    [theme.breakpoints.up('md')]: {
      '.chevronIcon-left': {
        transform: 'translateX(-100%)',
        transition: 'transform 1s',
      },
      ':hover .chevronIcon-left': {
        transform: 'translateX(0)',
        transition: 'transform 1s',
      },
      '.chevronIcon-right': {
        transform: 'translateX(100%)',
        transition: 'transform 1s',
      },
      ':hover .chevronIcon-right': {
        transform: 'translateX(0)',
        transition: 'transform 1s',
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
  minWidth: '10vw',
  flex: 1,
  [theme.breakpoints.up('md')]: {
    flex: value === 'right' && 0,
  },

  [theme.breakpoints.up('xl')]: {
    flex: value === 'left' ? 2 : 1,
  },
}));

const CardWrapper = styled((props) => <Box elevation={24} {...props} />)(
  ({ theme }) => ({
    boxSizing: 'border-box',

    padding: theme.spacing(5, 3),
    borderRadius: '5px',
    backgroundColor: theme.palette.primary.contrastText,
    [theme.breakpoints.up('sm')]: {
      width: '100% !important',
    },
    [theme.breakpoints.up('md')]: {
      width: '90%',
      padding: theme.spacing(8, 7, 4, 12),
      paddingLeft: theme.spacing(13),
    },
    [theme.breakpoints.up('lg')]: {
      width: '90%',
      paddingLeft: theme.spacing(20),
    },
  })
);

const CardPhotoContainer = styled((props) => {
  return <Box elevation={24} {...props} />;
})(({ theme }) => ({
  margin: '-100px auto',
  marginLeft: '-5%',
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(7),
    width: '50%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '40%',
  },
}));

const Photo = styled(({ src, ...props }) => {
  const { small, medium } = src.formats;
  return (
    <Box
      component="img"
      src={medium.url}
      srcSet={`${medium.url} 900w, ${small.url} 320w`}
      sizes="(min-width: 0px) and (max-width: 480px) 320px, (min-width: 481px) 900px, 100vw"
      loading="lazy"
      {...props}
    />
  );
})(({ theme }) => ({
  position: 'relative',
  zIndex: 200,
  width: '100%',
  height: 'auto',
  margin: '0 auto',
  borderRadius: '5px',
  minWidth: '220px',
  objectFit: 'contain',

  [theme.breakpoints.up('sm')]: {
    maxWidth: '290px',
    left: '30%',
  },
  [theme.breakpoints.up('lg')]: {
    minWidth: '260px',
    maxWidth: '330px',
    left: '36%',
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
