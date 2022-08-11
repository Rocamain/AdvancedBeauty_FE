import React, { Suspense } from 'react';
import useNearScreen from 'hooks/useNearScreen.js';
import { Box } from '@mui/material';

const GridB = React.lazy(() => import('components/models/GridB/GridB.jsx'));

const LazyGridB = ({ id, data, height }) => {
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '100px',
  });

  return (
    <Box
      component="section"
      id={id}
      ref={fromRef}
      sx={{ height: isNearScreen ? 'auto' : height, marginBottom: '20vh' }}
    >
      <Suspense fallback={<div style={{ height: '10vh' }} />}>
        {isNearScreen && <GridB {...data} />}
      </Suspense>
    </Box>
  );
};
export default LazyGridB;
