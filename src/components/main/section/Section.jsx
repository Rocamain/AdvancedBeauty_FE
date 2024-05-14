// Import necessary modules
import { lazy, Suspense, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Loading } from 'components/shared/index';
import { useLocation } from 'react-router';
import useNearScreen from 'hooks/useNearScreen';
import { convertToCamelCase } from 'components/main/section/utils';

// Dynamic import function
const LoadableDynamicSection = async (componentName) => {
  return lazy(() =>
    import(`./section-components/${componentName}/${componentName}.jsx`).catch(
      (error) => {
        // Return a fallback component in case of error
        return { default: () => <div>Error: Component not found</div> };
      }
    )
  );
};

// Function to load section dynamically

const loadSection = async ({ __component, componentName, ...sectionData }) => {
  try {
    // Dynamically import the section component
    componentName = __component
      ? convertToCamelCase(__component)
      : componentName;

    const SectionComponent = await LoadableDynamicSection(componentName);
    // Return the dynamically loaded component with section data as props

    return <SectionComponent {...sectionData} />;
  } catch (error) {
    console.error('Error loading section:', error);
    // Return a fallback component in case of error
    return <div>Error: Failed to load section</div>;
  }
};

// LazySection component
const LazySection = ({ sectionData }) => {
  // State to hold the loaded section component
  const [section, setSection] = useState(null);
  // Get current pathname using useLocation hook
  const { pathname } = useLocation();
  // Check if the section is near the screen using custom hook
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '200px',
  });

  // Load section on component mount and when pathname changes
  useEffect(() => {
    // Create arguments object with section data
    const args = { ...sectionData };
    // Load section dynamically
    loadSection(args)
      .then((SectionComponent) => {
        // Set the loaded section component to state

        setSection(SectionComponent);
      })
      .catch((error) => {
        console.error('Error loading section:', error);
      });
  }, [pathname, sectionData]);

  // Render LazySection component
  return (
    <Box
      ref={fromRef}
      sx={{
        backgroundImage:
          sectionData.backgroundType === 'full' &&
          'linear-gradient(90deg,#75c9cc 0%,#00bccc 100%)',
        display: sectionData.backgroundType === 'full' ? 'flex' : undefined,
        minHeight: isNearScreen ? '100%' : '100vh',
      }}
    >
      {/* Render the loaded section component within Suspense */}
      <Suspense fallback={<Loading />}>{isNearScreen && section}</Suspense>
    </Box>
  );
};

// Export LazySection component
export default LazySection;
