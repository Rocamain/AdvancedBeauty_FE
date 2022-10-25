import { Typography, Grid, Box } from '@mui/material';
import Button from 'components/shared/Button';
import { Divider } from 'components/shared/styled';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import style from 'styles/markdown-styles.module.css';

export default function GridText({
  sectionTitle,
  content,
  button,
  background,
}) {
  return (
    <Grid item component="div" xs={12} md={6}>
      <Box
        sx={{
          px: ['2em', '2em', '4em'],
          display: { xs: 'flex', sm: 'block' },
          flexDirection: 'column',
          paddingTop:
            background === 'none' ? [0, 0, '5m'] : ['2em', '5em', '5m'],
          paddingBottom: ['2em', '2em', '4em'],
        }}
      >
        <Box>
          <Typography
            component="h2"
            variant="title"
            children={sectionTitle.title}
          />
          <Divider />
          <ReactMarkdown
            className={style.reactMarkDownGridA}
            escapeHTML={true}
            remarkPlugins={[gfm]}
            children={content}
          />
          {button && <Button {...button} />}
        </Box>
      </Box>
    </Grid>
  );
}
