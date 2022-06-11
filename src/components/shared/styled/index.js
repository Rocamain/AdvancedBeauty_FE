import {
  Box,
  Grid as MuiGrid,
  styled,
  Divider as MuiDivider,
} from '@mui/material';

import leavesBackground from 'assets/leaves-background.jpg';

const Divider = styled((props) => <MuiDivider component="hr" {...props} />)(
  ({ theme, type }) => ({
    margin: type === 'center' ? '0  auto 1em auto' : '1.5em  1em 2.5em -1em',
    borderColor: '#ffd4a3',
    borderBottomWidth: 'medium',
    width: type === 'center' ? '10%' : '60%',
  })
);

const Container = styled((props) => <Box component="div" {...props} />)(
  ({ theme, background, flex = false }) => {
    const backgroundSelector = {
      full: 'linear-gradient(90deg,#75c9cc 0%,#00bccc 100%)!important',
      leaves: `url(${leavesBackground})`,
      circles: `url(${leavesBackground})`,
      'mixed leaves and right': `url(${leavesBackground})`,
      none: null,
    };

    let styles = {
      padding: theme.spacing(6),
      width: '100%',
      backgroundImage: backgroundSelector[background],
      backgroundSize: 'contain',
      backgroundPosition: '40%',
      backgroundRepeat: 'no-repeat',
    };

    return { ...styles };
  }
);
const Wrapper = styled((props) => <Box component="div" {...props} />)(
  ({ theme, background, flex = false }) => {
    let styles = {
      width: '80%',
      margin: background === 'full' ? theme.spacing(-7, 'auto') : '0 auto',

      [theme.breakpoints.up('lg')]: {
        width: '65%',
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
    padding: theme.spacing(3, 3),

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
  let spacing = show === 'cards' ? 3 : 3;

  let direction =
    photoColumn === 'first' && show === 'photo'
      ? ['column-reverse', 'row-reverse']
      : 'row';

  return (
    <MuiGrid
      container
      direction={direction}
      columnSpacing={spacing}
      rowSpacing={spacing}
      component="div"
      {...props}
    />
  );
})(({ theme, background }) => {
  const shadowSelector = {
    none: null,
    right: '10vw 0px 0px 0px #00bccc',
    'mixed leaves and right': '10vw 0px 0px 0px #00bccc',
    full: 'rgba(56, 21, 11, 0.09) 0px 50px 80px 0px',
  };

  return {
    padding: ['1em', '2em', '3em'],
    paddingLeft: 0,
    height: '5% !important',
    boxShadow: shadowSelector[background],
    backgroundColor: background === 'full' && '#edf4f8',
  };
});

export { Container, Wrapper, Card, ImageContainer, Grid, Divider };
