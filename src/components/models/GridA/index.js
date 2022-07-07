import React, { Suspense } from 'react';
import { Box } from '@mui/material';
import useNearScreen from 'hooks/useNearScreen.js';

const GridA = React.lazy(() => import('components/models/GridA/GridA.jsx'));

const LazyGridA = ({ id, data, height }) => {
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '100px',
  });

  return (
    <Box
      component="section"
      id={id}
      ref={fromRef}
      sx={{
        height: isNearScreen ? 'auto' : height,
        marginBottom: '10vh',
      }}
    >
      <Suspense fallback={<div style={{ height: '100vh' }} />}>
        {isNearScreen && <GridA {...data} />}
      </Suspense>
    </Box>
  );
};

export default LazyGridA;
