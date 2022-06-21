import React, { Suspense } from 'react';
import { Box } from '@mui/material';
import useNearScreen from 'hooks/useNearScreen.js';
const GridA = React.lazy(() => import('components/models/GridA/GridA.jsx'));

const LazyGridA = React.forwardRef(({ id, data, path }, ref) => {
  const { fromRef, isNearScreen } = useNearScreen('100px', path);

  return (
    <Box
      component="section"
      id={id.replaceAll(' ', '-')}
      ref={ref}
      sx={{
        marginBottom: '10em',
      }}
    >
      <div ref={fromRef}>
        <Suspense fallback={'loading...'}>
          {true && <GridA {...data} />}
        </Suspense>
      </div>
    </Box>
  );
});

export default LazyGridA;
