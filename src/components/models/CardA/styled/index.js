import { Box, styled } from '@mui/material';

const Card = styled((props) => <Box component="div" {...props} />)(
  ({ theme }) => ({
    boxSizing: 'border-box',
    padding: theme.spacing(3, 3, 3, 18),

    background: '#FFFBF5',
    boxShadow: ' 0px 45px 84px -40px rgb(0 0 0 / 30%)',
    [theme.breakpoints.up('md')]: {
      flexWrap: 'nowrap',
    },
  })
);

const Image = styled((props) => <Box component="img" {...props} />)(
  ({ theme }) => ({
    maxWidth: '100%',
    height: 'auto',
  })
);

export { Card, Image };
