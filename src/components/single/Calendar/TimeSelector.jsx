import { useContext, useEffect } from 'react';
import { BookingContext } from 'context/BookingContext';
import { Button, Box } from '@mui/material';
import useButtonSelected from 'hooks/useButtonSelected';
import useMediaQuery from '@mui/material/useMediaQuery';
import TimePicker from 'components/single/Calendar/TimePicker';

export default function TimeSelector({ date, availableTimes }) {
  const { selected, handleSelector } = useButtonSelected({
    date,
    availableTimes,
  });
  const { setBooking, booking } = useContext(BookingContext);

  const handleClick = (event) => {
    const btnTimeFrameText = event.target.innerText;
    handleSelector(btnTimeFrameText);
  };

  const smallPhone = useMediaQuery('(max-width:460px)');
  useEffect(() => {
    if (selected !== 'all') {
      setBooking({ ...booking, bookingStep: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <Box sx={{ pt: '10px' }}>
      <Box
        gap={[1, 4, 1]}
        display="flex"
        justifyContent={['center', 'center', 'center', 'space-between']}
        mb="2em"
      >
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
            ':hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.14)',
              fontWeight: 600,
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
            ':hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.14)',
              fontWeight: 600,
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
