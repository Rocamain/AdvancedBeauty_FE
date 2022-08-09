import { Box, Grid } from '@mui/material';

export default function GridPhoto({ url, columnOrder, alternativeText }) {
  return (
    <Grid item component="div" xs={12} sm={6} md={4} container={true}>
      <Box
        sx={(theme) => ({
          position: 'relative',
          top: theme.spacing(-5),
          right: columnOrder === 'first' ? '10vw' : 0,
          zIndex: 200,
          minWidth: ['100vw', 'calc(100% + 10vw)'],
        })}
      >
        <Box
          component="img"
          alt={alternativeText}
          src={url}
          sx={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
            boxShadow: 'rgba(56, 21, 11, 0.19) 0px 50px 80px 0px',
          }}
        />
      </Box>
    </Grid>
  );
}
