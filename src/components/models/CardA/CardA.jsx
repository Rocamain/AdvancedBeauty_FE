import { Box, Typography } from '@mui/material';
import { Card, Image } from './styled/index.js';
import { Divider, Container, Wrapper } from 'components/shared/styled/index.js';
import Button from 'components/shared/Button.jsx';

export default function CardA({
  content,
  sectionTitle,
  button,
  photo,
  background,
  ...props
}) {
  return (
    <Container background={background}>
      <Wrapper>
        <Box
          sx={{
            margin: '0 auto',
            maxWidth: { xs: '80%', md: '50%' },
            position: { md: 'relative' },
            paddingTop: '3em',
            left: { md: '3vw' },
            zIndex: '100',
          }}
        >
          <Typography
            component="h2"
            variant="title"
            children={sectionTitle.title}
            sx={{
              position: 'relative',
              padding: ['0', '0', '1em 0'],
              paddingRight: '1em',
            }}
          />
          <Divider />
          <Card>
            <Typography
              component="h2"
              children={content}
              sx={{
                marginBottom: '1.5em',
                fontWeight: 600,
                letterSpacing: '0.09em',
                color: '#666',
                fontSize: '1.2rem',
                lineHeight: '1.5em',
                fontFamily: 'Abel',
              }}
            />
            <Button {...button} />
          </Card>
        </Box>
        <Box sx={{ width: '100%', paddingTop: { md: '5em', xl: '0' } }}>
          <Image src={photo.url} title="shop" alt={photo.alternativeText} />
        </Box>
      </Wrapper>
    </Container>
  );
}
