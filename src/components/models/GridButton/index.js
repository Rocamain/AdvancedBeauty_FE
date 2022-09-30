import React, { Suspense } from 'react';
import useNearScreen from 'hooks/useNearScreen.js';
import { Box } from '@mui/material';
import { Loading } from 'components/shared/index';
const GridButton = React.lazy(() =>
  import('components/models/GridButton/GridButton.jsx')
);

const LazyGridButton = ({ id, data, height }) => {
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '100px',
  });

  return (
    <Box
      component="section"
      id={id}
      ref={fromRef}
      sx={{ height: isNearScreen ? 'auto' : height, marginBottom: '10vh' }}
    >
      <Suspense fallback={<Loading />}>
        {isNearScreen && <GridButton {...data} />}
      </Suspense>
    </Box>
  );
};
export default LazyGridButton;
