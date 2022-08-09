import { useRef, useLayoutEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Container, Grid } from 'components/shared/styled/index.js';
import GridCards from 'components/models/GridA/GridCards';
import GridText from 'components/models/GridA/GridText';
import GridPhoto from 'components/models/GridA/GridPhoto';
import { useTheme } from '@mui/material/styles';

export default function GridA({
  show,
  photoColumn,
  backgroundType,
  photo,
  isNearScreen,
  ...data
}) {
  const [parentHeight, setParentHeight] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const theme = useTheme();
  const childRef = useRef(null);

  useLayoutEffect(() => {
    setParentHeight(null);
    if (childRef.current && loaded) {
      let childHeight = childRef.current.children[0].scrollHeight;
      if (backgroundType === 'full' && show === 'photo') {
        const extraHeight = Number(theme.spacing(5).replace('px', ''));
        setParentHeight(childHeight + extraHeight);
      }

      if (backgroundType === 'full') {
        setParentHeight(childHeight);
      }

      if (show === 'photo' && backgroundType !== 'full') {
        const extraHeight = Number(theme.spacing(5).replace('px', ''));
        childRef.current.children[0].addEventListener('load', () => {
          setParentHeight(childHeight + extraHeight);
        });
      }
    }
  }, [childRef, loaded]);

  return (
    <Box
      sx={{
        minHeight: parentHeight,
      }}
    >
      <Container background={backgroundType} show={show}>
        <div ref={(show === 'photo' || backgroundType === 'full') && childRef}>
          <Grid
            id={data.title}
            background={backgroundType}
            show={show}
            photoColumn={photoColumn}
            onLoad={() => setLoaded(true)}
          >
            <GridText show={show} {...data} />
            {show === 'cards'
              ? data.cards && <GridCards {...data} />
              : photo && <GridPhoto {...photo} columnOrder={photoColumn} />}
          </Grid>
        </div>
      </Container>
    </Box>
  );
}
