import { Box, Typography } from '@mui/material';
import { ImageContainer, Divider } from 'components/shared/styled/index.js';
import { Container, Card, Title } from 'components/models/GridB/styled';

export default function GridB({ sectionTitle, button, title, cards, size }) {
  return (
    <Box>
      {sectionTitle && (
        <Box
          sx={{
            marginBottom: ['6em', '5em', '10em'],
            maxWidth: ['90vw', '80vw', '65vw'],
            margin: '0 auto',
          }}
        >
          <Typography
            component="h2"
            variant="title"
            children={sectionTitle.title}
            sx={{
              textAlign: 'center',
            }}
          />
          <Divider type="center" />
        </Box>
      )}
      <Container size={size}>
        {cards.map(
          (
            {
              icon,
              title,
              content,
              showTitle,
              titleColor,
              subTitle,
              page,
              isButton,
            },
            index
          ) => {
            return (
              <Card key={index} size={size}>
                {icon && <ImageContainer src={icon.url} size={size} />}
                {showTitle && <Title children={title} color={titleColor} />}

                {subTitle && (
                  <Typography
                    component="p"
                    variant="p"
                    children={subTitle}
                    sx={{
                      fontWeight: 700,
                    }}
                  />
                )}
                {content && (
                  <Typography
                    component="p"
                    variant="p"
                    children={content}
                    sx={{
                      textAlign: 'center',
                      marginBottom: '1.5em',
                    }}
                  />
                )}
              </Card>
            );
          }
        )}
      </Container>
    </Box>
  );
}
