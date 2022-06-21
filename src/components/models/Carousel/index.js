import React, { Suspense } from 'react';
import useNearScreen from 'hooks/useNearScreen.js';
import { Box } from '@mui/material';
const Carousel = React.lazy(() =>
  import('components/models/Carousel/Carousel.jsx')
);

const LazyCarousel = React.forwardRef(({ id, data, path }, ref) => {
  const { fromRef, isNearScreen } = useNearScreen();

  return (
    <Box
      component="section"
      id={id}
      ref={fromRef}
      sx={{
        marginBottom: '3em',
      }}
    >
      <Suspense fallback={'loading...'}>
        {isNearScreen && <Carousel {...data} />}
      </Suspense>
    </Box>
  );
});
export default LazyCarousel;
