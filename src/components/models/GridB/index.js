import React, { Suspense, useImperativeHandle } from 'react';
import useNearScreen from 'hooks/useNearScreen.js';
import { Box } from '@mui/material';
import { Loading } from 'components/shared/index';

const GridB = React.lazy(() => import('components/models/GridB/GridB.jsx'));

const LazyGridB = React.forwardRef(({ id, data }, ref) => {
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
        height: isNearScreen ? 'auto' : '20vh',
        marginBottom: '10vh',
      }}
    >
      <Suspense fallback={<Loading />}>
        {isNearScreen && <GridB {...data} />}
      </Suspense>
    </Box>
  );
});
export default LazyGridB;
