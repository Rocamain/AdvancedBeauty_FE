import { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
export default function GridA({ id, data }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onChange = (entries) => {
      const el = entries[0];
      console.log(el.isIntersecting);
      if (el.isIntersecting) {
        setShow(true);
      }
    };
    const observer = new IntersectionObserver(onChange, {
      rootMargin: '100px',
    });
    observer.observe(document.getElementById(id));
  }, []);

  return (
    <Box id={id} component={'section'} style={{ marginBottom: '10vh' }}>
      {show ? (
        <Box
          sx={{
            backgroundColor: '#75C9CC',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Grid
            container
            rowSpacing={{ xs: 2, sm: 2, md: '0' }}
            columnSpacing={{ md: 3 }}
            direction={'row'}
            spacing={24}
            component="div"
            sx={{
              backgroundColor: 'pink',
              position: 'relative',
              margin: '-2em 0',
              top: '-1em',
              zIndex: 1000,
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
      container
      spacing={2}
    >
      <Grid
        item
        component="div"
        xs={12}
        sm={6}
        container
        rowSpacing={{ xs: 3, md: 5 }}
      >
        {data.cards.map(
          (card, index) =>
            index % 2 === 0 && (
              <Grid key={index} item>
                <Typography component="h2" variant="" children={card.title} />
                <Typography component="p" variant="" children={card.content} />
              </Grid>
            )
        )}
      </Grid>
      <Grid
        item
        component="div"
        xs={12}
        sm={6}
        container
        alignContent="flex-start"
        rowSpacing={{ xs: 3, md: 5 }}
      >
        {data.cards.map(
          (card, index, array) =>
            index % 2 !== 0 && (
              <Grid key={index} item>
                <Typography component="h2" variant="" children={card.title} />
                <Typography
                  component="p"
                  variant=""
                  children={card.content}
                />{' '}
              </Grid>
            )
        )}
      </Grid>
    </Grid>
  );
};
