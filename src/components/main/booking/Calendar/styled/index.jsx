import { DateCalendar as MuiCalendar } from '@mui/x-date-pickers';
import { Button, Grid as MuiGrid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';

const GridContainer = styled((props) => (
  <MuiGrid {...props} container justifyContent='center' />
))(({ theme, props }) => {
  return {
    minWidth: 250,
    margin: '0 auto',
    marginBottom: '1em',
    [theme.breakpoints.up('md')]: {
      marginBottom: '3em',
    },
  };
});

const TimeAvailableBtn = styled((props) => {
  return <Button fullWidth color={'primary'} {...props} />;
})(({ theme, props }) => {
  return { fontSize: '1rem', fontWeight: 900 };
});

const CustomPickersDay = styled(({ ...props }) => {
  return <PickersDay {...props} disableRipple />;
})(({ theme }) => {
  return {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: '#656363e8',

    '& :hover': {
      backgroundColor: 'pink',
    },
    '.Mui-focusVisible': {
      color: 'red',
      backgroundColor: 'green',
    },
    '&.bank-holiday': {
      color: 'orange !important',
      fontWeight: 600,
    },
  };
});

export { GridContainer, TimeAvailableBtn, CustomPickersDay };
