import { lazy, Suspense, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Loading } from 'components/shared/index';
import { useLocation, useOutletContext } from 'react-router';
import useNearScreen from 'hooks/useNearScreen.js';

const LoadableDynamicSection = (componentName) => {
  return lazy(() =>
    import(`components/models/${componentName}/${componentName}.jsx`).catch(
      () => console.log(`Error in importing ${componentName}`)
    )
  );
};
const loadSection = async ({ componentName, ...sectionData }) => {
  const SectionContent = await LoadableDynamicSection(componentName);
  return <SectionContent {...sectionData} />;
};

const LazySection = ({
  sectionData,
  sectionTitle,
  marginBottom,
  marginTop,
  isLastSection,
}) => {
  const [section, setSection] = useState(null);
  const setShowFooter = useOutletContext();
  const { pathname } = useLocation();
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '200px',
  });

  useEffect(() => {
    const args = sectionData.sectionTitle
      ? { ...sectionData, marginTop, isNearScreen: isNearScreen }
      : { ...sectionData };

    loadSection({
      ...args,
    }).then((section) => {
      return setSection(section);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (isLastSection & isNearScreen) {
      setShowFooter(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNearScreen]);

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
      <Suspense fallback={<Loading />}>{isNearScreen && section}</Suspense>
    </Box>
  );
};

export default LazySection;
