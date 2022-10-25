import { Box, Grid } from '@mui/material';

export default function GridPhoto({
  formats,
  columnOrder,
  alternativeText,
  background,
}) {
  const { small, medium } = formats;
  const shadowRight = Boolean(background.includes('right'));

  if (small)
    return (
      <Grid item component="div" xs={12} sm={12} md={6} lg={6} container={true}>
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
                ? columnOrder === 'right'
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
            loading="lazy"
            alt={alternativeText}
            src={small.url}
            sx={{
              width: {
                xs: 'calc(100%)',
                md:
                  columnOrder === 'second' ? 'calc(100% + 10vw)' : 'calc(100%)',
              },

              height: 'auto',
              margin: '0 auto',
              objectFit: 'contain',
              objectPosition: 'top',
              boxShadow: 'rgba(56, 21, 11, 0.19) 0px 50px 80px 0px',
              borderRadius: [0, '5px'],
              content: {
                md: `url(${small.url})`,
                lg: `url(${medium.url})`,
                xl: `url(${medium.url})`,
              },
            }}
          />
        </Box>
      </Grid>
    );
}
