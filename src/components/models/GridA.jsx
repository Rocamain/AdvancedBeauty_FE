import useNearScreen from 'hooks/useNearScreen';
import { Box, Typography, Grid } from '@mui/material';

export default function GridA({ id, data }) {
  const { fromRef, isNearScreen } = useNearScreen();

  return (
    <Box
      ref={fromRef}
      component={'section'}
      sx={{
        marginBottom: '10vh',
        // backgroundColor: '#75c9cc',
      }}
    >
      {isNearScreen ? (
        <Box
          sx={{
            // maxHeight: 'calc(100% - 88px) !important',
            // overflow: 'auto',
            // display: 'block',
            margin: '-16% auto!important',
          }}
        >
          <Grid
            container
            rowSpacing={{ xs: 2, sm: 2, md: '0' }}
            // columnSpacing={{ md: 3 }}
            direction={'row'}
            // spacing={10}
            component="div"
            sx={{
              height: '100%',
              backgroundImage:
                'linear-gradient(90deg,#75c9cc 0%,#00bccc 100%)!important',
              backgroundColor: 'lightblue',
              // position: 'relative',

              // top: '-1em',
              // zIndex: 1000,
              maxWidth: '80vw',
              boxShadow: 'rgba(56, 21, 11, 0.09) 0px 50px 80px 0px',
            }}
          >
            <GridText data={data} />
            <GridCards data={data} />
          </Grid>
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
          padding: '3em 0',
          width: '90%',
          mx: 'auto',
        }}
      >
        <Typography component="h2" variant="title" children={data.title} />
        <Typography component="p" variant="gridText" children={data.content} />
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
      container={true}
      spacing={4}
    >
      <Grid item component="div" xs={12} sm={6} container={true} rowSpacing={3}>
        {data.cards.map(
          (card, index) =>
            index % 2 === 0 && (
              <Grid key={index} item>
                <Box
                  // elevation={24}
                  sx={{
                    backgroundColor: 'lightgoldenrodyellow',
                    padding: '2em',
                    alignItems: 'flex-start',
                  }}
                >
                  <Box sx={{ width: '5em' }}>
                    <Box
                      component="img"
                      src={card.photo.url}
                      sx={{ objectFit: 'cover', width: '100%' }}
                    />
                  </Box>
                  <Typography component="h2" variant="" children={card.title} />
                  <Typography
                    component="p"
                    variant=""
                    children={card.content}
                  />
                </Box>
              </Grid>
            )
        )}
      </Grid>
      <Grid item component="div" xs={12} sm={6} container={true} rowSpacing={3}>
        {data.cards.map(
          (card, index) =>
            index % 2 !== 0 && (
              <Grid key={index} item>
                <Box
                  // elevation={24}
                  sx={{
                    backgroundColor: 'lightgoldenrodyellow',
                    padding: '2em',
                  }}
                >
                  <Box sx={{ width: '5em' }}>
                    <Box
                      component="img"
                      src={card.photo.url}
                      sx={{
                        objectFit: 'cover',
                        width: '100%',
                        alignItems: 'flex-start',
                      }}
                    />
                  </Box>
                  <Typography component="h2" variant="" children={card.title} />
                  <Typography
                    component="p"
                    variant=""
                    children={card.content}
                  />
                </Box>
              </Grid>
            )
        )}
      </Grid>
    </Grid>
  );
};
