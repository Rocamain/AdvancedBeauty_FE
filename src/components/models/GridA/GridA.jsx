import { useState } from 'react';
import useScrollTo from 'hooks/useScrollTo.js';
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
}) {
  const [loaded, setLoaded] = useState(false);
  const { scrollRef } = useScrollTo({ sectionTitle, loaded, marginTop });

  return (
    <Container
      background={backgroundType}
      show={show}
      photoColumn={photoColumn}
      onLoad={() => setLoaded(true)}
    >
      <div ref={scrollRef}>
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
      </div>
    </Container>
  );
}
