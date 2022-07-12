import { Box } from '@mui/material';
import { Container, Grid } from 'components/shared/styled/index.js';
import GridCards from 'components/models/GridA/GridCards';
import GridText from 'components/models/GridA/GridText';
import GridPhoto from 'components/models/GridA/GridPhoto';

export default function GridA({
  show,
  photoColumn,
  backgroundType,
  photo,
  ...data
}) {
  return (
    <Box
      sx={(theme) => ({
        mt:
          backgroundType === 'full'
            ? [theme.spacing(26), theme.spacing(34)]
            : '0 auto',
        mb:
          backgroundType === 'full'
            ? [theme.spacing(40), theme.spacing(48)]
            : '0 auto',
      })}
    >
      <Container background={backgroundType}>
        <Grid background={backgroundType} show={show} photoColumn={photoColumn}>
          <GridText {...data} />
          {show === 'cards'
            ? data.cards && <GridCards {...data} />
            : photo && <GridPhoto {...photo} columnOrder={photoColumn} />}
        </Grid>
      </Container>
    </Box>
  );
}
