import { lazy, Suspense, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Loading } from 'components/shared/index';
import { useLocation, useOutletContext } from 'react-router';
import useNearScreen from 'hooks/useNearScreen.js';
import { getId } from 'components/main/section/utils';

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

//
// Component
//

const LazySection = ({
  sectionData,
  marginBottom,
  marginTop,
  isLastSection,
}) => {
  const [section, setSection] = useState(null);
  const [show, setShowFooter] = useOutletContext();
  const { pathname } = useLocation();
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '200px',
  });

  // Set the arguments/props of section according if it withLink, that mean that section can be linked .

  useEffect(() => {
    const args = sectionData.withLink
      ? { ...sectionData, isNearScreen: isNearScreen }
      : { ...sectionData };

    loadSection({
      ...args,
    }).then((section) => {
      return setSection(section);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  //  this effect, is used to alow to render the footer when we reach the last section
  useEffect(() => {
    if (isLastSection) {
      if (isNearScreen) {
        setShowFooter(true);
      }
    }
    return () => setShowFooter(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNearScreen]);

  return (
    <Box
      component="section"
      ref={fromRef}
      id={sectionData?.withLink?.URL && getId(sectionData?.withLink?.URL)}
      sx={{
        backgroundImage:
          sectionData.backgroundType === 'full' &&
          'linear-gradient(90deg,#75c9cc 0%,#00bccc 100%)',
        display: sectionData.backgroundType === 'full' ? 'flex' : undefined,
        marginBottom: marginBottom,
        marginTop: marginTop,
        minHeight: isNearScreen ? '100%' : '50vh',
      }}
    >
      <Suspense fallback={<Loading />}>{isNearScreen && section}</Suspense>
    </Box>
  );
};

export default LazySection;
