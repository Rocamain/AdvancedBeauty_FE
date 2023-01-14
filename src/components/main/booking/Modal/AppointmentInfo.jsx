import { useContext } from 'react';
import { BookingContext } from 'context/BookingContext';

import { Box, Typography, Divider } from '@mui/material/';

const Text = ({ children, date }) => {
  return (
    <Typography variant="summaryHeader" component="h4">
      {date ? 'Date:' : 'Time:'}
      <Box
        component="span"
        children={children}
        sx={{
          marginLeft: '0.5em',
          color: 'white',
        }}
      />
    </Typography>
  );
};

export default function AppointmentInfo({ mobile }) {
  const { booking } = useContext(BookingContext);
  const { date, time } = booking;

  return (
    <Box
      display={!mobile && 'flex'}
      sx={{
        alignItems: 'center',
        gap: '1em',
      }}
    >
      <Box
        sx={{
          margin: '0.5em 1em',
          minWidth: ['200px', '260px', '360px'],
        }}
      >
        <Text children={date.format('DD/MM/YYYY')} date />
      </Box>

      {!mobile && (
        <Divider
          orientation="vertical"
          variant="middle"
          sx={{ backgroundColor: 'orange' }}
          flexItem
        />
      )}

      {
        <Box
          sx={({ palette }) => ({
            margin: mobile && '0.5em 1em',
          })}
        >
          <Text children={time} />
        </Box>
      }
    </Box>
  );
}
