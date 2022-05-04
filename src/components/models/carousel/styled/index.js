import { Box, IconButton, styled } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material/';

const CarouselContainer = styled((props) => <Box {...props} />)(
  ({ theme }) => ({
    paddingBottom: theme.spacing(9),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    [theme.breakpoints.up('md')]: {},
    [theme.breakpoints.up('lg')]: {
      paddingBottom: theme.spacing(9),
    },
  })
);
const CarouselHero = styled((props) => <Box {...props} />)(({ theme }) => ({
  marginLeft: 'auto',
  position: 'relative',
  zIndex: 100,
  marginTop: '1em',
  top: 0,
  [theme.breakpoints.between('md', 'lg')]: {
    width: '55.4%',
    top: '3em',
  },
  [theme.breakpoints.between('lg', 'xl')]: {
    width: '53%',
    top: '3.3em',
  },
  [theme.breakpoints.up('xl')]: {
    width: '53%',
    top: '4em',
  },
}));

const SlideContainer = styled((props) => <Box {...props} />)(({ theme }) => ({
  width: '100%',
  height: '140px',
  margin: '0 auto',
  backgroundImage: theme.palette.background.primary,
}));

const SlideShowWrapper = styled((props) => <Box {...props} />)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'space-between',
  marginTop: '-1.5em',
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-end',
  },
}));

const ChevronButton = styled((props) => {
  const { value } = props;

  const ChevronIcon =
    value === 'right' ? KeyboardArrowRight : KeyboardArrowLeft;

  return (<Box
    children={ChevronIcon}
    aria-label={`carousel ${value} button`}
    {...props}
  />)(({ theme }) => ({
    minWidth: '2.7em',
    width: '6.5vw',
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      minWidth: '6vw',
      justifyContent: 'flex-end',
    },
    '&:hover ': {
      background: 'transparent',
    },
  }));
});
export {
  CarouselContainer,
  CarouselHero,
  SlideContainer,
  SlideShowWrapper,
  ChevronButton,
};
