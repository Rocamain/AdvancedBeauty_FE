import React, { Suspense } from 'react';
import { Box } from '@mui/material';
import useNearScreen from 'hooks/useNearScreen.js';
import { Loading } from 'components/shared/index';

const CardA = React.lazy(() => import('components/models/CardA/CardA.jsx'));

const LazyCardA = ({ data, sectionTitle }) => {
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '200px',
  });

  return (
    <Box
      component="section"
      id={sectionTitle.title.replaceAll(' ', '-')}
      ref={fromRef}
      sx={{
        minHeight: isNearScreen ? 'auto' : '40vh',
        marginBottom: '10vh',
      }}
    >
      <Suspense fallback={<Loading />}>
        {isNearScreen && <CardA {...data} />}
      </Suspense>
    </Box>
  );
};

export default LazyCardA;
