import { Typography, Grid, Box, Divider } from '@mui/material';
import Button from 'components/shared/Button';

export default function GridText({ title, content, ...data }) {
  const { button } = data;

  return (
    <Grid item component="div" xs={12} sm={12} md={5}>
      <Box
        sx={{ paddingRight: '2em', paddingBottom: { xs: '2em', md: '3em' } }}
      >
        <Box
          sx={{
            width: '100%',
            whiteSpace: 'pre-wrap',
            paddingBottom: { xs: '2em', md: '3em' },
            textAlign: 'justify',
          }}
        >
          <Typography component="h2" variant="title" children={title} />
          <Divider
            sx={{
              margin: '1.5em 0 2.5em 0',
              borderColor: '#ffd4a3',
              borderBottomWidth: 'medium',
              width: '60%',
            }}
          />
          <Typography component="p" variant="content" children={content} />
        </Box>
        <Button buttonText={button.buttonText} buttonTo={button.buttonTo} />
      </Box>
    </Grid>
  );
}
