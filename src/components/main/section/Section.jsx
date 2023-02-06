import { lazy, Suspense, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Loading } from 'components/shared/index';
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

const loadSection = async ({ componentName, onLoad, ...sectionData }) => {
  const SectionContent = await LoadableDynamicSection(componentName);
  return <SectionContent {...sectionData} onLoad={onLoad} />;
};

// Component

const LazySection = ({ sectionData, show }) => {
  const [section, setSection] = useState(null);

  const { fromRef, isNearScreen } = useNearScreen({
    show: show,
    distance: '200px',
  });

  // Lazy components returns a promise, when the promise is resolve we set the component

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      loadSection({
        ...sectionData,
      }).then((section) => {
        return setSection(section);
      });
      mounted = false;
    }
  }, [sectionData]);

  return (
    <Box
      ref={fromRef}
      sx={(theme) => {
        return {
          backgroundImage:
            sectionData.backgroundType === 'full' &&
            theme.palette.background.primary,
          display: sectionData.backgroundType === 'full' ? 'flex' : undefined,
          minHeight: isNearScreen ? '100%' : '100vh',
        };
      }}
    >
      <Suspense fallback={<Loading />}>
        {(isNearScreen || show) && section}
      </Suspense>
    </Box>
  );
};

export default LazySection;
