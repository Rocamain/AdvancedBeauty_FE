import { Box, styled } from '@mui/material';

const FlexContainer = styled((props) => <Box component="div" {...props} />)(
  ({ theme }) => {
    return {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: '2em',
      maxWidth: '100vh',
      margin: '0 auto',

      [theme.breakpoints.up('lg')]: {
        gap: '3em',
        maxWidth: '70vw',
      },
      [theme.breakpoints.up('xl')]: {
        maxWidth: '65vw',
      },
    };
  }
);

export { FlexContainer };
