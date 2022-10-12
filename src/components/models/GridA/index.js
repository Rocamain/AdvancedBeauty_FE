import React, { Suspense } from 'react';
import { Box } from '@mui/material';
import useNearScreen from 'hooks/useNearScreen.js';
import { Loading } from 'components/shared/index';
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
      sx={(theme) => {
        return {
          height: isNearScreen ? 'auto' : height,
          marginBottom: '20vh',
        };
      }}
    >
      <Suspense fallback={<Loading />}>
        {isNearScreen && <GridA {...data} />}
      </Suspense>
    </Box>
  );
};

export default LazyGridA;
