import { Box, Typography } from '@mui/material';
import { ImageContainer, Divider } from 'components/shared/styled/index.js';
import { Container, Card, Title } from 'components/models/GridB/styled';

export default function GridB({ content, title, button, photo, cards, size }) {
  return (
    <Box>
      {title && (
        <>
          <Typography
            component="h2"
            variant="title"
            children={title}
            sx={{
              padding: ['0', '0', '1em 0'],
              paddingRight: '1em',
              marginBottom: '0.5em',
              textAlign: 'center',
            }}
          />
          <Divider type="center" />
        </>
      )}
      <Container size={size}>
        {cards.map(({ photo, title, content, tittle_color }, index) => {
          return (
            <Card key={index} size={size}>
              <ImageContainer src={photo.url} size={size} />
              {title && <Title children={title} color={tittle_color} />}
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
    </Box>
  );
}
