import React, { Suspense } from 'react';
import useNearScreen from 'hooks/useNearScreen.js';
import { Box } from '@mui/material';
import { Error, Loading } from 'components/shared/index';
const GridB = React.lazy(() => import('components/models/GridB/GridB.jsx'));

const LazyGridB = React.forwardRef(({ id, data, path }, ref) => {
  const { fromRef, isNearScreen } = useNearScreen();

  return (
    <Box
      component="section"
      id={id}
      ref={ref}
      sx={{
        marginBottom: '2em',
      }}
    >
      <div ref={fromRef}>
        <Suspense fallback={<Loading />}>
          {isNearScreen && <GridB {...data} />}
        </Suspense>
      </div>
    </Box>
  );
});
export default LazyGridB;
