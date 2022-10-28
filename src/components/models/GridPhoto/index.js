import React, { Suspense } from 'react';
import useNearScreen from 'hooks/useNearScreen.js';
import { Box } from '@mui/material';
import { Loading } from 'components/shared/index';

const GridPhoto = React.lazy(() =>
  import('components/models/GridPhoto/GridPhoto.jsx')
);

const LazyGridPhoto = ({ data, firstChild }) => {
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '200px',
  });

  return (
    <Box
      component="section"
      ref={fromRef}
      sx={{
        minHeight: isNearScreen ? 'auto' : '40vh',
        marginBottom: { xs: '10vh', md: '20vh' },
      }}
    >
      <Suspense fallback={<Loading />}>
        {isNearScreen && <GridPhoto {...data} />}
      </Suspense>
    </Box>
  );
};
export default LazyGridPhoto;
