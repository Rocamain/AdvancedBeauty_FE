import { Typography, Grid, Box } from '@mui/material';
import { Card } from 'components/shared/styled/index.jsx';
import Icon from 'components/shared/Icon.jsx';

const GridACards = ({ cards }) => {
  const cardsFirstColumn = cards.filter((card, index) => index % 2 === 0);
  const cardsSecondColumn = cards.filter((card, index) => index % 2 !== 0);

  return (
    <Grid
      item
      xs={10}
      sm={10}
      lg={6}
      display='flex'
      gap='2em'
      sx={(theme) => ({
        margin: '0 auto',
        boxSizing: 'border-box',
        paddingRight: { md: '32px' },
        justifyContent: 'center',
        flexDirection: { xs: 'column', sm: 'row' },
        marginBottom: { sm: theme.spacing(-16) },
        paddingTop: { md: theme.spacing(5) },
      })}
    >
      {/* FIRST COLUMN */}
      <Box
        display='flex'
        gap='2em'
        flexDirection='column'
        sx={{ width: { sm: '50%' } }}
      >
        {cardsFirstColumn.map(
          ({ cardLinkedTo, photo, title, content }, index) => {
            const isFirstCard = index === 0;
            const url = cardLinkedTo?.URL ? cardLinkedTo?.URL : '/Error';

            return (
              <Card key={title} first={isFirstCard ? 'true' : null} to={url}>
                <Icon icon={photo} />
                <Typography
                  component='h4'
                  variant='h4'
                  children={title}
                  sx={{
                    marginBottom: '0.7em',
                    color: isFirstCard
                      ? 'white !important'
                      : '#8f5f25 !important',
                  }}
                />
                <Typography
                  component='p'
                  variant='p'
                  children={content}
                  color={isFirstCard && 'white !important'}
                />
              </Card>
            );
          }
        )}
      </Box>

      {/* SECOND COLUMN */}

      <Box
        display='flex'
        gap='2em'
        flexDirection='column'
        sx={{ width: { sm: '50%' } }}
      >
        {cardsSecondColumn.map(
          ({ cardLinkedTo, photo, title, content }, index) => {
            const url = cardLinkedTo?.URL;
            return (
              <Card key={title} to={url}>
                <Icon icon={photo} />
                <Typography
                  component='h4'
                  variant='h4'
                  children={title}
                  sx={{
                    marginBottom: '0.7em',
                    color: '#8f5f25 !important',
                  }}
                />
                <Typography component='p' variant='p' children={content} />
              </Card>
            );
          }
        )}
      </Box>
    </Grid>
  );
};
export default GridACards;
