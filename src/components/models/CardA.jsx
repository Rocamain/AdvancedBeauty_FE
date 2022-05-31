import useNearScreen from 'hooks/useNearScreen';

import { Box, Typography } from '@mui/material';
import { Card, Image } from './CardA/styled/index.js';
import { Divider, Container, Wrapper } from 'components/shared/styled/index.js';
import Button from 'components/shared/Button.jsx';

export default function CardA({ data, id }) {
  const { content, title, button, photo } = data;
  const { fromRef, isNearScreen } = useNearScreen();

  return (
    <Box
      ref={fromRef}
      component={'section'}
      sx={{
        margin: '12em auto',
      }}
    >
      {/* LAZY LOAD */}

      {isNearScreen ? (
        <Container background="circles">
          <Wrapper flex>
            <Box
              sx={{
                maxWidth: { md: '50%' },
                position: { md: 'relative' },
                right: '-2.5em',

                zIndex: '100',
              }}
            >
              <Typography
                component="h2"
                variant="title"
                children={title}
                sx={{
                  padding: ['0', '0', '1em 0'],
                  paddingRight: '1em',
                  marginBottom: '0.5em',
                }}
              />

              <Card>
                <Divider />
                <Typography
                  component="h2"
                  variant="body2"
                  children={content}
                  sx={{
                    marginBottom: '1.5em',
                  }}
                />
                <Button {...button} />
              </Card>
            </Box>
            <Box>
              <Image
                src={photo.url}
                title="shop"
                alt={photo.alternativeText}
                srcSet={`${photo.formats?.large?.url} 1200w, ${photo.formats?.medium?.url} 980w, ${photo.formats?.small?.url} 480w`}
                sizes="(min-width: 0px) and (max-width: 480px) 85vw, (min-width: 481px) and (max-width: 980px) 95vw, (min-width: 981px) 60vw, 100vw"
              />
            </Box>
          </Wrapper>
        </Container>
      ) : null}
    </Box>
  );
}
