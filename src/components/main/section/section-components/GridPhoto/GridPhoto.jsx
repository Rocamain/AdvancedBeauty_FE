import { Box } from '@mui/material';
import Wrapper from 'components/shared/Wrapper.jsx';
import ImageListItem, {
  imageListItemClasses,
} from '@mui/material/ImageListItem';

export default function GridPhoto({ photos }) {
  return (
    <Wrapper>
      <Box
      // sx={{ maxWidth: '900px', marginInline: 'auto' }}
      >
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
          {photos.map(({ url, formats, alternativeText }, index) => (
            <ImageListItem key={index} sx={{ borderRadius: '125px' }}>
              <img
                loading="lazy"
                width="1024"
                height="768"
                src={url}
                alt={alternativeText}
                srcSet={`${formats.large} 1024w, ${formats.medium} 980w, ${formats.small} 480w`}
                sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) 1024px, 100vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  width: '100%',
                  height: '100%',
                  borderRadius: '5px',
                }}
              />
            </ImageListItem>
          ))}
        </Box>
      </Box>
    </Wrapper>
  );
}
