import React, { Suspense } from 'react';
import { Box } from '@mui/material';
import useNearScreen from 'hooks/useNearScreen.js';
const CardA = React.lazy(() => import('components/models/CardA/CardA.jsx'));

const LazyCardA = React.forwardRef(({ id, data, path }, ref) => {
  const { fromRef, isNearScreen } = useNearScreen();

  return (
    <Box component="section" id={id} ref={ref}>
      <div ref={fromRef}>
        <Suspense fallback={'loading...'}>
          {isNearScreen && <CardA {...data} />}
        </Suspense>
      </div>
    </Box>
  );
});

export default LazyCardA;
