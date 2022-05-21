import useNearScreen from 'hooks/useNearScreen';
import { Box } from '@mui/material';

import {
  Container,
  Wrapper,
  Grid as GridMain,
} from 'components/shared/styled/index.js';
import GridCards from 'components/models/gridA/GridCards';
import GridText from 'components/models/gridA/GridText';

export default function GridA({ id, data }) {
  const { fromRef, isNearScreen } = useNearScreen();

  return (
    <Box
      ref={fromRef}
      component={'section'}
      sx={{
        marginBottom: '22em',
      }}
    >
      {isNearScreen ? (
        <Container>
          <Wrapper>
            <GridMain>
              <GridText {...data} />
              <GridCards {...data} />
            </GridMain>
          </Wrapper>
        </Container>
      ) : null}
    </Box>
  );
}
