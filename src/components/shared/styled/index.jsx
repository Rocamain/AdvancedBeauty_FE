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
import { COMPONENT_SIZES, COMPONENT_SCR_SET } from 'constants/index';

const SecondaryButton = styled((props) => (
  <MuiButton
    variant='outlined'
    disableRipple
    endIcon={<SendIcon />}
    {...props}
  />
))(({ theme }) => {
  return {
    width: 'inherit',
    border: `2px solid ${theme.palette.primary.main}`,
    justifyContent: 'flex-start',
    'span,svg, p': {
      fontWeight: '500',
      display: 'none',
      color: theme.palette.primary.main,
    },
    ':hover': {
      color: 'orange',
      border: `2px solid ${theme.palette.primary.main}`,
    },
    [theme.breakpoints.up('md')]: {
      transition: 'border 0.6s ease',
      'span,svg, p': {
        display: 'block',
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
    },
  };
});

const Divider = styled((props) => <MuiDivider component='hr' {...props} />)(
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
      [theme.breakpoints.up('xxl')]: {
        width: grid === 'true' ? '220px' : '260px',
      },
    };
  }
);

const Container = styled((props) => <Box {...props} />)(
  ({ theme, background, show }) => {
    const shadowRight = background.includes('right');

    return {
      margin: 'auto',
      width: shadowRight ? '80vw' : '100vw',
      height: show === 'cards' && 'calc(100% + 64px)',
      boxSizing: 'border-box',
      boxShadow: shadowRight
        ? `10vw 0px 0px 0px ${theme.palette.primary.main}`
        : null,
      [theme.breakpoints.up('sm')]: {
        width: shadowRight ? '80vw' : '80vw',
        margin: shadowRight
          ? '0 0 0 10vw'
          : background === 'full'
          ? '-160px auto'
          : ' 0 auto',
      },
      [theme.breakpoints.up('md')]: {
        width: shadowRight ? '75vw' : '80vw',
        marginLeft: 'auto',

        marginRight: shadowRight ? '15vw' : 'auto',

        boxShadow: shadowRight
          ? `5vw 0px 0px 0px ${theme.palette.primary.main}`
          : null,
      },
      [theme.breakpoints.up('xl')]: {
        width: shadowRight ? 'calc(60vw - 5vh)' : '65vw',
        position: shadowRight && 'relative',
        marginRight: 'auto',
        transform: shadowRight && 'translateX(-2.5vw)',
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
  <LinkRouter component='a' variant='div' {...props} />
))(({ theme, first }) => {
  return {
    textDecoration: 'none',
    alignItems: 'flex-start',
    flexDirection: 'column',
    textAlign: 'center',
    borderRadius: '5px',
    border: 'none',
    background: first ? theme.palette.background.primary : 'white',
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
  };
});

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
  ({ className, url, alt, formats, componentType, shadowRight, ...props }) => {
    if (componentType === 'logo') {
      return (
        <img
          loading='lazy'
          src={url}
          alt={alt}
          {...props}
          style={{ objectFit: 'contain' }}
        />
      );
    }
    const [lg, md, sm] = COMPONENT_SCR_SET(componentType);
    const sizes = COMPONENT_SIZES(componentType);

    return (
      <img
        loading='lazy'
        className={className}
        src={url}
        alt={alt}
        title={alt}
        srcSet={
          formats &&
          `${formats?.large?.url ? formats?.large?.url : url} ${lg}, ${
            formats.medium.url
          } ${md}, ${formats.small.url} ${sm}`
        }
        sizes={sizes}
        style={{ objectFit: 'cover' }}
        {...props}
      />
    );
  }
)(({ theme }) => ({
  maxWidth: '100%',
  boxShadow: 'rgba(56, 21, 11, 0.19) 0px 50px 80px 0px',
  objectPosition: 'center top',
  borderRadius: '5px',
}));

const PrimaryButton = styled(({ type, ...props }) => {
  return (
    <MuiButton
      variant='contained'
      color='primary'
      endIcon={<SendIcon />}
      component={LinkRouter}
      disableFocusRipple
      disableRipple
      type={type}
      {...props}
    />
  );
})(({ theme }) => ({
  // textAlign: 'center',
  '.MuiButton-endIcon': {
    display: 'none',
  },
  ':hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
  [theme.breakpoints.up('md')]: {
    borderLeft: '0.5em solid transparent',
    borderRight: '0.3em solid transparent',
    padding: '0.5em',
    transition: 'background-color 0.65s !important',
    '.MuiButton-endIcon': {
      display: 'inline-flex',
      transform: 'translate(-30px)',
      width: 0,
      opacity: 0,
      transition: 'transform 0.6s, width 0.5s, opacity 0.3s ease',
      '>:nth-of-type(1)': {
        fontSize: '1.5rem',
        fontWeight: 800,
      },
    },
    ':hover': {
      borderRight: 0,
      paddingRight: '2em',
      span: {
        color: 'orange',
      },
      '.MuiButton-endIcon': {
        opacity: 1,
        transform: 'translate(0)',
        width: '8px',
      },
    },
  },
}));

export {
  Container,
  Wrapper,
  Card,
  Grid,
  Divider,
  SecondaryButton,
  Image,
  PrimaryButton,
};
