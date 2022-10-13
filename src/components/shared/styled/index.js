import {
  Box,
  Grid as MuiGrid,
  styled,
  Divider as MuiDivider,
  Button as MuiButton,
} from '@mui/material';

import SendIcon from '@mui/icons-material/Send';
import leavesBackground from 'assets/leaves-background.jpg';
import circles from 'assets/circles.jpg';

const Button = styled((props) => (
  <MuiButton
    variant="outlined"
    disableRipple
    endIcon={<SendIcon className="icon" />}
    {...props}
  />
))(({ theme }) => {
  return {
    fontWeight: '500',
    border: '2px solid #00BCCC',
    transition: 'all 0.5s ease',
    justifyContent: 'flex-start',
    'span,svg': {
      color: '#00BCCC',
      opacity: '0.2',
      transition: 'all 0.5s ease',
      marginLeft: '-0.7rem',
    },
    p: {
      color: '#00BCCC',
      transform: 'translateX(-0.2rem)',
      lineHeight: '0.3rem',
      transition: 'all 0.5s ease',
    },
    ':hover': {
      color: '#e2d3e2',
      background: 'transparent',
      border: '2px solid transparent',
      '& span,svg:first-of-type': {
        margin: '0',
        opacity: '1',
      },
      '& p:first-of-type': {
        transform: 'translateX(-5px)',
        opacity: '1',
      },
    },
  };
});

const Divider = styled((props) => <MuiDivider component="hr" {...props} />)(
  ({ theme, type }) => {
    return {
      margin:
        type === 'center' ? '1.5em  auto 2.5em auto' : '1.5em  1em 2.5em -1em',
      borderColor: '#ffd4a3',
      borderBottomWidth: 'medium',
      width: type === 'center' ? '10%' : '60%',
    };
  }
);

const top = (theme, background, show) => {
  if (background === 'full') {
    return [theme.spacing(20), theme.spacing(30)];
  }

  if (background === 'full' && show === 'cards') {
    return [theme.spacing(20), theme.spacing(30)];
  }

  if (show === 'photo' && background === 'full') {
    return [theme.spacing(25), theme.spacing(30)];
  }
  if (show === 'photo') {
    return [theme.spacing(5)];
  }
};

const Container = styled((props) => <Box component="div" {...props} />)(
  ({ theme, background, show }) => {
    const shadowRight = background && background.includes('right');

    return {
      width: shadowRight ? '80vw' : '90vw',
      margin: shadowRight ? '0 0 0 5vw' : '0 5vw 0 5vw',
      position: (background === 'full' || show === 'photo') && 'relative',
      top: top(theme, background, show),
      padding: background === 'full' && theme.spacing(4, 0),
      boxSizing: 'border-box',
      backgroundImage:
        background === 'full'
          ? 'linear-gradient(90deg,#75c9cc 0%,#00bccc 100%)!important'
          : null,
      boxShadow:
        shadowRight || background === 'mixed leaves and right'
          ? '10vw 0px 0px 0px #00bccc'
          : null,
      [theme.breakpoints.up('sm')]: {
        width: shadowRight ? '70vw' : '80vw',
        margin: shadowRight ? '0 5vw 0 10vw' : '0 10vw 0 10vw',
      },
      [theme.breakpoints.up('md')]: {
        width: shadowRight ? '60vw' : '70vw',
        margin: shadowRight ? '0 10vw 0 15vw' : '0 15vw 0 15vw',
      },
      [theme.breakpoints.up('xl')]: {
        width: shadowRight ? '50vw' : '60vw',
        margin: shadowRight ? '0 15vw 0 20vw' : '0 20vw 0 20vw',
      },
    };
  }
);
const Wrapper = styled((props) => <Box component="div" {...props} />)(
  ({ theme }) => {
    let styles = {
      width: '100%',
      margin: '0 auto',
      gap: theme.spacing(12),
      display: 'flex',
      flexWrap: 'wrap',
      [theme.breakpoints.up('md')]: {
        gap: 0,

        flexWrap: 'nowrap',
      },
    };

    return { ...styles };
  }
);

const Card = styled(
  ({ button, handleClick, buttonTo, page, sectionTitle, ...props }) =>
    button ? (
      <Box component="div" {...props}>
        <button onClick={handleClick}>{props.children}</button>
      </Box>
    ) : (
      <Box component="div" {...props} />
    )
)(({ theme, isFirstCard }) => ({
  alignItems: 'flex-start',

  [theme.breakpoints.up('md')]: {
    transform: 'scale(1)',
    transition: 'transform 0.5s',
  },
  ':hover': {
    transform: 'scale(1.03)',
    transition: 'transform 0.5s',
  },
  button: {
    textAlign: 'center',
    borderRadius: '5px',
    border: 'none',
    background: isFirstCard
      ? 'linear-gradient(160deg,#75c9cc 0%,#00bccc 100%)'
      : 'white',
    boxShadow: isFirstCard
      ? 'rgb(117, 201, 204) 0px 50px 80px 0px'
      : '0px 50px 80px 0px rgba(12,2,2,0.1)',
    color: isFirstCard ? 'white !important' : '#666 !important',
    padding: theme.spacing(4, 3.5),
    paddingBottom: theme.spacing(5),
    cursor: 'pointer',
    zIndex: 100,
  },
}));

const ImageContainer = styled(({ url, ...props }) => {
  if (url) {
    return (
      <Box
        component="img"
        {...props}
        loading="lazy"
        src={url}
        width="128px"
        height="128px"
      />
    );
  } else {
    return <Box component="img" {...props} loading="lazy" />;
  }
})(({ theme }) => ({
  margin: '0 auto',
  marginBottom: '1em',
  width: '100px',
  height: '100px',
}));

const Grid = styled(({ show, photoColumn, ...props }) => {
  const direction =
    photoColumn === 'first' && show === 'photo'
      ? ['column-reverse', 'row-reverse']
      : 'row';

  return <MuiGrid container direction={direction} component="div" {...props} />;
})(({ theme, background, show }) => {
  const backgroundImageSelector = {
    leaves: `url(${leavesBackground})`,
    circles: `url(${circles})`,
    'mixed leaves and right': `url(${leavesBackground})`,
  };

  return {
    backgroundColor: background === 'full' && '#F4F9FC',
    backgroundImage: backgroundImageSelector[background],
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    margin:
      background === 'full'
        ? [theme.spacing(-20, 'auto'), theme.spacing(-30, 'auto')]
        : '0 auto',

    // [theme.breakpoints.up('xs')]: {
    //   width: '100%',
    // },
    // [theme.breakpoints.up('md')]: {
    //   // width: '80%',
    // },

    // [theme.breakpoints.up('lg')]: {
    //   // width: '65%',
    // },
  };
});

export { Container, Wrapper, Card, ImageContainer, Grid, Divider, Button };
