import { lazy, Suspense, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Loading } from 'components/shared/index';
import { useLocation } from 'react-router';
import useNearScreen from 'hooks/useNearScreen.js';

// Dynamic import

const LoadableDynamicSection = (componentName) => {
  return lazy(() =>
    import(
      `components/main/section/section-components/${componentName}/${componentName}.jsx`
    ).catch(() => console.log(`Error in importing ${componentName}`))
  );
};

//  Loads the arguments of the  as props in the section Component

const loadSection = async ({ componentName, ...sectionData }) => {
  const SectionContent = await LoadableDynamicSection(componentName);
  return <SectionContent {...sectionData} />;
};

// Component

const LazySection = ({ sectionData }) => {
  const [section, setSection] = useState(null);

  const { pathname } = useLocation();
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '200px',
  });

  // Set the arguments to section as props.

  useEffect(() => {
    const args = { ...sectionData };

    loadSection({
      ...args,
    }).then((section) => {
      return setSection(section);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  //  this effect, is used to alow to render the footer when we reach the last section

  return (
    <Box
      ref={fromRef}
      sx={{
        backgroundImage:
          sectionData.backgroundType === 'full' &&
          'linear-gradient(90deg,#75c9cc 0%,#00bccc 100%)',
        display: sectionData.backgroundType === 'full' ? 'flex' : undefined,
        minHeight: isNearScreen ? '100% ' : '100vh',
      }}
    >
      <Suspense fallback={<Loading />}>{isNearScreen && section}</Suspense>
    </Box>
  );
};

export default LazySection;
