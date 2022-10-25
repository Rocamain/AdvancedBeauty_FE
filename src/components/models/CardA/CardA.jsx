import { Box, Typography } from '@mui/material';
import { Card, Image, Container } from './styled/index.js';
import { Divider, Wrapper } from 'components/shared/styled/index.js';
import Button from 'components/shared/Button.jsx';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import style from 'styles/markdown-styles.module.css';

function CardA({
  bookingConfirmation = false,
  confirmationMsg,
  content,
  sectionTitle,
  button,
  photo,
  backgroundType,
}) {
  return (
    <Container backgroundType={backgroundType}>
      <Wrapper>
        <Box
          sx={{
            margin: '0 auto',
            maxWidth: bookingConfirmation
              ? { xs: '00%', md: '80%' }
              : { xs: '100%', md: '50%' },
            position: { md: 'relative' },
            zIndex: '100',
          }}
        >
          <Box sx={{ width: { md: '80%' }, margin: '0 auto' }}>
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
          </Box>
          {confirmationMsg && <Box component="p" children={confirmationMsg} />}
          <Card>
            <ReactMarkdown
              className={style.reactMarkDownGridA}
              escapeHTML={true}
              remarkPlugins={[gfm]}
              children={content}
              style={{
                marginBottom: '1em',
                minWidth: '200px',
              }}
            />

            {button && <Button {...button} marginTop="0.5em" />}
          </Card>
        </Box>
        {photo && (
          <Box
            sx={{
              display: { xs: 'flex', md: 'block' },
            }}
          >
            <Image formats={photo?.formats} alt={photo.alternativeText} />
          </Box>
        )}
      </Wrapper>
    </Container>
  );
}
export default CardA;
