import React, { Suspense } from 'react';
import { Box } from '@mui/material';
import useNearScreen from 'hooks/useNearScreen.js';

const GridA = React.lazy(() => import('components/models/GridA/GridA.jsx'));

const LazyGridA = ({ id, data, height }) => {
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '100px',
  });
  const { show, backgroundType } = data;

  return (
    <Box
      component="section"
      id={id}
      ref={fromRef}
      sx={(theme) => {
        const setMargin = () => {
          if (show === 'photo') {
            return [theme.spacing(25)];
          }
          if (show === 'photo' && backgroundType === 'full') {
            return [theme.spacing(35), theme.spacing(40)];
          }
          if (show === 'cards' && backgroundType === 'full') {
            return [theme.spacing(30), theme.spacing(40)];
          }
          return [theme.spacing(11)];
        };
        return {
          height: isNearScreen ? 'auto' : height,
          marginBottom: setMargin(),
        };
      }}
    >
      <Suspense fallback={<div style={{ height: '100vh' }} />}>
        {isNearScreen && <GridA isNearScreen={isNearScreen} {...data} />}
      </Suspense>
    </Box>
  );
};

export default LazyGridA;
