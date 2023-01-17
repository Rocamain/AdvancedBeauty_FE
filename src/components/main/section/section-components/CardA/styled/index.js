import { Box, styled } from '@mui/material';
import leavesBackground from 'assets/leaves-background.jpg';
import circles from 'assets/circles.jpg';

const Card = styled((props) => <Box {...props} />)(({ theme, card }) => ({
  margin: '0 auto',
  padding: card ? theme.spacing(5, 3) : theme.spacing(5, 3, 2, 3),
  borderRadius: '5px',
  background: '#FFFBF5',
  boxShadow: ' 0px 45px 84px -40px rgb(0 0 0 / 30%)',
  [theme.breakpoints.up('sm')]: {
    width: card && '65%',
    padding: card && theme.spacing(5, 3, 5, 5),
  },
  [theme.breakpoints.up('md')]: {
    padding: !card && theme.spacing(5, 3, 5, 7),
    width: card ? '60%' : '110%',
    marginTop: '6em',
  },
  [theme.breakpoints.up('lg')]: {
    width: card && '50%',
    marginTop: !card && '10em',
    padding: !card && theme.spacing(5, 5, 5, 13),
  },
  [theme.breakpoints.up('xl')]: {
    marginTop: !card && '12em',
  },
}));
const Container = styled((props) => {
  return <Box {...props} />;
})(({ theme, background }) => {
  const backgroundImageSelector = {
    leaves: `url(${leavesBackground})`,
    circles: `url(${circles})`,
  };
  return {
    backgroundImage:
      backgroundImageSelector[background] &&
      backgroundImageSelector[background],
    backgroundSize: backgroundImageSelector[background] && 'contain',
    backgroundRepeat: backgroundImageSelector[background] && 'no-repeat',
    width: '80vw',
    margin: '0 auto',

    [theme.breakpoints.up('xl')]: {
      width: '60vw',
    },
  };
});

export { Card, Container };
