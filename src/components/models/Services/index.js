import React, { Suspense } from 'react';
import { Box } from '@mui/material';
import useNearScreen from 'hooks/useNearScreen.js';
import { Loading } from 'components/shared/index';

const Services = React.lazy(() =>
  import('components/models/Services/Services.jsx')
);

const LazyServices = ({ data, sectionTitle, firstChild }) => {
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '200px',
  });

  return (
    <Box
      ref={fromRef}
      component="section"
      sx={{
        minHeight: isNearScreen ? 'auto' : '60vh',
        marginBottom: { xs: '10vh', md: '20vh' },
      }}
    >
      <Suspense fallback={<Loading />}>{true && <Services />}</Suspense>
    </Box>
  );
};

export default LazyServices;
