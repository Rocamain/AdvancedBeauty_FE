import { Button, Box } from '@mui/material';
import useButtonSelected from 'hooks/useButtonSelected';
import useMediaQuery from '@mui/material/useMediaQuery';
import TimePicker from 'components/single/Calendar/TimePicker';

export default function TimeSelector({ date, availableTimes }) {
  const { selected, handleSelector } = useButtonSelected({
    date,
    availableTimes,
  });

  const smallPhone = useMediaQuery('(max-width:460px)');

  const handleClick = (event) => {
    const btnTimeFrameText = event.target.innerText;
    handleSelector(btnTimeFrameText);
  };

  return (
    <Box sx={{ pt: '10px', maxWidth: '95%', margin: '0 auto' }}>
      <Box gap={[1, 4, 1]} display="flex" justifyContent="center" mb="2em">
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
