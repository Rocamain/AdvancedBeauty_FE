import { Box, Grid } from '@mui/material';
import { Image } from 'components/shared/styled/index.js';

export default function GridAPhoto({
  url,
  formats,
  order,
  alternativeText,
  background,
}) {
  const shadowRight = Boolean(background.includes('right'));
  console.log(formats);
  return (
    <Grid item xs={12} sm={12} md={6} lg={6} container sx={{ display: 'flex' }}>
      <Box
        sx={(theme) => ({
          position: { md: 'relative' },
          top: {
            xs: 0,
            md: theme.spacing(-8),
          },
          zIndex: 200,
          width: {
            xs:
              shadowRight && order === 'second'
                ? 'calc(100% + 10vw)'
                : 'calc(100%)',
            sm: shadowRight ? 'calc(100% + 10vw)' : 'calc(100% - 4em)',
            md:
              shadowRight && order === 'second' ? 'calc(100% + 10vw)' : '100%',
          },
          margin: '0 auto',
        })}
      >
        <Image
          url={url}
          alt={alternativeText}
          formats={formats}
          componentType={'gridA'}
        />
      </Box>
    </Grid>
  );
}
