import { Box, Typography } from '@mui/material';
import { Divider } from 'components/shared/styled/index.jsx';

export default function SectionTitle({ title, gridA, left }) {
  return (
    <Box
      sx={{
        padding: gridA ? '0 0 1.5em 0' : '0 0 4em 0',
      }}
    >
      <Typography
        component='h2'
        variant='sectionTitle'
        sx={{
          textAlign: gridA || left ? 'left' : 'center',
        }}
      >
        {title}
      </Typography>
      <Divider grid={gridA || left ? 'true' : undefined} />
    </Box>
  );
}
