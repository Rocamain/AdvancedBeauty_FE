import { makeStyles } from '@mui/styles';

const slidePhoto = makeStyles((theme) => ({
  photoEntering: {
    boxShadow: '0px 12px 18px -6px rgb(0 0 0 / 30%)',

    animation: `$myEffect 1200ms ${theme.transitions.easing.easeInOut}`,
  },
  photoExiting: {
    animation: `$myEffectExit 500ms ${theme.transitions.easing.easeInOut}`,
    opacity: 0,
  },
  '@keyframes myEffect': {
    '0%': {
      opacity: 0,
      transform: 'translateX(-25%)',
    },
    '50%': {
      opacity: 0.2,
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  '@keyframes myEffectExit': {
    '0%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  },
}));

const slideCard = makeStyles((theme) => ({
  cardEntering: {
    animation: `$myEffect 1400ms ${theme.transitions.easing.easeInOut}`,
  },
  cardExiting: {
    animation: `$myEffectExit 500ms ${theme.transitions.easing.easeInOut}`,
    opacity: 0,
  },
  '@keyframes myEffect': {
    '0%': {
      opacity: 0,
      transform: 'translateY(15%)',
    },
    '50%': {
      opacity: 0.2,
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  '@keyframes myEffectExit': {
    '0%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  },
}));

export { slideCard, slidePhoto };
