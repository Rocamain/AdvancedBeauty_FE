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
        <Loading />
      </Box>
    );
  }

  return (
    <main>
      <ScrollRestoration />
      {components.map((componentInfo, index) => {
        const lastSection = index === components.length - 1;
        const isFirst = index <= 1;
        return (
          <SectionMargin key={index} section={componentInfo}>
            <Section
              isFirst={isFirst}
              sectionData={componentInfo}
              isLastSection={lastSection}
            />
          </SectionMargin>
        );
      })}
      ;
    </main>
  );
}

export default Main;
