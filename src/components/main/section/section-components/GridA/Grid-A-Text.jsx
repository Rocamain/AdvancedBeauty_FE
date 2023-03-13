import { Grid, Box } from '@mui/material';
import Button from 'components/shared/Button';
import SectionTitle from 'components/shared/SectionTitle';
import Markdown from 'components/shared/MarkDown';

export default function GridAText({
  title,
  content,
  button,
  background,
  show,
}) {
  const showCards = show === 'cards';
  return (
    <Grid item xs={12} md={showCards ? 12 : 6} lg={6}>
      <Box
        sx={{
          p:
            background === 'none' || background === 'leaves'
              ? '0em 2em 0em 2em'
              : {
                  xs: background.includes('right')
                    ? '2.5em 2em 3.5em 0em'
                    : '2.5em 2em 3.5em 2em',
                  sm: '2.5em 2em 3.5em 2em',
                },
          display: { xs: 'flex', sm: 'block' },
          flexDirection: 'column',
        }}
      >
        <SectionTitle
          title={title}
          gridA
          cardA={background === 'none' ? true : undefined}
        />
        <Box sx={{ marginBottom: button && '1em' }}>
          <Markdown content={content} />
        </Box>
        {button && <Button {...button} value={title} />}
      </Box>
    </Grid>
  );
}
