import React, { Suspense } from 'react';
import useNearScreen from 'hooks/useNearScreen.js';
import { Box } from '@mui/material';

const Carousel = React.lazy(() =>
  import('components/models/Carousel/Carousel.jsx')
);

const LazyCarousel = ({ id, data, height }) => {
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '100px',
  });

  return (
    <Box
      component="section"
      id={id}
      ref={fromRef}
      sx={{ height: isNearScreen ? 'auto' : height, marginBottom: '10vh' }}
    >
      <Suspense fallback={<div style={{ height: '100%' }} />}>
        {isNearScreen && <Carousel {...data} />}
      </Suspense>
    </Box>
  );
};
export default LazyCarousel;
