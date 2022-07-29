import { Button, Box, IconButton } from '@mui/material';
import useButtonSelected from 'hooks/useButtonSelected';
import useMediaQuery from '@mui/material/useMediaQuery';
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

  const smallPhone = useMediaQuery('(max-width:460px)');

  return (
    <Box>
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
        <Box sx={{ display: 'flex' }}>
          <IconButton children={<KeyboardArrowLeftIcon />} />
          <IconButton children={<KeyboardArrowRightIcon />} />
        </Box>
      </Box>
      {timesAvailable && (
        <TimePicker timeFrame={selected} timesAvailable={timesAvailable} />
      )}
    </Box>
  );
}
