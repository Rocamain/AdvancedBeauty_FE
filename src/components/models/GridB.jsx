import useNearScreen from 'hooks/useNearScreen';
import { Box, Typography } from '@mui/material';
import { ImageContainer } from 'components/shared/styled/index.js';

export default function GridB({ id, path, data }) {
  const { content, title, button, photo, cards } = data;

  const { fromRef, isNearScreen } = useNearScreen();

  return (
    <Box
      ref={fromRef}
      component={'section'}
      sx={{
        margin: '12em auto',
      }}
    >
      {isNearScreen && (
        <Box
          sx={{
            width: '80%',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))',
            alignItems: 'flexStart',

            gap: '0 1em',
          }}
        >
          {cards.map(({ photo, title, content }, index) => (
            <Box key={index} component="div">
              <Box
                component="div"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gridColumnEnd: (index = 2 ? 'auto' : null),
                }}
              >
                <ImageContainer src={photo.url} />
                <Typography
                  component="h4"
                  variant="h4"
                  children={title}
                  sx={{
                    padding: ['0', '0', '1em 0'],
                    paddingRight: '1em',
                    marginBottom: '0.5em',
                    display: 'inline-block',
                    textAlign: 'center',
                  }}
                />
                <Typography
                  component="p"
                  variant="p"
                  children={content}
                  sx={{
                    textAlign: 'center',
                    marginBottom: '1.5em',
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
