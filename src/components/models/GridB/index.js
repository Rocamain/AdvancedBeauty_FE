import React, { Suspense } from 'react';
import useNearScreen from 'hooks/useNearScreen.js';
import { Box } from '@mui/material';
import { Loading } from 'components/shared/index';
const GridB = React.lazy(() => import('components/models/GridB/GridB.jsx'));

const LazyGridB = ({ data, sectionTitle }) => {
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '200px',
  });

  return (
    <Box
      id={sectionTitle.title}
      component="section"
      ref={fromRef}
      sx={{
        marginBottom: { xs: '10vh', md: '20vh' },
        minHeight: isNearScreen ? 'auto' : '40vh',
      }}
    >
      <Suspense fallback={<Loading />}>
        {isNearScreen && <GridB {...data} />}
      </Suspense>
    </Box>
  );
};
export default LazyGridB;
