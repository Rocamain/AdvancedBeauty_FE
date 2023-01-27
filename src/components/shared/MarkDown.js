import { Typography, Box } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

export default function MarkDown({ content, carousel = false, gridB = false }) {
  return (
    <ReactMarkdown
      escapeHTML
      remarkPlugins={[gfm]}
      children={content}
      components={{
        p: ({ node, ...props }) => (
          <Typography
            variant={carousel ? 'carouselCardParagraph' : 'p'}
            component="p"
            {...props}
            sx={{ marginBottom: gridB ? 0 : '1em' }}
          />
        ),
        h1: ({ node, ...props }) => (
          <Typography
            variant={carousel ? 'carouselCardHeadOne' : 'h4'}
            component={node.tagName}
            {...props}
            sx={{ marginBottom: gridB ? 0 : '1.2em' }}
          />
        ),
        h2: ({ node, ...props }) => (
          <Typography
            variant={carousel ? 'carouselCardHeadOne' : 'h5'}
            component={node.tagName}
            {...props}
            sx={{ marginBottom: gridB ? 0 : '1.2em' }}
          />
        ),
        h3: ({ node, ...props }) => (
          <Typography
            variant={carousel ? 'carouselCardHeadTwo' : 'h5'}
            component={node.tagName}
            {...props}
            sx={{ marginBottom: gridB ? 0 : '1.1em' }}
          />
        ),
        h4: ({ node, ...props }) => (
          <Typography
            variant={carousel ? 'carouselCardHeadTwo' : 'h5'}
            component={node.tagName}
            {...props}
            sx={{ marginBottom: gridB ? 0 : '1.1em' }}
          />
        ),
        h5: ({ node, ...props }) => (
          <Typography
            variant={carousel ? 'carouselCardHeadTree' : 'h6'}
            component={node.tagName}
            {...props}
            sx={{ marginBottom: gridB ? 0 : '1em' }}
          />
        ),
        h6: ({ node, ...props }) => (
          <Typography
            variant={carousel ? 'carouselCardHeadTree' : 'h6'}
            component={node.tagName}
            {...props}
            sx={{ marginBottom: gridB ? 0 : '1em' }}
          />
        ),
        ol: ({ node, children, ...props }) => (
          <ol children={children} style={{ marginBottom: gridB ? 0 : '1em' }} />
        ),
        ul: ({ node, children, ...props }) => {
          return (
            <ul
              children={children}
              style={{ marginBottom: gridB ? 0 : '1em' }}
            />
          );
        },
        li: ({ node, ordered, checked, index, children, ...props }) => {
          return (
            <Typography
              variant={carousel ? 'carouselCardParagraph' : 'p'}
              component={node.tagName}
              index={index}
              children={children}
              sx={{ marginBottom: gridB ? '0' : '1em' }}
            />
          );
        },
        a: ({ node, ...props }) => {
          return (
            <Box
              component={node.tagName}
              variant={carousel ? 'carouselCardParagraph' : 'p'}
              {...props}
              sx={{
                marginBottom: '1em',
                color: 'primary.main',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            />
          );
        },
        img: ({ node, ...props }) => {
          return (
            <Box
              component="img"
              width={['90%', '50%']}
              height="auto"
              {...props}
              sx={{
                display: 'block',
                margin: '1em 0',
                marginInline: 'auto',
                marginBottom: '1em',
                maxWidth: '100%',
                height: 'auto',

                borderRadius: '5px',
              }}
            />
          );
        },
      }}
    />
  );
}
