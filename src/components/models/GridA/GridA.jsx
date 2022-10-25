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
}) {
  return (
    <Container
      background={backgroundType}
      show={show}
      photoColumn={photoColumn}
    >
      <Grid background={backgroundType} show={show} photoColumn={photoColumn}>
        <GridText
          show={show}
          content={content}
          sectionTitle={sectionTitle}
          button={button}
          background={backgroundType}
        />
        {show === 'cards'
          ? cardLinks && <GridCards cards={cardLinks} />
          : photo && (
              <GridPhoto
                background={backgroundType}
                {...photo}
                columnOrder={photoColumn}
              />
            )}
      </Grid>
    </Container>
  );
}
