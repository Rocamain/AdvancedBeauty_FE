import { Box } from '@mui/material/';

export default function Error({ error }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <h1>Error! {error.messsage}</h1>
    </Box>
  );
}
