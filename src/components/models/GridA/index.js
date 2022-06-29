import React, { Suspense, useImperativeHandle } from 'react';
import { Box } from '@mui/material';
import useNearScreen from 'hooks/useNearScreen.js';
import { Loading } from 'components/shared/index';

const GridA = React.lazy(() => import('components/models/GridA/GridA.jsx'));

const LazyGridA = React.forwardRef(({ id, data }, ref) => {
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '100px',
  });

  useImperativeHandle(
    ref,
    () => {
      return {
        top: Math.round(fromRef.current.offsetTop),
      };
    },
    [fromRef]
  );

  return (
    <Box
      component="section"
      id={id}
      ref={fromRef}
      sx={{
        height: isNearScreen ? 'auto' : '50vh',
        marginBottom: '10vh',
      }}
    >
      <Suspense fallback={<Loading />}>
        {isNearScreen && <GridA {...data} />}
      </Suspense>
    </Box>
  );
});

export default LazyGridA;
