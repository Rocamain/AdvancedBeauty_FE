import { Container, Grid } from 'components/shared/styled/index';
import GridCards from 'components/main/section/section-components/GridA/Grid-A-Cards';
import GridText from 'components/main/section/section-components/GridA/Grid-A-Text.jsx';
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
}) {
  return (
    <Container background={backgroundType} show={show}>
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
                background={backgroundType}
                {...photo}
                order={photoColumn ? photoColumn : undefined}
              />
            )}
      </Grid>
    </Container>
  );
}
