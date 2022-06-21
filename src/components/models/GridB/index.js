import React, { Suspense } from 'react';
import useNearScreen from 'hooks/useNearScreen.js';
import { Box } from '@mui/material';
const GridB = React.lazy(() => import('components/models/GridB/GridB.jsx'));

export default function LazyGridB({ id, data, path }) {
  const { fromRef, isNearScreen } = useNearScreen();

  return (
    <Box
      component="section"
      id={id}
      ref={fromRef}
      sx={{
        marginBottom: '2em',
      }}
    >
      <Suspense fallback={'loading...'}>
        {isNearScreen && <GridB {...data} />}
      </Suspense>
    </Box>
  );
}
