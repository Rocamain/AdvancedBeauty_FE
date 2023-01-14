import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Typography, Grid, Box } from '@mui/material';
import { Card } from 'components/shared/styled/index.js';
import Icon from 'components/shared/Icon.jsx';

const GridACards = ({ cards }) => {
  const navigate = useNavigate();

  const handleClick = (e, url) => {
    navigate(url);
  };

  return (
    <Grid
      item
      xs={10}
      sm={10}
      md={6}
      lg={6}
      display="flex"
      gap="2em"
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
        display="flex"
        gap="2em"
        flexDirection="column"
        sx={{ width: { sm: '50%' } }}
      >
        {cards.map(({ cardLinkedTo, photo, title, content }, index) => {
          const isFirstCard = index === 0;
          const url = cardLinkedTo?.URL ? cardLinkedTo?.URL : '/Error';
          if (index % 2 === 0)
            return (
              <Card
                key={index}
                first={isFirstCard ? 'true' : null}
                onClick={(e) => handleClick(e, url)}
              >
                <Icon icon={photo} />
                <Typography
                  component="h4"
                  variant="h4"
                  children={title}
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
                  children={content}
                  color={isFirstCard && 'white !important'}
                />
              </Card>
            );
        })}
      </Box>

      {/* SECOND COLUMN */}

      <Box
        display="flex"
        gap="2em"
        flexDirection="column"
        sx={{ width: { sm: '50%' } }}
      >
        {cards.map(({ cardLinkedTo, photo, title, content }, index) => {
          const url = cardLinkedTo?.URL;

          return (
            index % 2 !== 0 && (
              <Card key={index} onClick={(e) => handleClick(e, url)}>
                <Icon icon={photo} />
                <Typography
                  component="h4"
                  variant="h4"
                  children={title}
                  sx={{
                    marginBottom: '0.7em',
                    color: '#8f5f25 !important',
                  }}
                />
                <Typography component="p" variant="p" children={content} />
              </Card>
            )
          );
        })}
      </Box>
    </Grid>
  );
};
export default GridACards;
