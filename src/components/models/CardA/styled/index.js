import { Box, styled } from '@mui/material';
import leavesBackground from 'assets/leaves-background.jpg';
import circles from 'assets/circles.jpg';

const Card = styled((props) => <Box component="div" {...props} />)(
  ({ theme }) => ({
    margin: '0 auto',
    padding: theme.spacing(5, 3, 2, 3),
    borderRadius: '5px',
    background: '#FFFBF5',
    boxShadow: ' 0px 45px 84px -40px rgb(0 0 0 / 30%)',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5, 3, 2, 7),
      width: '110%',
      marginTop: '6em',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '10em',
      padding: theme.spacing(5, 5, 2, 13),
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '12em',
    },
  })
);
const Container = styled((props) => {
  return <Box {...props} />;
})(({ theme, backgroundType }) => {
  const backgroundImageSelector = {
    leaves: `url(${leavesBackground})`,
    circles: `url(${circles})`,
  };
  return {
    backgroundImage:
      backgroundImageSelector[backgroundType] &&
      backgroundImageSelector[backgroundType],
    backgroundSize: backgroundImageSelector[backgroundType] && 'contain',
    backgroundRepeat: backgroundImageSelector[backgroundType] && 'no-repeat',
    width: '80vw',
    margin: '0 auto',

    [theme.breakpoints.up('xl')]: {
      width: '60vw',
    },
  };
});

const Image = styled(({ formats, ...props }) => {
  return (
    <Box
      component="img"
      {...props}
      loading="lazy"
      sx={{
        content: {
          xs: `url(${formats.small.url})`,
          sm: `url(${formats.medium.url})`,
          md: `url(${formats.small.url})`,
          lg: `url(${formats.small.url})`,
          xl: `url(${formats.medium.url})`,
        },
      }}
    />
  );
})(({ theme }) => ({
  width: '100%',
  height: 'auto',
  borderRadius: '5px',
  [theme.breakpoints.up('md')]: {
    maxWidth: '100%',
  },
}));

export { Card, Container, Image };
