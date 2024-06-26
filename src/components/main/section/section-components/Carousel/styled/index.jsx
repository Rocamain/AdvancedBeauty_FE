import { Box, Paper, IconButton, styled } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material/';

const CarouselContainer = styled((props) => <Paper {...props} />)(
  ({ theme, url }) => ({
    position: 'relative',
    display: 'flex',
    height: '700px',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    [theme.breakpoints.down(300)]: {
      height: '800px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '3em 0',
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
  height: '100%',
  borderRadius: 0,
  padding: 0,
  flex: 1,
  minWidth: '13vw',
  [theme.breakpoints.up('md')]: {
    minWidth: '10vw',
    flex: value === 'right' ? 1 : 2,
  },
}));

const CardWrapper = styled(({ animation, ...props }) => {
  const animate =
    animation === 'idle'
      ? `cardIn 700ms forwards 200ms`
      : animation === 'exit'
      ? `cardOut 600ms forwards`
      : `cardIn 700ms forwards 200ms`;
  return (
    <Paper
      elevation={24}
      {...props}
      sx={{
        animation: animate,
      }}
    />
  );
})(({ theme }) => ({
  boxSizing: 'border-box',
  padding: theme.spacing(5, 3),
  borderRadius: 5,
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  backgroundColor: theme.palette.primary.contrastText,
  transform: 'translateY(3.5em)',
  opacity: 0,
  '@keyframes cardOut': {
    '0%': {
      transform: 'translateY(0)',
      opacity: 0.8,
    },
    '70%': {
      opacity: 0.4,
    },
    '100%': {
      opacity: 0,
      transform: 'translateY(3.5em)',
    },
  },
  '@keyframes cardIn': {
    '0%': {
      opacity: 0,
    },
    '50%': {
      opacity: 0.5,
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
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
}));

const CardPhotoContainer = styled((props) => {
  return <Box elevation={24} {...props} />;
})(({ theme }) => ({
  maxWidth: 300,
}));

const Photo = styled(({ animation, ...props }) => {
  const animate =
    animation === 'idle'
      ? `photoIn 700ms forwards`
      : animation === 'exit'
      ? `photoOut 1000ms forwards`
      : `photoIn 700ms forwards`;

  return (
    <Box
      width='300'
      height='600'
      component='img'
      {...props}
      sx={{
        animation: animate,
      }}
    />
  );
})(({ theme }) => {
  return {
    position: 'relative',
    zIndex: 200,
    height: 'auto',
    margin: '0 auto',
    borderRadius: 5,
    maxWidth: 'calc(100% + 10px)',
    objectFit: 'contain',
    transform: 'translateX(-3em)',
    opacity: 1,

    '@keyframes photoIn': {
      '0%': {
        opacity: 0,
      },
      '50%': {
        opacity: 0.4,
      },
      '100%': {
        opacity: 1,
        transform: 'translateX(0)',
      },
    },
    '@keyframes photoOut': {
      '0%': {
        transform: 'translateX(0)',
        opacity: 1,
      },
      '50%': {
        opacity: 0.2,
      },
      '100%': {
        opacity: 0,
        transform: 'translateX(-5em)',
      },
    },

    [theme.breakpoints.up('lg')]: {
      maxWidth: 'calc(100% + 40px)',
    },
  };
});

export {
  CarouselContainer,
  CarouselHero,
  SlideContainer,
  ChevronButton,
  CardWrapper,
  CardPhotoContainer,
  Photo,
};
