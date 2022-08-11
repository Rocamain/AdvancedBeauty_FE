import { Typography, Grid, Box } from '@mui/material';
import Button from 'components/shared/Button';
import { Divider } from 'components/shared/styled';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import style from './markdown-styles.module.css';

export default function GridText({ sectionTitle, content, button, show }) {
  const isPhoto = show === 'photo';

  return (
    <Grid
      item
      component="div"
      xs={12}
      sm={isPhoto && 6}
      md={isPhoto ? 8 : 5}
      lg={isPhoto ? 8 : 6}
    >
      <Box
        sx={{
          width: ['65%', '85%'],
          display: { xs: 'flex', sm: 'block' },
          flexDirection: 'column',
          mx: 'auto',
          paddingTop: ['3em', '5em'],
          paddingBottom: '3em',
        }}
      >
        <Typography
          component="h2"
          variant="title"
          children={sectionTitle.title}
        />
        <Divider />
        <ReactMarkdown
          className={style.reactMarkDown}
          escapeHTML={true}
          remarkPlugins={[gfm]}
          children={content}
        />
        {button && <Button {...button} />}
      </Box>
    </Grid>
  );
}
