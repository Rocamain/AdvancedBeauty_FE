import React, { Suspense } from 'react';
import { Box } from '@mui/material';
import { Loading } from 'components/shared/index';
import useNearScreen from 'hooks/useNearScreen.js';

const Footer = React.lazy(() => import('components/main/footer/Footer.jsx'));

const LazyFooter = ({ data }) => {
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '200px',
  });

  return (
    <Box
      component="footer"
      ref={fromRef}
      sx={{
        minHeight: isNearScreen ? '100%' : '50vh',
      }}
    >
      <Suspense fallback={<Loading />}>
        {isNearScreen && <Footer {...data} />}
      </Suspense>
    </Box>
  );
};

export default LazyFooter;
