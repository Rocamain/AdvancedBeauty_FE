import { Box } from '@mui/material';

export default function GridPhoto({ photos }) {
  return (
    <Box
      display="flex"
      sx={{
        width: '65%',
        margin: '0 auto',
        gap: '4em',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {photos.map(({ url, alternativeText }, index) => (
        <Box key={index} sx={{ width: '500px', height: '350px' }}>
          <Box
            component="img"
            alt={alternativeText}
            src={url}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              boxShadow: 'rgba(56, 21, 11, 0.19) 0px 50px 80px 0px',
            }}
          />
        </Box>
      ))}
    </Box>
  );
}
