import { Box, Typography } from '@mui/material/';

export default function NotFoundPage() {
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
        Page not found !!!
      </Typography>
    </Box>
  );
}
