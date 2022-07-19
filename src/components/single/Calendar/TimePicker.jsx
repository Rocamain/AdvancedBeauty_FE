import useButtonSelected from 'hooks/useButtonSelected';
import { Button, Box } from '@mui/material';
import { filterHoursByTimeFrame } from 'components/single/Calendar/utils/';

export default function TimePicker({
  timeFrame,
  date,
  timesAvailable,
  handleClickTime,
}) {
  const { selected, handleSelector } = useButtonSelected({ timeFrame, date });

  const handleClick = (event) => {
    handleClickTime(event);
    handleSelector(event);
  };

  return (
    <Box
      display="grid"
      gap={1}
      justifyContent="center"
      gridTemplateColumns="repeat(auto-fill, minmax(min(4em, 100%), 1fr))"
      sx={{ marginBottom: '1em' }}
    >
      {timesAvailable &&
        filterHoursByTimeFrame({ timesAvailable, timeFrame }).map(
          (hour, index) => (
            <Box key={index}>
              <Button
                fullWidth={true}
                variant={
                  selected === hour || selected === 'all'
                    ? 'contained'
                    : 'outlined'
                }
                onClick={handleClick}
                color={'primary'}
                sx={{
                  fontSize: '1rem',
                  fontWeight: 900,
                }}
              >
                {hour}
              </Button>
            </Box>
          )
        )}
    </Box>
  );
}
