import React, { Suspense } from 'react';
import { Box } from '@mui/material';
import useNearScreen from 'hooks/useNearScreen.js';

const Accordion = React.lazy(() =>
  import('components/models/Accordion/Accordion.jsx')
);

const LazyAccordion = ({ id, data, height }) => {
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '100px',
  });
  console.log(data);
  return (
    <Box
      component="section"
      id={id}
      ref={fromRef}
      sx={{ height: isNearScreen ? 'auto' : height, marginBottom: '10vh' }}
    >
      <Suspense fallback={<div style={{ height: '100vh' }} />}>
        {isNearScreen && <Accordion {...data} />}
      </Suspense>
    </Box>
  );
};

export default LazyAccordion;
