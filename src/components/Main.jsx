import useFetchStrapi from 'hooks/useFetchStrapi';
import Section from 'components/models/index.js';
import { useLocation } from 'react-router-dom';
import { useMediaQuery, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Loading } from 'components/shared/index';
import { getMarginBottom, getMarginTop } from 'components/models/utils';

function Main() {
  const { pathname } = useLocation();
  const { data, loading } = useFetchStrapi(pathname);
  const theme = useTheme();
  const matchesBigMobiles = useMediaQuery(
    theme.breakpoints.between('sm', 'md'),
    {
      noSsr: true,
    }
  );
  const smallMobiles = useMediaQuery(theme.breakpoints.down('sm'), {
    noSsr: true,
  });

  if (loading) {
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
      {data.map((componentInfo, index, array) => {
        const { sectionTitle } = componentInfo;
        const isLastSection = index === array.length - 1;
        return (
          <Section
            key={index}
            sectionData={componentInfo}
            sectionTitle={sectionTitle}
            marginBottom={
              isLastSection
                ? '10vh'
                : getMarginBottom(
                    {
                      section: componentInfo,
                      nextSection: array[index + 1],
                    },
                    matchesBigMobiles,
                    smallMobiles
                  )
            }
            marginTop={getMarginTop({ section: componentInfo })}
          />
        );
      })}
      ;
    </main>
  );
}

export default Main;
