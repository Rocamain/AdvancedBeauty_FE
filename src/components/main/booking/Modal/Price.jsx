import { useContext } from 'react';
import { BookingContext } from 'context/BookingContext';
import { Box, Typography } from '@mui/material/';
export default function Price() {
  const { booking } = useContext(BookingContext);
  const { price } = booking;
  return (
    <Box
      display="flex"
      sx={{ justifyContent: 'flex-end', gap: '1em', marginRight: '0.3em' }}
    >
      <Typography component="h5" variant="h5" sx={{ color: 'primary.main' }}>
        Total cost:
      </Typography>
      <Typography component="h5" variant="h5" sx={{ color: '#c48037' }}>
        {`${price} `}&#x20AC;
      </Typography>
    </Box>
  );
}
