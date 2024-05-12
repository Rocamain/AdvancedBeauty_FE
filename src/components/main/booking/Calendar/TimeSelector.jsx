import { useContext } from 'react';
import { BookingContext } from 'context/BookingContext.js';
import { Button, Box, useMediaQuery } from '@mui/material';
import useButtonSelected from 'hooks/useButtonSelected.js';
import TimePicker from 'components/main/booking/Calendar/TimePicker.jsx';

export default function TimeSelector() {
  const { booking } = useContext(BookingContext);
  const { date } = booking;
  const { selected, handleSelector } = useButtonSelected({ date });
  const smallPhone = useMediaQuery('(max-width:460px)', { noSsr: true });

  const handleClick = (event) => {
    const btnTimeFrameText = event.target.innerText;
    handleSelector(btnTimeFrameText);
  };

  return (
    <Box
      mb='0'
      sx={{
        pt: '10px',
        maxWidth: '95%',
        margin: '0 auto',
        minHeight: { sm: '180px' },
      }}
    >
      <Box gap={[1, 4, 1]} display='flex' justifyContent='center' mb='2em'>
        <Button
          onClick={handleClick}
          variant={
            selected === 'all' || selected === 'morning'
              ? 'contained'
              : 'outlined'
          }
          color={'primary'}
          size={smallPhone ? 'small' : 'big'}
          sx={{
            fontWeight: 600,
            ':hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.14)',
              fontWeight: 700,
            },
          }}
        >
          Morning
        </Button>
        <Button
          onClick={handleClick}
          variant={selected === 'afternoon' ? 'contained' : 'outlined'}
          size={smallPhone ? 'small' : 'big'}
          sx={{
            fontWeight: 600,
            ':hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.14)',
              fontWeight: 700,
            },
          }}
        >
          Afternoon
        </Button>
      </Box>

      <TimePicker timeFrame={selected} />
    </Box>
  );
}
