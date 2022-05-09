import { forwardRef } from 'react';
import clsx from 'clsx';
import { Card as MuiCard, Paper, Box, IconButton, styled } from '@mui/material';

const CardWrapper = styled((props) => <Box {...props} />)(({ theme }) => ({
  height: 'fit-content',
  margin: '0 auto',
  padding: theme.spacing(5, 3),
  boxSizing: 'border-box',
  position: 'relative',
  backgroundColor: 'grey',
  [theme.breakpoints.up('md')]: {
    justifyContent: 'space-between',
    padding: theme.spacing(7, 5),
  },
}));

const Card = forwardRef(({ children, top }, ref) => {
  return (
    <div ref={ref} style={{ width: '80%' }}>
      <CardWrapper raised sx={{ top }}>
        {children}
      </CardWrapper>
    </div>
  );
});

export default Card;
