import { Box, Grid } from '@mui/material';
import { Image } from 'components/shared/styled';

export default function GridAPhoto({
  url,
  formats,
  order,
  alternativeText,
  background,
}) {
  const shadowRight = Boolean(background.includes('right'));

  return (
    <Grid item xs={12} sm={12} md={6} container>
      <Box
        sx={(theme) => ({
          position: { sm: 'relative' },
          top: {
            md: theme.spacing(-8),
          },
          marginBottom: shadowRight ? 0 : '3em',
          zIndex: 200,
          minWidth: {
            xs:
              shadowRight && order === 'second'
                ? 'calc(100% + 10vw)'
                : undefined,
            sm:
              shadowRight && order === 'second'
                ? 'calc(100% + 10vw)'
                : undefined,
            md:
              shadowRight && order === 'second'
                ? 'calc(100% + 5vw)'
                : undefined,
          },
          margin: { xs: '2em auto 0 auto', sm: '2em 2em 0 2em', md: 0 },

          width: {
            sm: !shadowRight ? '100%' : undefined,
            md: !shadowRight ? '100%' : undefined,
          },
        })}
      >
        <Image
          height={[340, 400, 340, 380, 430, 470]}
          width={{ lg: '100%' }}
          url={url}
          alt={alternativeText}
          formats={formats}
          componentType="gridA"
          shadowRight={shadowRight}
        />
      </Box>
    </Grid>
  );
}
