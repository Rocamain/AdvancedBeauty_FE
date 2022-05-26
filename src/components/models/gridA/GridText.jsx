import { getMarkdownText } from '../../../marked/markedParser';
import { Typography, Grid, Box } from '@mui/material';
import Button from 'components/shared/Button';
import { Divider } from 'components/shared/styled';

export default function GridText({ title, content, ...data }) {
  const { button, show, photoColumn } = data;

  return (
    <Grid item component="div" xs={12} sm={6}>
      <Box
        sx={{
          width: '100%',
          paddingBottom: '3em',
        }}
      >
        <Typography component="h2" variant="title" children={title} />
        <Divider />
        <Typography
          component="div"
          variant="content"
          dangerouslySetInnerHTML={getMarkdownText(content)}
        />
      </Box>
      <Button buttonText={button.buttonText} buttonTo={button.buttonTo} />
    </Grid>
  );
}
