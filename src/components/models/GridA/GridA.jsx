import useScrollTo from 'hooks/useScrollTo.js';
import { Box } from '@mui/material';
import { Container, Grid } from 'components/shared/styled/index.js';
import GridCards from 'components/models/GridA/GridCards';
import GridText from 'components/models/GridA/GridText';
import GridPhoto from 'components/models/GridA/GridPhoto';

export default function GridA({
  backgroundType,
  button,
  cardLinks,
  content,
  photo,
  photoColumn,
  show,
  sectionTitle,
  marginTop,
  isNearScreen,
}) {
  const { scrollRef } = useScrollTo({
    sectionTitle,
    marginTop,
    isNearScreen,
  });

  return (
    <Box ref={scrollRef}>
      <Container background={backgroundType} show={show}>
        <Grid background={backgroundType} show={show} photocolumn={photoColumn}>
          <GridText
            content={content}
            sectionTitle={sectionTitle}
            button={button}
            background={backgroundType}
          />
          {show === 'cards'
            ? cardLinks && <GridCards cards={cardLinks} />
            : photo && (
                <GridPhoto
                  isNearScreen={isNearScreen}
                  background={backgroundType}
                  {...photo}
                  order={photoColumn}
                />
              )}
        </Grid>
      </Container>
    </Box>
  );
}
