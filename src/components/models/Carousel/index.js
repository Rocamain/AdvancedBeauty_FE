import React, { Suspense, useImperativeHandle } from 'react';
import useNearScreen from 'hooks/useNearScreen.js';
import { Box } from '@mui/material';
import { Loading } from 'components/shared/index';

const Carousel = React.lazy(() =>
  import('components/models/Carousel/Carousel.jsx')
);

const LazyCarousel = React.forwardRef(({ id, data }, ref) => {
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
        {isNearScreen && <Carousel {...data} />}
      </Suspense>
    </Box>
  );
});
export default LazyCarousel;
