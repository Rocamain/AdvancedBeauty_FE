import { Box, Grid } from '@mui/material';

export default function GridPhoto(photo) {
  return (
    <Grid item component="div" xs={12} sm={6} container={true}>
      <Box
        sx={(theme) => ({
          position: 'relative',
          top: theme.spacing(-5),
          right: photo.columnOrder === 'first' ? '10vw' : 0,
          zIndex: 200,
          minWidth: ['100vw', 'calc(100% + 10vw)'],
          overflowX: 'visible',
        })}
      >
        <Box
          component="img"
          src={photo.url}
          sx={{
            maxWidth: '100%',
            height: 'auto',
            objectFit: 'contain',
            boxShadow: 'rgba(56, 21, 11, 0.19) 0px 50px 80px 0px',
          }}
        />
      </Box>
    </Grid>
  );
}
