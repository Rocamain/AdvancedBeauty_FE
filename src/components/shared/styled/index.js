import {
  Box,
  Grid as MuiGrid,
  styled,
  Divider as MuiDivider,
} from '@mui/material';

import leavesBackground from 'assets/leaves-background.jpg';

const Divider = styled((props) => <MuiDivider component="hr" {...props} />)(
  ({ theme, type }) => {
    return {
      margin: type === 'center' ? '0  auto 1em auto' : '1.5em  1em 2.5em -1em',
      borderColor: '#ffd4a3',
      borderBottomWidth: 'medium',
      width: type === 'center' ? '10%' : '60%',
      marginBottom: type === 'center' && '5.5em',
    };
  }
);

const Container = styled((props) => <Box component="div" {...props} />)(
  ({ theme, background }) => {
    let styles = {
      padding: theme.spacing(12, 0),
      width: '100%',
      backgroundImage:
        background === 'full'
          ? 'linear-gradient(90deg,#75c9cc 0%,#00bccc 100%)!important'
          : null,

      display: 'flex',
      flexWrap: 'wrap',
      [theme.breakpoints.up('md')]: {
        flexWrap: 'nowrap',
      },
    };

    return { ...styles };
  }
);
const Wrapper = styled((props) => <Box component="div" {...props} />)(
  ({ theme, background, flex = false }) => {
    let styles = {
      width: '80%',
      margin: '0 auto',

      [theme.breakpoints.up('lg')]: {
        width: '65%',
      },
      [theme.breakpoints.up('xl')]: {
        width: '55%',
      },
    };

    const flexStyles = {
      display: 'flex',
      flexWrap: 'wrap',
      [theme.breakpoints.up('md')]: {
        flexWrap: 'nowrap',
      },
    };

    if (flex) {
      styles = { ...styles, ...flexStyles };
    }

    return { ...styles };
  }
);

const Card = styled((props) => <Box component="div" {...props} />)(
  ({ theme, isFirstCard }) => ({
    borderRadius: '5px',
    alignItems: 'flex-start',
    padding: theme.spacing(4, 3.5),
    paddingBottom: theme.spacing(5),
    textAlign: 'center',
    background: isFirstCard
      ? 'linear-gradient(160deg,#75c9cc 0%,#00bccc 100%)'
      : 'white',
    boxShadow: isFirstCard
      ? 'rgb(117, 201, 204) 0px 50px 80px 0px'
      : '0px 50px 80px 0px rgba(12,2,2,0.1)',
    color: isFirstCard ? 'white !important' : '#666 !important',
    [theme.breakpoints.up('md')]: {
      transform: 'scale(1)',
      transition: 'transform 0.5s',
    },
    ':hover': {
      transform: 'scale(1.03)',
      transition: 'transform 0.5s',
    },
  })
);
const ImageContainer = styled((props) => (
  <Box component="div" {...props}>
    <Image {...props} />
  </Box>
))(({ theme, size }) => ({
  maxWidth: '100%',
  height: size === 'Big' ? '6.5em' : '4.5em',
  margin: '0 auto',
  marginBottom: '1em',
  display: 'inline-block',
}));
const Image = styled((props) => <Box component="img" {...props} />)(
  ({ theme }) => {
    return {
      objectFit: 'contain',
      width: '100%',
      height: 'auto',
    };
  }
);

const Grid = styled(({ show, photoColumn, ...props }) => {
  const direction =
    photoColumn === 'first' && show === 'photo'
      ? ['column-reverse', 'row-reverse']
      : 'row';

  return <MuiGrid container direction={direction} component="div" {...props} />;
})(({ theme, background, show }) => {
  const backgroundImageSelector = {
    leaves: `url(${leavesBackground})`,
    circles: `url(${leavesBackground})`,
    'mixed leaves and right': `url(${leavesBackground})`,
  };

  return {
    backgroundColor: !backgroundImageSelector[background]
      ? '#F4F9FC'
      : 'transparent',
    backgroundImage: backgroundImageSelector[background],
    margin:
      background === 'full'
        ? [theme.spacing(-20, 'auto'), theme.spacing(-30, 'auto')]
        : '0 auto',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',

    boxShadow:
      background === 'right' || background === 'mixed leaves and right'
        ? '10vw 0px 0px 0px #00bccc'
        : null,

    [theme.breakpoints.up('sm')]: {
      width: '85%',
    },
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },

    [theme.breakpoints.up('lg')]: {
      width: '65%',
    },
  };
});

export { Container, Wrapper, Card, ImageContainer, Grid, Divider };
