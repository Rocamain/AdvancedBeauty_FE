import { useState, useEffect } from 'react';
import {
  ScrollRestoration,
  useLoaderData,
  useOutletContext,
} from 'react-router-dom';
import { Box } from '@mui/material';
import { Loading } from 'components/shared/index';
import Section from 'components/main/section/Section';
import SectionMargin from 'components/main/section/SectionMargin.js';

function Main() {
  const [sections, setSections] = useState(false);
  const { data } = useLoaderData();
  const setShowFooter = useOutletContext()[1];

  useEffect(() => {
    if (data) {
      setSections(data);
      setShowFooter(false);
    }
    return () => {
      setSections(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (!sections) {
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
      {data.map((componentInfo, index, array) => {
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
