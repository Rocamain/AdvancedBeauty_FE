import { useRef, useLayoutEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Container, Grid } from 'components/shared/styled/index.js';
import GridCards from 'components/models/GridA/GridCards';
import GridText from 'components/models/GridA/GridText';
import GridPhoto from 'components/models/GridA/GridPhoto';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import useFetchData from 'hooks/useFetchData';
import { Loading } from 'components/shared/index';

export default function GridA({ path, id }) {
  const { data, loading } = useFetchData('strapi', {
    path,
    component: 'gridA',
    id: id,
  });
  const [parentHeight, setParentHeight] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const theme = useTheme();
  const childRef = useRef(null);

  const smallMobile = useMediaQuery(theme.breakpoints.down('sm'), {
    noSsr: true,
  });

  useLayoutEffect(() => {
    if (childRef.current && data[0] && loaded) {
      const { backgroundType, show } = data[0];
      let childHeight = childRef.current.children[0].scrollHeight;

      if (backgroundType === 'full' && show === 'photo') {
        const extraSpace = smallMobile ? 30 : 20;
        const extraHeight = Number(theme.spacing(extraSpace).replace('px', ''));
        setParentHeight(childHeight + extraHeight);
      }

      if (backgroundType === 'full') {
        const extraSpace = smallMobile ? 4 : 6;
        const extraHeight = Number(theme.spacing(extraSpace).replace('px', ''));
        setParentHeight(childHeight + extraHeight);
      }

      if (show === 'photo' && backgroundType !== 'full') {
        const extraHeight = Number(theme.spacing(8).replace('px', ''));

        setParentHeight(childHeight + extraHeight);
      }
    }
  }, [data, childRef, loaded, smallMobile, theme]);

  if (loading) {
    return <Loading />;
  }

  const {
    button,
    backgroundType,
    show,
    photo,
    photoColumn,
    cardLinks,
    sectionTitle,
    content,
  } = data[0];

  return (
    <Box
      sx={{
        minHeight: parentHeight,
      }}
    >
      <Container background={backgroundType} show={show}>
        <div
          ref={
            show === 'photo' || backgroundType === 'full' ? childRef : undefined
          }
        >
          <Grid
            background={backgroundType}
            show={show}
            photoColumn={photoColumn}
            onLoad={() => setLoaded(true)}
          >
            <GridText
              show={show}
              content={content}
              sectionTitle={sectionTitle}
              button={button}
            />
            {show === 'cards'
              ? cardLinks && <GridCards cards={cardLinks} />
              : photo && <GridPhoto {...photo} columnOrder={photoColumn} />}
          </Grid>
        </div>
      </Container>
    </Box>
  );
}
