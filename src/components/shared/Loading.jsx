import { CircularProgress, Box } from '@mui/material/';

export default function Loading() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <CircularProgress size={60} color="primary" sx={{}} />
    </Box>
  );
}
