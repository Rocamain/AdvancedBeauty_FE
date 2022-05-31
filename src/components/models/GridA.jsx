import useNearScreen from 'hooks/useNearScreen';
import { Box } from '@mui/material';
import { Container, Wrapper, Grid } from 'components/shared/styled/index.js';
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
        margin: '12em auto',
      }}
    >
      {/* LAZY LOAD */}

      {isNearScreen ? (
        <Container background={backgroundType}>
          <Wrapper background={backgroundType}>
            <Grid
              background={backgroundType}
              show={show}
              photoColumn={photoColumn}
            >
              <GridText {...data} />
              {show === 'cards'
                ? data.cards && <GridCards {...data} />
                : data.photo && <GridPhoto {...{ photo }} />}
            </Grid>
          </Wrapper>
        </Container>
      ) : null}
    </Box>
  );
}
