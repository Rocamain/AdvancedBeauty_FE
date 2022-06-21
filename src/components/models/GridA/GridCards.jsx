import { useNavigate } from 'react-router-dom';
import { Typography, Grid } from '@mui/material';
import { Card, ImageContainer } from 'components/shared/styled/index.js';

const GridCards = ({ cards }) => {
  let navigate = useNavigate();

  const handleClick = (buttonTo) => {
    navigate(`/${buttonTo}`, { replace: true });
  };

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
                <Card
                  button={true}
                  handleClick={() => handleClick(card.page)}
                  isFirstCard={isFirstCard}
                >
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
                <Card
                  button={true}
                  buttonTo={card.page}
                  handleClick={handleClick}
                >
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
              </Grid>
            )
          );
        })}
      </Grid>
    </Grid>
  );
};
export default GridCards;
