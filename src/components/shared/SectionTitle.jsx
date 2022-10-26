import { Box, Typography } from '@mui/material';
import { Divider } from 'components/shared/styled/index.js';

export default function SectionTitle({ title, textJustify }) {
  return (
    <Box
      sx={{
        width: textJustify ? 'inherit' : ['90vw', '80vw', '65vw'],
        margin: '0 auto',
        marginBottom: '0.5em',
      }}
    >
      <Typography
        component="h2"
        variant="title"
        sx={{
          textAlign: textJustify ? textJustify : 'center',
        }}
      >
        {title}
        <Divider type={textJustify ? textJustify : 'center'} />
      </Typography>
    </Box>
  );
}
