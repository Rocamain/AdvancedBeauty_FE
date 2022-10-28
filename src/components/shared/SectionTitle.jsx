import { Box, Typography } from '@mui/material';
import { Divider } from 'components/shared/styled/index.js';

export default function SectionTitle({ title, grid }) {
  return (
    <Box
      sx={{
        padding: ['3em 0 0.5em 0', '3em 0 0.5em 0'],
      }}
    >
      <Typography
        component="h2"
        variant="title"
        sx={{
          textAlign: grid ? 'left' : 'center',
        }}
      >
        {title}
      </Typography>
      <Divider grid={grid && grid.toString()} />
    </Box>
  );
}
