import React, { Suspense } from 'react';
import { Box } from '@mui/material';
import useNearScreen from 'hooks/useNearScreen.js';
const CardA = React.lazy(() => import('components/models/CardA/CardA.jsx'));

export default function LazyCardA({ id, data, path }) {
  const { fromRef, isNearScreen } = useNearScreen();

  return (
    <Box component="section" id={id} ref={fromRef}>
      <Suspense fallback={'loading...'}>
        {isNearScreen && <CardA {...data} />}
      </Suspense>
    </Box>
  );
}
