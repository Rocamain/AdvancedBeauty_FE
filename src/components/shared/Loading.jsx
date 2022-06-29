import * as React from 'react';
import { CircularProgress, Box } from '@mui/material/';

export default function Loading() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        py: '4em',
        backgroundColor: 'yellow',
        minHeight: '100vh',
      }}
    >
      <CircularProgress size={40} color="secondary" />
    </Box>
  );
}
