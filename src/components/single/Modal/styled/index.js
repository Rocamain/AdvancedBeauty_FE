import { styled } from '@mui/material';
import { Box, Paper, IconButton, Typography } from '@mui/material/';
import NorthWestSharpIcon from '@mui/icons-material/NorthWestSharp';
import circles from 'assets/circles.jpg';
import { keyframes } from '@emotion/react';

const DialogContainer = styled((props) => {
  return <Box {...props} />;
})(({ theme, props }) => {
  return {
    // display: 'inline-table',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    minHeight: '80vh',
    backgroundImage: `url(${circles})`,
    backgroundSize: 'contain',
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    paddingTop: 3,
    paddingBottom: 3,
  };
});

const ModalWrapper = styled(({ children, ...props }) => {
  return <Box {...props} show={true} children={children} />;
})(({ theme, show }) => {
  const fadeIn = keyframes`
    0% {
      opacity: 0;
      height: 0
      // visibility: "visible"
    }
    100% {
      height: "auto",
      opacity: 1;
  }`;

  return {
    '&  .fade': {
      display: 'flex',
      flexDirection: 'column',
      // opacity: 0,
      // height: 0,
      // display: show ? 'block' : 'none',
      // visibility: 'hidden',
      animation: show && `${fadeIn} 1s linear forwards 1s`,
    },
  };
});

const FadeOut = styled(({ show, ...props }) => {
  console.log('FADE', props);
  return <Paper {...props} />;
})(({ theme, show }) => {
  console.log('props', show);
  const fadeInEffect = keyframes`
0% {
  opacity: 0;

  // background-color: transparent;
  // position: relative;
}
100% {
  opacity: 1;
  // margin: '3em 4em 0.5em 4em';
  background-color: ${theme.palette.tertiary.main};
  // padding: 4em;
  // top: 10em;
  color ${theme.palette.text.primary};
}`;
  // return {};
  return {
    visibility: show ? `visible` : 'hidden',
    opacity: 0,
    animation: show && `${fadeInEffect} 1s linear forwards 1s`,
  };
});

const ExitBtn = styled((props) => {
  return <IconButton children={<NorthWestSharpIcon />} {...props}></IconButton>;
})(({ theme, props }) => {
  return {
    position: 'absolute',
    left: '0.2em',
    top: '0.2em',
  };
});

export { DialogContainer, ModalWrapper, ExitBtn, FadeOut };
