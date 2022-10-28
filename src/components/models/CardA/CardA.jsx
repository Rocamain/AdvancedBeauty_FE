import { Box } from '@mui/material';
import { Card, Image, Container } from './styled/index.js';
import { Wrapper } from 'components/shared/styled/index.js';
import SectionTitle from 'components/shared/SectionTitle.jsx';
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
            px: '2em',
            margin: bookingConfirmation && '0 auto',
            maxWidth: bookingConfirmation
              ? { xs: '00%', md: '100%' }
              : { xs: '100%', md: '50%' },
            position: { md: 'relative' },
            zIndex: '100',
          }}
        >
          <SectionTitle title={sectionTitle.title} grid={true} />
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

            {button && (
              <Button
                value={sectionTitle.title}
                {...button}
                marginTop="0.5em"
              />
            )}
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
