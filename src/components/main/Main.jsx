import {
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from 'react-router-dom';
import Scroll from 'components/Scroll.jsx';
import { Box } from '@mui/material';
import { Loading } from 'components/shared/index';
import Section from 'components/main/section/Section';
import SectionMargin from 'components/main/section/SectionMargin.js';

function Main() {
  const { components } = useLoaderData();
  const { pathname, hash } = useLocation();
  const url = pathname + hash;

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

  const linkedSections = components.map((section) => section?.withLink?.URL);
  const sectionIndexToNavigate = linkedSections.findIndex(
    (section) => section === url
  );

  return (
    <main style={{ minHeight: '130vh' }}>
      <ScrollRestoration />
      <Scroll hash={hash}>
        {components.map((componentInfo, index) => {
          const lastSection = index === components.length - 1;
          const isFirst = index <= 1;
          return (
            <SectionMargin key={index} section={componentInfo}>
              <Section
                key={index}
                index={index}
                isFirst={isFirst}
                sectionData={componentInfo}
                isLastSection={lastSection}
                show={index <= sectionIndexToNavigate}
              />
            </SectionMargin>
          );
        })}
      </Scroll>
    </main>
  );
}

export default Main;
