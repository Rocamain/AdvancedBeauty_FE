import { makeStyles } from '@mui/styles';

const slidePhoto = makeStyles((theme) => ({
  photoEntering: {
    boxShadow: '0px 12px 18px -6px rgb(0 0 0 / 30%)',
    transform: 'translateX(-3em)',
    opacity: 0,
    animation: `$photoIn 1200ms ${theme.transitions.easing.easeInOut} forwards 500ms`,
  },
  '@keyframes photoIn': {
    '0%': {
      opacity: 0,
    },
    '50%': {
      opacity: 0.2,
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
  photoExiting: {
    transform: 'translateX(0)',
    animation: `$photoOut 900ms ${theme.transitions.easing.easeInOut}`,
    opacity: 1,
  },

  '@keyframes photoOut': {
    transform: 'translateX(0)',
    '0%': {
      opacity: 0.5,
    },
    '100%': {
      opacity: 0,
      transform: 'translateX(-3em)',
    },
  },
}));

const slideCard = makeStyles((theme) => ({
  carWaiting: {
    display: 'none',
  },
  cardEntering: {
    animation: `$cardIn 900ms ${theme.transitions.easing.easeInOut} forwards 600ms`,
    transform: 'translateY(3em)',
    opacity: 0,
  },
  '@keyframes cardIn': {
    '0%': {
      opacity: 0,
    },
    '50%': {
      opacity: 0.2,
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  cardExiting: {
    animation: `$cardOut 500ms ${theme.transitions.easing.easeInOut}`,
    transform: 'translateY(0)',
  },

  '@keyframes cardOut': {
    '0%': {
      opacity: 0.4,
    },
    '99%': {
      opacity: 0,
      transform: 'translateY(3em)',
    },
    '100%': {
      display: 'none',
    },
  },
}));

export { slideCard, slidePhoto };
