import { Box, Grid } from '@mui/material';

export default function GridPhoto({ photo }) {
  return (
    <Grid item component="div" xs={12} sm={6} container={true}>
      <Box
        sx={{
          position: 'relative',
          zIndex: 200,
          width: '100%',
          overflowX: 'visible',
        }}
      >
        <Box
          component="img"
          src={photo.url}
          sx={{
            maxWidth: '100%',
            height: 'auto',
            boxShadow: 'rgba(56, 21, 11, 0.09) 0px 50px 80px 0px',
          }}
        />
      </Box>
    </Grid>
  );
}
