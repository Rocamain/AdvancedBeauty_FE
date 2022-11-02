import { lazy, Suspense, useState, useEffect } from 'react';
import useNearScreen from 'hooks/useNearScreen.js';
import { Box } from '@mui/material';
import { Loading } from 'components/shared/index';

const importSection = (componentName) => {
  return lazy(() =>
    import(`components/models/${componentName}/${componentName}.jsx`).catch(
      () => console.log('Error in importing')
    )
  );
};

const LazySection = ({
  sectionData,
  sectionTitle,
  marginBottom,
  marginTop,
}) => {
  const [component, setComponent] = useState();

  const { fromRef, isNearScreen } = useNearScreen({
    distance: '40%',
  });

  useEffect(() => {
    const loadSection = async ({ componentName, ...sectionData }) => {
      const SectionContent = await importSection(componentName);

      return <SectionContent {...sectionData} />;
    };

    loadSection({ ...sectionData, marginTop }).then((section) =>
      setComponent(section)
    );
  }, [sectionData, marginTop]);

  return (
    <Box
      component="section"
      ref={fromRef}
      id={sectionTitle && sectionTitle.title.replaceAll(' ', '-')}
      sx={{
        backgroundImage:
          sectionData.backgroundType === 'full' &&
          'linear-gradient(90deg,#75c9cc 0%,#00bccc 100%)',
        display: sectionData.backgroundType === 'full' ? 'flex' : undefined,
        marginBottom: marginBottom,
        minHeight: isNearScreen ? '100%' : '50vh',
      }}
    >
      <Suspense fallback={<Loading />}>{isNearScreen && component}</Suspense>
    </Box>
  );
};

export default LazySection;
