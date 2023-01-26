import { ScrollRestoration, useLoaderData } from 'react-router-dom';
import { Box } from '@mui/material';
import { Loading } from 'components/shared/index';
import Section from 'components/main/section/Section';
import SectionMargin from 'components/main/section/SectionMargin.js';

function Main() {
  const { components } = useLoaderData();

  if (!components) {
    return (
      <Box
        sx={{
          height: '87vh',
        }}
      >
        <ScrollRestoration />
        <Loading />
      </Box>
    );
  }

  return (
    <>
      <ScrollRestoration />
      {components.map((componentInfo, index) => {
        const isFirstSection = index === 0;

        return (
          <SectionMargin key={index} section={componentInfo}>
            <Section
              sectionData={componentInfo}
              isFirstSection={isFirstSection}
            />
          </SectionMargin>
        );
      })}
      ;
    </>
  );
}

export default Main;
