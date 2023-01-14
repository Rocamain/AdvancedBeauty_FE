import { Grid, Box } from '@mui/material';
import Button from 'components/shared/Button';
import SectionTitle from 'components/shared/SectionTitle.jsx';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import style from 'styles/markdown-styles.module.css';

export default function GridAText({ title, content, button, background }) {
  return (
    <Grid item xs={12} md={6} lg={6}>
      <Box
        sx={{
          px: '2em',
          display: { xs: 'flex', sm: 'block' },
          flexDirection: 'column',
          paddingBottom: ['2em', '2em', '4em'],
        }}
      >
        <SectionTitle
          title={title}
          grid
          cardA={background === 'none' && 'true'}
        />
        <ReactMarkdown
          className={style.reactMarkDownGridA}
          escapeHTML
          remarkPlugins={[gfm]}
          children={content}
        />
        {button && <Button {...button} value={title} />}
      </Box>
    </Grid>
  );
}
