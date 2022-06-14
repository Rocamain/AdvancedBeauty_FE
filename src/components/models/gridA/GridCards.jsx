import { Typography, Grid } from '@mui/material';
import { Card, ImageContainer } from 'components/shared/styled/index.js';
import { Link as LinkRouter } from 'react-router-dom';

const GridCards = ({ cards }) => {
  return (
    <Grid
      item
      component="div"
      xs={10}
      sm={12}
      md={5}
      container
      alignItems="flex-start"
      sx={{
        margin: ' 0 auto',
        marginBottom: '-14em',
        paddingTop: '2em',
        gap: '2em',
        justifyContent: 'center',
      }}
    >
      {/* FIRST COLUMN */}
      <Grid
        item
        component="div"
        xs={10}
        sm={5}
        md={5}
        container={true}
        rowSpacing="2em"
      >
        {cards.map((card, index) => {
          const isFirstCard = index === 0;

          return (
            index % 2 === 0 && (
              <Grid key={index} item>
                <LinkRouter
                  style={{
                    textDecoration: 'none',
                  }}
                  to={`Services-and-Fares/#${card.title}`}
                >
                  <Card isFirstCard={isFirstCard}>
                    <ImageContainer src={card.photo.url} size="Big" />

                    <Typography
                      component="h4"
                      variant="h4"
                      children={card.title}
                      sx={{
                        marginBottom: '0.7em',
                        color: isFirstCard
                          ? 'white !important'
                          : '#8f5f25 !important',
                      }}
                    />
                    <Typography
                      component="p"
                      variant="p"
                      children={card.content}
                    />
                  </Card>
                </LinkRouter>
              </Grid>
            )
          );
        })}
      </Grid>

      {/* SECOND COLUMN */}

      <Grid
        item
        component="div"
        xs={10}
        sm={5}
        md={5}
        container={true}
        rowSpacing="2em"
      >
        {cards.map((card, index) => {
          return (
            index % 2 !== 0 && (
              <Grid key={index} item>
                <LinkRouter
                  style={{ textDecoration: 'none' }}
                  to={`Services-and-Fares/#${card.title}`}
                >
                  <Card>
                    <ImageContainer src={card.photo.url} size="Big" />
                    <Typography
                      component="h4"
                      variant="h4"
                      children={card.title}
                      sx={{
                        marginBottom: '0.7em',
                        color: '#8f5f25 !important',
                      }}
                    />
                    <Typography
                      component="p"
                      variant="p"
                      children={card.content}
                    />
                  </Card>
                </LinkRouter>
              </Grid>
            )
          );
        })}
      </Grid>
    </Grid>
  );
};
export default GridCards;
