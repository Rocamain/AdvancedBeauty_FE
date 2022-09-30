import React, { Suspense } from 'react';
import useNearScreen from 'hooks/useNearScreen.js';
import { Box } from '@mui/material';
import { Loading } from 'components/shared/index';

const GridPhoto = React.lazy(() =>
  import('components/models/GridPhoto/GridPhoto.jsx')
);

const LazyGridPhoto = ({ id, data, height }) => {
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '100px',
  });

  return (
    <Box
      component="section"
      id={id}
      ref={fromRef}
      sx={{
        height: isNearScreen ? 'auto' : height,
        marginBottom: '15vh',
      }}
    >
      <Suspense fallback={<Loading />}>
        {isNearScreen && <GridPhoto {...data} />}
      </Suspense>
    </Box>
  );
};
export default LazyGridPhoto;
