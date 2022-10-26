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
        type === 'center' ? '1.5rem  auto 2em auto' : '1.5rem  1rem 2em -1rem',
      borderColor: '#ffd4a3',
      borderBottomWidth: 'medium',
      width: type === 'center' ? '20%' : '55%',
      maxWidth: type === 'center' ? '20%' : '350px',
    };
  }
);

const Container = styled((props) => <Box component="div" {...props} />)(
  ({ theme, background, show }) => {
    const shadowRight = background.includes('right');

    return {
      width: shadowRight ? '90vw' : '100vw',
      height: show === 'cards' && 'calc(100% + 64px)',
      boxSizing: 'border-box',
      boxShadow: shadowRight ? '10vw 0px 0px 0px #00bccc' : null,
      [theme.breakpoints.up('sm')]: {
        width: shadowRight ? '80vw' : '80vw',
        margin: shadowRight
          ? '0 0 0 10vw'
          : background === 'full'
          ? '-160px auto'
          : ' 0 auto',
      },
      [theme.breakpoints.up('md')]: {
        width: shadowRight ? '80vw' : '80vw',
        marginLeft: shadowRight && '10vw',
      },
      [theme.breakpoints.up('xl')]: {
        width: '65vw',
        marginLeft: shadowRight && '17.5vw',
      },
      [theme.breakpoints.up('xxl')]: {
        width: shadowRight ? '50vw' : '60vw',
        margin: '0 auto',
        marginLeft: shadowRight && '20vw',
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
      ? ['column-reverse', 'column-reverse', 'row-reverse', 'row-reverse']
      : 'row';

  return <MuiGrid container direction={direction} component="div" {...props} />;
})(({ theme, background }) => {
  const backgroundImageSelector = {
    leaves: `url(${leavesBackground})`,
    circles: `url(${circles})`,
    'mixed leaves and right': `url(${leavesBackground})`,
  };

  return {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      backgroundColor: background === 'full' && '#F4F9FC',
    },
    [theme.breakpoints.up('md')]: {
      backgroundImage: backgroundImageSelector[background],
      backgroundSize: backgroundImageSelector[background] && 'contain',
      backgroundRepeat: backgroundImageSelector[background] && 'no-repeat',
    },
  };
});

export { Container, Wrapper, Card, ImageContainer, Grid, Divider, Button };
