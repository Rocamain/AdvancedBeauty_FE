import { Button, Box, IconButton } from '@mui/material';
import useButtonSelected from 'hooks/useButtonSelected';
import TimePicker from 'components/single/Calendar/TimePicker';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function TimeSelector({ date, timesAvailable }) {
  const { selected, handleSelector } = useButtonSelected({
    date,
    timesAvailable,
  });

  const handleClick = (event) => {
    const btnTimeFrameText = event.target.innerText;
    handleSelector(btnTimeFrameText);
  };

  return (
    <>
      <Box
        gap={4}
        display="flex"
        justifyContent="center"
        mb="2em"
        sx={{ width: 'inherit' }}
      >
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
      {timesAvailable && (
        <TimePicker timeFrame={selected} timesAvailable={timesAvailable} />
      )}
    </>
  );
}
