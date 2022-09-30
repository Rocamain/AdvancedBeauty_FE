import React, { Suspense } from 'react';
import useNearScreen from 'hooks/useNearScreen.js';
import { Box } from '@mui/material';
import { Loading } from 'components/shared/index';

const Hero = React.lazy(() => import('components/models/Hero/Hero.jsx'));

const LazyHero = ({ id, data, height }) => {
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
        marginBottom: '10vh',
      }}
    >
      <Suspense fallback={<Loading />}>
        {isNearScreen && <Hero {...data} />}
      </Suspense>
    </Box>
  );
};
export default LazyHero;
