import React, { Suspense } from 'react';
import useNearScreen from 'hooks/useNearScreen.js';
import { Box } from '@mui/material';
import { Loading } from 'components/shared/index';
const GridButton = React.lazy(() =>
  import('components/models/GridButton/GridButton.jsx')
);

const LazyGridButton = ({ data, firstChild, sectionTitle }) => {
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '200px',
  });

  return (
    <Box
      id={sectionTitle.title.replaceAll(' ', '-')}
      component="section"
      ref={fromRef}
      sx={{
        minHeight: firstChild && !isNearScreen && '130vh',
        marginBottom: '10vh',
      }}
    >
      <Suspense fallback={<Loading />}>
        {isNearScreen && <GridButton {...data} />}
      </Suspense>
    </Box>
  );
};
export default LazyGridButton;
