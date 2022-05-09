import { Box, IconButton, styled } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material/';

const CarouselContainer = styled((props) => <Box {...props} />)(
  ({ theme }) => ({
    overflow: 'hidden',
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(16),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(13),
      paddingBottom: theme.spacing(30),
    },
    [theme.breakpoints.up('lg')]: {},
  })
);
const CarouselHero = styled((props) => <Box {...props} />)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
    marginLeft: 'auto',
    position: 'relative',
    zIndex: 100,
    marginTop: '1em',
    width: '55.4%',
    top: '0.5em',
  },
}));

const SlideContainer = styled((props) => <Box {...props} />)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundImage: theme.palette.background.primary,
}));

const ChevronButton = styled((props) => {
  const { value } = props;
  const isRight = value === 'right';
  const ChevronIcon = isRight ? KeyboardArrowRight : KeyboardArrowLeft;

  return (
    <IconButton
      size={'big'}
      edge={'end'}
      children={<ChevronIcon fontSize={'large'} sx={{ flex: '1' }} />}
      aria-label={`carousel ${value} button`}
      {...props}
    />
  );
})(({ theme, value }) => {
  const isRight = value === 'right';
  return {
    flex: 1,
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      transform: isRight ? `translateX(3em)` : `translateX(-3em)`,
      justifyContent: isRight ? 'center' : 'center',
    },
    '&:hover ': {
      background: 'transparent',
      animation: `hoverChevron 1000ms ${theme.transitions.easing.easeInOut}`,
      animationFillMode: 'both',
    },

    '@keyframes hoverChevron': {
      from: {
        transform: isRight ? `translateX(3em)` : `translateX(-3em)`,
      },

      to: {
        transform: 'translateX(0)',
      },
    },
  };
});

export { CarouselContainer, CarouselHero, SlideContainer, ChevronButton };
