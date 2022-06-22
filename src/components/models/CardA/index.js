import React, { Suspense } from 'react';
import { Box } from '@mui/material';
import useNearScreen from 'hooks/useNearScreen.js';
import { Error, Loading } from 'components/shared/index';
const CardA = React.lazy(() => import('components/models/CardA/CardA.jsx'));

const LazyCardA = React.forwardRef(({ id, data, path }, ref) => {
  const { fromRef, isNearScreen } = useNearScreen();

  return (
    <Box component="section" id={id} ref={ref}>
      <div ref={fromRef}>
        <Suspense fallback={<Loading />}>
          {isNearScreen && <CardA {...data} />}
        </Suspense>
      </div>
    </Box>
  );
});

export default LazyCardA;
