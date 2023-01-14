import { Box, Grid } from '@mui/material';

export default function GridAPhoto({
  formats,
  order,
  alternativeText,
  background,
}) {
  const { small, medium } = formats;
  const shadowRight = Boolean(background.includes('right'));

  return (
    <Grid item component="div" xs={12} sm={12} md={6} lg={6} container>
      <Box
        sx={(theme) => ({
          position: 'relative',
          top: {
            xs: 0,
            md: theme.spacing(-8),
          },
          zIndex: 200,
          minWidth: {
            xs: shadowRight ? 'calc(100% + 10vw)' : 'calc(90%)',
            sm: shadowRight ? 'calc(100% + 10vw)' : 'calc(80%)',
            md: shadowRight
              ? order === 'right'
                ? 'calc(100% + 10vw)'
                : 'calc(100% )'
              : background === 'none'
              ? 'calc(100% + 10vw)'
              : 'calc(100%)',
          },
          margin: '0 auto',
        })}
      >
        <Box
          component="img"
          // loading={isNearScreen && 'lazy'}
          alt={alternativeText}
          src={small.url}
          style={{ height: '200px !important' }}
          sx={{
            margin: '0 auto',
            objectFit: 'contain',
            objectPosition: 'top',
            boxShadow: 'rgba(56, 21, 11, 0.19) 0px 50px 80px 0px',
            borderRadius: [0, '5px'],
            // content: {
            //   md: `url(${small.url})`,
            //   lg: `url(${medium.url})`,
            //   xl: `url(${medium.url})`,
            // },
          }}
        />
      </Box>
    </Grid>
  );
}
