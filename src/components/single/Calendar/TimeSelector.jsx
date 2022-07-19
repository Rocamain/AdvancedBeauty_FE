import { Button, Box, IconButton } from '@mui/material';
import useButtonSelected from 'hooks/useButtonSelected';
import TimePicker from 'components/single/Calendar/TimePicker';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export default function TimeSelector({
  date,
  timesAvailable,
  handleClickTime,
}) {
  const { selected, handleSelector } = useButtonSelected({ date });

  const handleClick = (event) => {
    handleSelector(event);
  };

  return (
    <>
      <Box gap={4} display="flex" justifyContent="center" mb="2em">
        <Button
          onClick={handleClick}
          variant={
            selected === 'all' || selected === 'morning'
              ? 'contained'
              : 'outlined'
          }
          color={'primary'}
        >
          Morning
        </Button>
        <Button
          onClick={handleClick}
          variant={selected === 'afternoon' ? 'contained' : 'outlined'}
        >
          Afternoon
        </Button>
        <Box sx={{ display: 'flex' }}>
          <IconButton children={<KeyboardArrowLeftIcon />} />
          <IconButton children={<KeyboardArrowRightIcon />} />
        </Box>
      </Box>
      <TimePicker
        date={date}
        timeFrame={selected}
        timesAvailable={timesAvailable}
        handleClickTime={handleClickTime}
      />
    </>
  );
}
