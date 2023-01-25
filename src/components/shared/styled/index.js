import {
  Box,
  Grid as MuiGrid,
  styled,
  Divider as MuiDivider,
  Button as MuiButton,
} from '@mui/material';
import { Link as LinkRouter } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import leavesBackground from 'assets/leaves-background.jpg';
import circles from 'assets/circles.jpg';
import { COMPONENT_SIZES, COMPONENT_SCR_SET } from 'constants/index.js';

const Button = styled((props) => (
  <MuiButton
    variant="outlined"
    disableRipple
    endIcon={<SendIcon className="icon" />}
    {...props}
  />
))(({ theme }) => {
  return {
    width: 'inherit',
    border: '2px solid #00BCCC',
    transition: 'border 0.6s ease',
    justifyContent: 'flex-start',
    'span,svg, p': {
      fontWeight: '500',
      color: '#00BCCC',
      opacity: '0',
      transition: 'margin-left 0.6s ease, opacity 0.8s ease, color 0.8s ease',
      marginLeft: '-0.4em',
    },
    ':hover': {
      background: 'transparent',
      border: '2px solid transparent',
      '& span,svg, p': {
        color: 'orange',
        marginLeft: '0.1em',
        opacity: '1',
      },
    },
  };
});

const Divider = styled((props) => <MuiDivider component="hr" {...props} />)(
  ({ theme, grid }) => {
    return {
      margin:
        grid === 'true' ? '1.5rem  1rem 1em -1rem' : '1.5rem  auto 2em auto',
      borderColor: theme.palette.secondary.main,
      borderBottomWidth: 'medium',
      width: grid === 'true' ? '180px' : '220px',
      [theme.breakpoints.up('md')]: {
        width: grid === 'true' ? '180px' : '220px',
      },
      [theme.breakpoints.up('xll')]: {
        width: grid === 'true' ? '220px' : '260px',
      },
    };
  }
);

const Container = styled((props) => <Box {...props} />)(
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
        maxWidth: '1500px',
        width: shadowRight ? '55vw' : '65vw',
        marginLeft: shadowRight && '17.5vw',
        marginRight: shadowRight && '27.5vw',
      },
    };
  }
);
const Wrapper = styled((props) => <Box {...props} />)(({ theme }) => {
  let styles = {
    gap: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.up('md')]: {
      gap: 0,
      flexWrap: 'nowrap',
    },
  };

  return { ...styles };
});

const Card = styled(({ buttonTo, page, sectionTitle, ...props }) => (
  <LinkRouter component="a" variant="div" {...props} />
))(({ theme, first }) => ({
  textDecoration: 'none',
  alignItems: 'flex-start',
  flexDirection: 'column',
  textAlign: 'center',
  borderRadius: '5px',
  border: 'none',
  background: first
    ? 'linear-gradient(160deg,#75c9cc 0%,#00bccc 100%)'
    : 'white',
  boxShadow: first
    ? 'rgb(117, 201, 204) 0px 50px 80px 0px'
    : '0px 50px 80px 0px rgba(12,2,2,0.1)',
  color: first ? 'white !important' : '#666 !important',
  padding: theme.spacing(4, 3.5),
  paddingBottom: theme.spacing(5),
  cursor: 'pointer',
  zIndex: 100,
  [theme.breakpoints.up('md')]: {
    transition: 'transform 1250ms',
    ':hover': {
      transform: 'scale(1.05)',
    },
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

const Grid = styled(({ show, photocolumn, ...props }) => {
  const direction =
    photocolumn === 'first' && show === 'photo'
      ? ['column-reverse', 'column-reverse', 'row-reverse', 'row-reverse']
      : 'row';

  return <MuiGrid container direction={direction} {...props} />;
})(({ theme, background }) => {
  const backgroundImageSelector = {
    leaves: `url(${leavesBackground})`,
    circles: `url(${circles})`,
    'mixed leaves and right': `url(${leavesBackground})`,
  };

  return {
    backgroundImage: backgroundImageSelector[background],
    backgroundSize: backgroundImageSelector[background] && 'contain',
    backgroundRepeat: backgroundImageSelector[background] && 'no-repeat',
    backgroundColor: background === 'full' && '#F4F9FC',
    [theme.breakpoints.down('md')]: {
      background,
    },
  };
});

const Image = styled(
  ({
    className,
    url,
    altText,
    formats,
    componentType,
    shadowRight,
    ...props
  }) => {
    const [lg, md, sm] = COMPONENT_SCR_SET(componentType);
    const sizes = COMPONENT_SIZES(componentType);

    return (
      <Box
        component="img"
        loading="lazy"
        {...props}
        className={className}
        src={url}
        alt={altText}
        title={altText}
        srcSet={`${url} ${lg}, ${url} ${md}, ${formats.medium.url} ${sm}`}
        sizes={sizes}
        sx={{
          display: 'block',
          objectFit: 'contain',
          maxWidth: shadowRight ? '100%' : '100%',
          mx: 'auto',
          boxShadow:
            componentType !== 'cardA' &&
            'rgba(56, 21, 11, 0.19) 0px 50px 80px 0px',
        }}
      />
    );
  }
)(({ theme }) => ({
  margin: 0,
  objectFit: 'fill',
  objectPosition: 'left top',
  maxHeight: 'inherit',
  [theme.breakpoints.up('sm')]: {
    borderRadius: '5px',
  },
}));

export {
  Container,
  Wrapper,
  Card,
  ImageContainer,
  Grid,
  Divider,
  Button,
  Image,
};
