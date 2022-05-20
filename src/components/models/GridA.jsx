import useNearScreen from 'hooks/useNearScreen';
import { Box, Typography, Grid, Divider } from '@mui/material';

export default function GridA({ id, data }) {
  const { fromRef, isNearScreen } = useNearScreen();

  return (
    <Box
      ref={fromRef}
      component={'section'}
      sx={{
        margin: '15vh auto',
      }}
    >
      {isNearScreen ? (
        <Box
          sx={{
            width: '100%',
            backgroundImage:
              'linear-gradient(90deg,#75c9cc 0%,#00bccc 100%)!important',
            display: 'inline-block',
            margin: '0 auto',
          }}
        >
          <Box sx={{ width: '80%', margin: '-7em auto' }}>
            <Grid
              container
              direction={'row'}
              component="div"
              sx={{
                height: '100%',
                backgroundColor: '#F4F9FC',
                margin: '0 auto',
                padding: '2em',
                boxShadow: 'rgba(56, 21, 11, 0.09) 0px 50px 80px 0px',
              }}
            >
              <GridText data={data} />
              <GridCards data={data} />
            </Grid>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
}

const GridText = ({ data }) => {
  return (
    <Grid item component="div" xs={12} sm={12} md={6}>
      <Box
        sx={{
          width: '100%',
          whiteSpace: 'pre-wrap',
          mx: 'auto',
          padding: '3em 0',
          textAlign: 'justify',
        }}
      >
        <Typography component="h2" variant="title" children={data.title} />
        <Divider
          sx={{
            margin: '1.5em 0 1.5em 0',
            borderColor: '#ffd4a3',
            borderBottomWidth: 'medium',
            width: '60%',
          }}
        />
        <Typography component="p" variant="content" children={data.content} />
      </Box>
    </Grid>
  );
};

const GridCards = ({ data }) => {
  return (
    <Grid
      item
      component="div"
      xs={12}
      sm={12}
      md={6}
      lg={6}
      container
      alignItems="flex-start"
      columnSpacing={1}
      rowSpacing={{ xs: 3, md: 5 }}
    >
      <Grid item component="div" xs={12} sm={6} container={true} rowSpacing={2}>
        {data.cards.map(
          (card, index) =>
            index % 2 === 0 && (
              <Grid key={index} item>
                <Box sx={{ width: '100%', margin: '0 auto' }}>
                  <Box
                    sx={{
                      backgroundColor: 'red',
                      borderRadius: '5px',
                      alignItems: 'flex-start',
                      padding: '2em 1em',
                    }}
                  >
                    <Box
                      sx={{
                        width: '70%',
                        maxWidth: '7em',
                        margin: '0 auto',
                        marginBottom: '1em',
                      }}
                    >
                      <Box
                        component="img"
                        src={card.photo.url}
                        sx={{
                          objectFit: 'cover',
                          width: '100%',

                          height: 'auto',
                        }}
                      />
                    </Box>

                    <Typography
                      component="h1"
                      variant="h4"
                      children={card.title}
                      sx={{ marginBottom: '0.7em', color: 'yellow' }}
                    />
                    <Typography
                      component="p"
                      children={card.content}
                      style={{ whiteSpace: 'pre-wrap' }}
                    />
                  </Box>
                </Box>
              </Grid>
            )
        )}
      </Grid>
      <Grid item component="div" xs={12} sm={6} container={true} rowSpacing={2}>
        {data.cards.map(
          (card, index) =>
            index % 2 !== 0 && (
              <Grid key={index} item>
                <Box sx={{ width: '100%', margin: '0 auto' }}>
                  <Box
                    sx={{
                      backgroundColor: 'red',
                      borderRadius: '5px',
                      alignItems: 'flex-start',
                      padding: '2em 1em',
                    }}
                  >
                    <Box
                      sx={{
                        width: '70%',
                        maxWidth: '7em',
                        margin: '0 auto',
                        marginBottom: '1em',
                      }}
                    >
                      <Box
                        component="img"
                        src={card.photo.url}
                        sx={{
                          objectFit: 'cover',
                          width: '100%',

                          height: 'auto',
                        }}
                      />
                    </Box>

                    <Typography
                      component="h1"
                      variant="h4"
                      children={card.title}
                      sx={{ marginBottom: '0.7em', color: 'yellow' }}
                    />
                    <Typography
                      component="p"
                      children={card.content}
                      style={{ whiteSpace: 'pre-wrap' }}
                    />
                  </Box>
                </Box>
              </Grid>
            )
        )}
      </Grid>
    </Grid>
  );
};
