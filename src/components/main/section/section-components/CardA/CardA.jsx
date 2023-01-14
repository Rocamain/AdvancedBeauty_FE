import useScrollTo from 'hooks/useScrollTo.js';
import { Box } from '@mui/material';
import { Card, Image, Container } from './styled/index.js';
import { Wrapper } from 'components/shared/styled/index.js';
import SectionTitle from 'components/shared/SectionTitle.jsx';
import Button from 'components/shared/Button.jsx';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import style from 'styles/markdown-styles.module.css';

function CardA({
  content,
  title,
  button,
  photo,
  backgroundType = 'none',
  withLink,
  marginTop,
  isNearScreen,
}) {
  const { scrollRef } = useScrollTo({
    url: withLink?.URL,
    marginTop,
    isNearScreen,
  });

  return (
    <Container background={backgroundType}>
      <Box ref={withLink?.URL && scrollRef}>
        <Wrapper>
          <Box
            sx={{
              maxWidth: { xs: '100%', md: '50%' },
              position: { md: 'relative' },
              zIndex: '100',
            }}
          >
            {title && <SectionTitle title={title} grid cardA />}
            <Card>
              <ReactMarkdown
                className={style.reactMarkDownGridA}
                escapeHTML
                remarkPlugins={[gfm]}
                children={content}
                style={{
                  marginBottom: '1em',
                  minWidth: '200px',
                }}
              />
              {button && <Button value={title} {...button} marginTop="0.5em" />}
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
      </Box>
    </Container>
  );
}
export default CardA;
