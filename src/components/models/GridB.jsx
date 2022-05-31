import useNearScreen from 'hooks/useNearScreen';
import { Box, Typography } from '@mui/material';
import { ImageContainer } from 'components/shared/styled/index.js';
import { Container, Card, Title } from 'components/models/GridB/styled';

export default function GridB({ id, path, data }) {
  const { content, title, button, photo, cards, size } = data;

  const { fromRef, isNearScreen } = useNearScreen();

  return (
    <Box
      ref={fromRef}
      component={'section'}
      sx={{
        margin: '5em auto',
      }}
    >
      {isNearScreen && (
        <Container size={size}>
          {cards.map(({ photo, title, content, tittle_color }, index) => {
            return (
              <Card key={index} size={size}>
                <ImageContainer src={photo.url} />
                <Title children={title} color={tittle_color} />
                <Typography
                  component="p"
                  variant="p"
                  children={content}
                  sx={{
                    textAlign: 'center',
                    marginBottom: '1.5em',
                  }}
                />
              </Card>
            );
          })}
        </Container>
      )}
    </Box>
  );
}
