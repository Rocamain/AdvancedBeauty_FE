import { Box, styled } from '@mui/material';

const Card = styled((props) => <Box component="div" {...props} />)(
  ({ theme }) => ({
    margin: '0 auto',
    padding: theme.spacing(5, 3, 2, 3),
    borderRadius: '5px',
    background: '#FFFBF5',
    boxShadow: ' 0px 45px 84px -40px rgb(0 0 0 / 30%)',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5, 3, 2, 7),
      width: 'inherit',
      marginTop: '4em',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '8em',
      padding: theme.spacing(5, 5, 2, 13),
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '4em',
    },
  })
);

const Image = styled((props) => <Box component="img" {...props} />)(
  ({ theme }) => ({
    width: '100%',
    height: 'auto',
    [theme.breakpoints.up('md')]: {
      maxWidth: '100%',
    },
  })
);

export { Card, Image };
