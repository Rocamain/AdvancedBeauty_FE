import React, { Suspense } from 'react';
import { Box } from '@mui/material';
import useNearScreen from 'hooks/useNearScreen.js';
const GridA = React.lazy(() => import('components/models/GridA/GridA.jsx'));

export default function LazyGridA({ id, data, path }) {
  const { fromRef, isNearScreen } = useNearScreen();

  return (
    <Box
      component="section"
      id={id}
      ref={fromRef}
      sx={{
        marginBottom: '10em',
      }}
    >
      <Suspense fallback={'loading...'}>
        {isNearScreen && <GridA {...data} />}
      </Suspense>
    </Box>
  );
}
