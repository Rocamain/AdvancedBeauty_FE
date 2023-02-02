import { Box } from '@mui/material';
import ImageListItem, {
  imageListItemClasses,
} from '@mui/material/ImageListItem';

export default function GridPhoto({ photos }) {
  return (
    <Box sx={{ width: { sm: '80%' }, margin: '0 auto' }}>
      <Box
        sx={{
          display: 'grid',
          gap: '2.5em',
          justifyContent: 'center',
          gridTemplateColumns: {
            xs: 'repeat(auto-fit, minmax(300px, 1fr));',
            md: 'repeat(2,350px)',
            xl: 'repeat(2,500px)',
          },
          gridAutoRows: '1fr',
          [`& .${imageListItemClasses.root}`]: {
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        {photos.map(({ url, formats, alternativeText }, index) => {
          return (
            <ImageListItem key={index}>
              <Box
                component="img"
                loading="lazy"
                height={['320px', '450px', '340px', '350px', '380px']}
                width="100%"
                src={url}
                alt={alternativeText}
                srcSet={`${formats.medium.url} 1024w, ${formats.medium.url} 980w, ${formats.small.url} 480w`}
                sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) 1024px, 100vw"
                style={{
                  objectFit: 'cover',
                  maxWidth: '100%',
                  borderRadius: '5px',
                }}
              />
            </ImageListItem>
          );
        })}
      </Box>
    </Box>
  );
}
