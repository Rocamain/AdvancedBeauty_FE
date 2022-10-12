import { Box, Grid } from '@mui/material';

export default function GridPhoto({
  url,
  formats,
  columnOrder,
  alternativeText,
}) {
  const { small, medium, large } = formats;

  if (small)
    return (
      <Grid item component="div" xs={12} sm={12} md={5} lg={5} container={true}>
        <Box
          sx={(theme) => ({
            position: 'relative',
            top: [theme.spacing(-10), theme.spacing(-8)],
            right:
              columnOrder === 'first'
                ? { xs: '10vw', md: 0 }
                : { xs: '-10vw', md: 0 },
            zIndex: 200,
            width: { xs: '100%' },
            minWidth: { md: 'calc(100% + 10vw)' },
          })}
        >
          <Box
            component="img"
            loading="lazy"
            alt={alternativeText}
            src={large.url}
            srcSet={`${medium.url} 900w, ${small.url} 320w`}
            sizes="(min-width: 0px) and (max-width: 480px) 320px, (min-width: 481px) 1400px, 100vw"
            sx={{
              width: ['100%', '100%'],
              height: ['auto', '100%', '100%', 'auto'],
              maxHeight: '450px',
              objectFit: { xs: 'contain', md: 'cover' },
              objectPosition: 'top',
              boxShadow: 'rgba(56, 21, 11, 0.19) 0px 50px 80px 0px',
              borderRadius: '5px',
            }}
          />
        </Box>
      </Grid>
    );
}
