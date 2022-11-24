import { lazy, Suspense, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Loading } from 'components/shared/index';
import { useLocation } from 'react-router';

const importSection = (componentName) => {
  return lazy(() =>
    import(`components/models/${componentName}/${componentName}.jsx`).catch(
      () => console.log(`Error in importing ${componentName}`)
    )
  );
};

const LazySection = ({
  sectionData,
  sectionTitle,
  marginBottom,
  marginTop,
}) => {
  const [component, setComponent] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const loadSection = async ({ componentName, ...sectionData }) => {
      const SectionContent = await importSection(componentName);
      return <SectionContent {...sectionData} />;
    };

    loadSection({
      ...sectionData,
      marginTop,
      isNearScreen: true,
    }).then((section) => {
      return setComponent(section);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Box
      component="section"
      // ref={fromRef}
      id={sectionTitle && sectionTitle.title.replaceAll(' ', '-')}
      sx={{
        backgroundImage:
          sectionData.backgroundType === 'full' &&
          'linear-gradient(90deg,#75c9cc 0%,#00bccc 100%)',
        display: sectionData.backgroundType === 'full' ? 'flex' : undefined,
        marginBottom: marginBottom,
        minHeight: true ? '100%' : '50vh',
      }}
    >
      <Suspense fallback={<Loading />}>{true && component}</Suspense>
    </Box>
  );
};

export default LazySection;
