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
  marginTop,
  isNearScreen,
  withLink,
}) {
  console.log('GRidA');
  const { scrollRef } = useScrollTo({
    url: withLink?.URL,
    marginTop,
    isNearScreen,
  });

  return (
    <Container background={backgroundType} show={show}>
      <Box ref={withLink?.URL && scrollRef}>
        <Grid background={backgroundType} show={show} photocolumn={photoColumn}>
          <GridText
            content={content}
            title={title}
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
      </Box>
    </Container>
  );
}
