import useNearScreen from 'hooks/useNearScreen';
import { Box } from '@mui/material';
import { Container, Grid } from 'components/shared/styled/index.js';
import GridCards from 'components/models/gridA/GridCards';
import GridText from 'components/models/gridA/GridText';
import GridPhoto from 'components/models/gridA/GridPhoto';

export default function GridA({ id, data }) {
  const { fromRef, isNearScreen } = useNearScreen();

  const { show, photoColumn, backgroundType, photo } = data;

  return (
    <Box
      ref={fromRef}
      component={'section'}
      sx={{
        margin: backgroundType === 'full' ? '25em auto 16em auto' : '0  auto',
      }}
    >
      {/* LAZY LOAD */}

      {isNearScreen ? (
        <Container background={backgroundType}>
          <Grid
            background={backgroundType}
            show={show}
            photoColumn={photoColumn}
          >
            <GridText {...data} />
            {show === 'cards'
              ? data.cards && <GridCards {...data} />
              : data.photo && (
                  <GridPhoto {...photo} columnOrder={photoColumn} />
                )}
          </Grid>
        </Container>
      ) : null}
    </Box>
  );
}
