import { Box, Typography } from '@mui/material';
import { Card, Image } from './styled/index.js';
import { Divider, Container, Wrapper } from 'components/shared/styled/index.js';
import Button from 'components/shared/Button.jsx';

export default function CardA({
  bookingConfirmation = false,
  confirmationMsg,
  content,
  sectionTitle,
  button,
  photo,
  background,
}) {
  return (
    <Box sx={{ maxWidth: ['90vw', '80vw', '65vw'], margin: '0 auto' }}>
      <Container background={background}>
        <Wrapper>
          <Box
            sx={{
              margin: '0 auto',
              maxWidth: bookingConfirmation
                ? { xs: '90%', sm: '70%', md: '75%' }
                : { xs: '90%', sm: '75%', md: '50%' },
              position: { md: 'relative' },
              left: bookingConfirmation ? undefined : { md: '3vw' },
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
            {/* {confirmationMsg && <Box children={confirmationMsg} />} */}
            <Card>
              <Box
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
              {photo && <Button {...button} />}
            </Card>
          </Box>
          {photo && (
            <Box sx={{ width: '100%', paddingTop: { md: '5em', xl: '0' } }}>
              <Image
                src={photo.url}
                formats={photo?.formats}
                alt={photo.alternativeText}
              />
            </Box>
          )}
        </Wrapper>
      </Container>
    </Box>
  );
}
