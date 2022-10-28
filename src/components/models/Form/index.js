import React, { Suspense } from 'react';
import { Box } from '@mui/material';
import useNearScreen from 'hooks/useNearScreen.js';
import { Loading } from 'components/shared/index';

const Form = React.lazy(() => import('components/models/Form/Form.jsx'));

const LazyForm = ({ data, sectionTitle, firstChild }) => {
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '200px',
  });

  return (
    <Box
      ref={fromRef}
      component="section"
      sx={{
        minHeight: isNearScreen ? 'auto' : '60vh',
        marginBottom: '10vh',
      }}
    >
      <Suspense fallback={<Loading />}>{true && <Form />}</Suspense>
    </Box>
  );
};

export default LazyForm;
