import { Box } from '@mui/material';

export default function GridPhoto({ photos }) {
  return (
    <Box
      display="flex"
      sx={{
        width: ['100%', '80%', '100%', '80%'],
        margin: '0 auto',
        gap: ['6em', '6em', '2.5em', '3.5em'],
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {photos.map(({ url, alternativeText, formats, ...rest }, index) => {
        const { small, medium, large } = formats;

        return (
          <Box
            key={index}
            sx={{
              width: ['100%', '500px', '450px', '550px'],
              height: ['auto', 'auto', '300px', '350px'],
            }}
          >
            <Box
              component="img"
              alt={alternativeText}
              loading="lazy"
              src={small.url}
              sx={{
                content: {
                  sm: `url(${small.url})`,
                  md: `url(${medium.url})`,
                  lg: `url(${large.url})`,
                },
                width: '100%',
                height: '100%',
                borderRadius: '5px',
                objectFit: 'cover',
                boxShadow: 'rgba(56, 21, 11, 0.19) 0px 50px 80px 0px',
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
}
