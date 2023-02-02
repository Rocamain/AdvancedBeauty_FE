import useScrollTo from 'hooks/useScrollTo.js';
import { Box } from '@mui/material';
import { Container, Grid } from 'components/shared/styled/index.js';
import GridCards from 'components/main/section/section-components/GridA/Grid-A-Cards';
import GridText from 'components/main/section//section-components/GridA/Grid-A-Text';
import GridPhoto from 'components/main/section//section-components/GridA/Grid-A-Photo';

export default function GridA({
  backgroundType,
  button,
  cardLinks,
  content,
  photo,
  photoColumn,
  show,
  title,
  isNearScreen,
  withLink,
}) {
  const { scrollRef } = useScrollTo({
    url: withLink?.URL,
    isNearScreen,
  });

  return (
    <Container background={backgroundType} show={show}>
      <Box ref={withLink?.URL ? scrollRef : null}>
        <Grid
          background={backgroundType}
          show={show}
          photocolumn={photoColumn}
          sx={{ gap: { xs: '1.5em', md: 0 } }}
        >
          <GridText
            content={content}
            title={title}
            button={button}
            show={show}
            background={backgroundType}
          />
          {show === 'cards'
            ? cardLinks && <GridCards cards={cardLinks} />
            : photo && (
                <GridPhoto
                  isNearScreen={isNearScreen}
                  background={backgroundType}
                  {...photo}
                  order={photoColumn ? photoColumn : undefined}
                />
              )}
        </Grid>
      </Box>
    </Container>
  );
}
