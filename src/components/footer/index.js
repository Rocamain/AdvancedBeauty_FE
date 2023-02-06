import React, { Suspense } from 'react';
import { Box } from '@mui/material';
import { Loading } from 'components/shared/index';
import useNearScreen from 'hooks/useNearScreen.js';

const FooterContent = React.lazy(() => import('components/footer/Footer.jsx'));

const LazyFooter = ({ data }) => {
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '400px',
  });

  return (
    <Box
      ref={fromRef}
      component="footer"
      sx={{
        minHeight: isNearScreen ? '100%' : '50vh',
      }}
    >
      <Suspense fallback={<Loading />}>
        {isNearScreen && <FooterContent {...data} />}
      </Suspense>
    </Box>
  );
};

export default LazyFooter;
