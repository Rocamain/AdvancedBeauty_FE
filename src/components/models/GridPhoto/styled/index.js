import { Box, styled } from '@mui/material';

const Wrapper = styled((props) => (
  <Box
    component="div"
    sx={{ width: ['90%', '85%', '80%', '65%'] }}
    {...props}
  />
))(({ theme, type }) => {
  return {
    margin: '0 auto',
    padding: theme.spacing(6),
  };
});

export { Wrapper };
