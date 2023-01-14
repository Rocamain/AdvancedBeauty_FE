import React, { Suspense } from 'react';
import useNearScreen from 'hooks/useNearScreen.js';
import { Box } from '@mui/material';
import { Loading } from 'components/shared/index';

const Hero = React.lazy(() => import('components/main/section/Hero/Hero.jsx'));

const LazyHero = ({ id, data, firstChild }) => {
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '200px',
  });

  return (
    <Box
      component="section"
      id={id}
      ref={fromRef}
      sx={{
        marginBottom: 0,
        minHeight: firstChild && !isNearScreen && '130vh',
      }}
    >
      <Suspense fallback={<Loading />}>
        {isNearScreen && <Hero {...data} />}
      </Suspense>
    </Box>
  );
};
export default LazyHero;
