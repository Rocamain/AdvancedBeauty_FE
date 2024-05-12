import { Box } from '@mui/material';
import {
  Card,
  Container,
} from 'components/main/section/section-components/CardA/styled/index.jsx';
import { Wrapper } from 'components/shared/styled/index.jsx';
import Image from 'components/shared/Image.jsx';
import SectionTitle from 'components/shared/SectionTitle.jsx';
import Button from 'components/shared/Button.jsx';
import Markdown from 'components/shared/MarkDown.jsx';

function CardA({ content, title, button, photo, backgroundType = 'none' }) {
  return (
    <Container background={backgroundType}>
      <Wrapper>
        <Box
          sx={{
            maxWidth: { xs: '100%', md: '50%' },
            position: { md: 'relative' },
            zIndex: '100',
          }}
        >
          {title && <SectionTitle title={title} grid cardA />}
          <Card>
            <Markdown content={content} />
            {button && <Button value={title} {...button} marginTop='0.5em' />}
          </Card>
        </Box>
        {photo && (
          <Box
            sx={{
              display: { xs: 'flex', md: 'block' },
            }}
          >
            <Image
              height={[290, 500, 340, 380, 'auto']}
              width='100%'
              url={photo.url}
              alt={photo.alternativeText}
              formats={photo.formats}
              componentType='cardA'
            />
          </Box>
        )}
      </Wrapper>
    </Container>
  );
}
export default CardA;
