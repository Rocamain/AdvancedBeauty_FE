import React, { Suspense } from 'react';
import { Box } from '@mui/material';
import useNearScreen from 'hooks/useNearScreen.js';
import { Loading } from 'components/shared/index';

const CardA = React.lazy(() => import('components/models/CardA/CardA.jsx'));

const LazyCardA = ({ id, data, height }) => {
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '100px',
  });

  return (
    <Box
      component="section"
      id={id}
      ref={fromRef}
      sx={{ height: isNearScreen ? 'auto' : height, marginBottom: '20vh' }}
    >
      <Suspense fallback={<Loading />}>
        {' '}
        {isNearScreen && <CardA {...data} />}
      </Suspense>
    </Box>
  );
};

export default LazyCardA;
