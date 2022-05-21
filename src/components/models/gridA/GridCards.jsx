import { Typography, Grid } from '@mui/material';
import { Card, ImageContainer } from 'components/shared/styled/index.js';

const GridCards = ({ cards }) => {
  return (
    <Grid
      item
      component="div"
      xs={12}
      sm={12}
      md={7}
      container
      alignItems="flex-start"
      columnSpacing={4}
      rowSpacing={{ xs: 3, md: 5 }}
      sx={{ marginBottom: '-14em' }}
    >
      {/* FIRST COLUMN */}
      <Grid item component="div" xs={12} sm={6} container={true} rowSpacing={4}>
        {cards.map(
          (card, index) =>
            index % 2 === 0 && (
              <Grid key={index} item>
                <Card>
                  <ImageContainer src={card.photo.url} />

                  <Typography
                    component="h1"
                    variant="h4"
                    children={card.title}
                    sx={{ marginBottom: '0.7em' }}
                  />
                  <Typography
                    component="p"
                    children={card.content}
                    style={{ whiteSpace: 'pre-wrap' }}
                  />
                </Card>
              </Grid>
            )
        )}
      </Grid>

      {/* SECOND COLUMN */}

      <Grid item component="div" xs={12} sm={6} container={true} rowSpacing={4}>
        {cards.map(
          (card, index) =>
            index % 2 !== 0 && (
              <Grid key={index} item>
                <Card>
                  <ImageContainer src={card.photo.url} />

                  <Typography
                    component="h1"
                    variant="h4"
                    children={card.title}
                    sx={{ marginBottom: '0.7em', color: 'yellow' }}
                  />
                  <Typography
                    component="p"
                    variant="content"
                    children={card.content}
                    style={{ whiteSpace: 'pre-wrap' }}
                  />
                </Card>
              </Grid>
            )
        )}
      </Grid>
    </Grid>
  );
};
export default GridCards;
