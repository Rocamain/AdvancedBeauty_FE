import React, { Suspense } from 'react';
import useNearScreen from 'hooks/useNearScreen.js';
import { Box } from '@mui/material';
import { Error, Loading } from 'components/shared/index';

const Carousel = React.lazy(() =>
  import('components/models/Carousel/Carousel.jsx')
);

const LazyCarousel = React.forwardRef(({ id, data, path }, ref) => {
  const { fromRef, isNearScreen } = useNearScreen();

  return (
    <Box
      component="section"
      id={id}
      ref={ref}
      sx={{
        marginBottom: '3em',
      }}
    >
      <div ref={fromRef}>
        <Suspense fallback={<Loading />}>
          {isNearScreen && <Carousel {...data} />}
        </Suspense>
      </div>
    </Box>
  );
});
export default LazyCarousel;
