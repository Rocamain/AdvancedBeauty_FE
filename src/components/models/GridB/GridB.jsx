import useFetchData from 'hooks/useFetchData';
import { Loading } from 'components/shared/index';
import { Box, Typography } from '@mui/material';
import { Divider } from 'components/shared/styled/index.js';
import { Container, Card, Title } from 'components/models/GridB/styled';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import style from 'styles/markdown-styles.module.css';

export default function GridB({ path, id }) {
  const { data, loading } = useFetchData('strapi', {
    path,
    component: 'gridB',
    id: id,
  });

  if (loading) {
    return <Loading />;
  }
  const { title, size, cards } = data[0];
  return (
    <Box>
      {title && (
        <Box
          sx={{
            width: ['90vw', '80vw', '65vw'],
            margin: '0 auto',
            marginBottom: 'em',
          }}
        >
          <Typography
            component="h2"
            variant="title"
            children={title}
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
              iconFullSize,
            },
            index
          ) => {
            return (
              <Card key={index} size={size}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box
                    component="img"
                    loading="lazy"
                    alt={icon.alternativeText}
                    sx={{
                      maxWidth: {
                        xs: iconFullSize ? '90%' : '100px',
                        xl: iconFullSize ? '90%' : '128px',
                      },

                      height: {
                        xs: iconFullSize ? '90%' : '100px',
                        xl: iconFullSize ? '90%' : '128px',
                      },
                      objectFit: 'contain',
                      paddingBottom: showTitle ? '1.5em' : '1em',
                      content: {
                        xs: `url(${icon.url})`,
                      },
                    }}
                  />
                </Box>
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
                  <ReactMarkdown
                    className={style.reactMarkDownGridA}
                    escapeHTML={true}
                    remarkPlugins={[gfm]}
                    children={content}
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
