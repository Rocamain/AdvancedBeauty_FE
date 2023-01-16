import { Box, Grid } from '@mui/material';
import { Image } from 'components/shared/styled';

export default function GridAPhoto({
  url,
  formats,
  order,
  url,
  alternativeText,
  background,
}) {
  const shadowRight = Boolean(background.includes('right'));
  console.log(formats);
  return (
    <Grid item xs={12} sm={12} md={6} container>
      <Box
        sx={(theme) => ({
          position: { md: 'relative' },
          top: {
            md: theme.spacing(-8),
          },
          marginBottom: shadowRight ? 0 : '3em',
          zIndex: 200,
          width: {
            xs: shadowRight ? 'calc(100% + 10vw)' : '90%',
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
