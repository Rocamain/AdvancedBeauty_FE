import React, { Suspense } from 'react';
import useNearScreen from 'hooks/useNearScreen.js';
import { Box } from '@mui/material';
import { Loading } from 'components/shared/index';

const Carousel = React.lazy(() =>
  import('components/models/Carousel/Carousel.jsx')
);

const LazyCarousel = ({ id, data, firstChild, isScrollToActive }) => {
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '100px',
    isScrollToActive,
  });

  return (
    <Box
      id={data.sectionTitle.title}
      component="section"
      ref={fromRef}
      sx={{
        minHeight: firstChild && !isNearScreen && '40vh',
        marginBottom: { xs: '20vh', md: '10vh' },
      }}
    >
      <Suspense fallback={<Loading />}>
        {(isNearScreen || isScrollToActive) && <Carousel {...data} />}
      </Suspense>
    </Box>
  );
};
export default LazyCarousel;
