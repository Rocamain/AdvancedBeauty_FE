import { useRef, useLayoutEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Container, Grid } from 'components/shared/styled/index.js';
import GridCards from 'components/models/GridA/GridCards';
import GridText from 'components/models/GridA/GridText';
import GridPhoto from 'components/models/GridA/GridPhoto';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

export default function GridA({
  show,
  photoColumn,
  backgroundType,
  photo,
  isNearScreen,
  slides,
  title,
  ...data
}) {
  const [parentHeight, setParentHeight] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const theme = useTheme();
  const childRef = useRef(null);

  const smallMobile = useMediaQuery(theme.breakpoints.up('sm'), {
    noSsr: true,
  });

  useLayoutEffect(() => {
    if (childRef.current && loaded) {
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
        const extraHeight = Number(theme.spacing(5).replace('px', ''));

        setParentHeight(childHeight + extraHeight);
      }
    }
  }, [childRef, loaded, smallMobile]);

  return (
    <Box
      sx={{
        minHeight: parentHeight,
      }}
    >
      <Container background={backgroundType} show={show}>
        <div ref={(show === 'photo' || backgroundType === 'full') && childRef}>
          <Grid
            id={title}
            background={backgroundType}
            show={show}
            photoColumn={photoColumn}
            onLoad={() => setLoaded(true)}
          >
            <GridText show={show} {...data} />
            {show === 'slides'
              ? slides && <GridCards cards={slides} />
              : photo && <GridPhoto {...photo} columnOrder={photoColumn} />}
          </Grid>
        </div>
      </Container>
    </Box>
  );
}
