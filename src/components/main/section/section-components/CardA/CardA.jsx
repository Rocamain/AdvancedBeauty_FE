import useScrollTo from 'hooks/useScrollTo.js';
import { Box } from '@mui/material';
import { Card, Container } from './styled/index.js';
import { Wrapper, Image } from 'components/shared/styled';
import SectionTitle from 'components/shared/SectionTitle';
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
  isNearScreen,
}) {
  const { scrollRef } = useScrollTo({
    url: withLink?.URL,
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
              <Image
                url={photo.url}
                alt={photo.alternativeText}
                formats={photo.formats}
                componentType={'cardA'}
              />
            </Box>
          )}
        </Wrapper>
      </Box>
    </Container>
  );
}
export default CardA;
