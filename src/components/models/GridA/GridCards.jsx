import { useNavigate } from 'react-router-dom';
import { Typography, Grid } from '@mui/material';
import { Card } from 'components/shared/styled/index.js';
import Icon from 'components/shared/Icon.jsx';

const GridCards = ({ cards, onLoad }) => {
  const navigate = useNavigate();

  const handleClick = ({ path, title }) => {
    if (title) {
      const URLTo = `/${path}/#${title}`.replaceAll(' ', '-');
      return navigate(URLTo);
    }
    return navigate(`/${path}`);
  };

  return (
    <Grid
      item
      component="div"
      xs={10}
      sm={12}
      md={6}
      container
      alignItems="flex-start"
      sx={(theme) => ({
        margin: ' 0 auto',
        marginBottom: { md: theme.spacing(-16) },
        paddingTop: { md: theme.spacing(2) },
        gap: theme.spacing(4),
        justifyContent: 'center',
      })}
    >
      {/* FIRST COLUMN */}
      <Grid
        item
        component="div"
        xs={10}
        sm={5}
        md={5}
        container
        rowSpacing="2em"
      >
        {cards.map((card, index) => {
          const isFirstCard = index === 0;
          return (
            index % 2 === 0 && (
              <Grid key={index} item>
                <Card
                  button={true}
                  handleClick={() => handleClick(card.linkTo)}
                  isFirstCard={isFirstCard}
                >
                  <Icon
                    onLoad={onLoad}
                    showTitle={false}
                    iconFullSize={false}
                    icon={card.photo}
                  />
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
                  handleClick={() => handleClick(card.linkTo)}
                >
                  <Icon
                    showTitle={false}
                    iconFullSize={false}
                    icon={card.photo}
                  />
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
