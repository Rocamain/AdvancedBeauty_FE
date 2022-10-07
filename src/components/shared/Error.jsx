import { Box, Typography } from '@mui/material/';

export default function Error({ error }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40vh',
      }}
    >
      <Typography component="h3" variant="h4" color="tertiary" bg="primary">
        Ooops it's been an Error! {error}
      </Typography>
    </Box>
  );
}
