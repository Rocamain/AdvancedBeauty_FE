import { ScrollRestoration, useLoaderData } from 'react-router-dom';
import { useMediaQuery, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Loading } from 'components/shared/index';
import Section from 'components/main/section/Section';
import { getMarginBottom, getMarginTop } from 'components/main/section/utils';

function Main() {
  const { data } = useLoaderData();
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('sm'));

  if (!data) {
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
    <>
      <ScrollRestoration />
      {data.map((componentInfo, index, array) => {
        const isLastSection = index === array.length - 1;
        const isFirstSection = index === 0;

        return (
          <Section
            key={index}
            sectionData={componentInfo}
            isFirstSection={isFirstSection}
            isLastSection={isLastSection}
            marginBottom={
              isLastSection
                ? '10vh'
                : getMarginBottom(
                    {
                      section: componentInfo,
                      nextSection: array[index + 1],
                    },
                    desktop
                  )
            }
            marginTop={getMarginTop(
              { section: componentInfo },
              desktop,
              isFirstSection
            )}
          />
        );
      })}
      ;
    </>
  );
}

export default Main;
