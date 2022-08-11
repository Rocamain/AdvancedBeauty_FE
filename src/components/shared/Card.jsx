import { Typography, Box } from '@mui/material';
import Button from 'components/shared/Button';
import {
  CardWrapper,
  Photo,
  CardPhotoContainer,
} from 'components/models/Carousel/styled';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import style from 'components/models/GridA/markdown-styles.module.css';

const Card = ({ cards, animatedPhoto, cardAnimation, slide }) => {
  return (
    <Box
      component="div"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        maxWidth: { xs: '70%', xl: '60%' },
        boxSizing: 'border-box !important',
        marginLeft: { sm: '-5%' },
      }}
    >
      <CardPhotoContainer>
        <Photo
          alt={cards[slide].photo.alternativeText}
          src={cards[slide].photo.url}
          className={animatedPhoto}
        />
      </CardPhotoContainer>

      <CardWrapper className={cardAnimation} sx={{ pb: '2em' }}>
        <Typography
          component="h4"
          variant="cardTitle"
          sx={{ paddingBottom: '1em', color: 'black' }}
        >
          {cards[slide].title}
        </Typography>
        <ReactMarkdown
          className={style.reactMarkDown}
          escapeHTML={true}
          remarkPlugins={[gfm]}
          children={cards[slide].content}
          style={{ paddingBottom: '1em', color: 'black' }}
        />

        <Button
          buttonText={cards[slide].buttonText}
          buttonTo={cards[slide].page}
          sectionTitle={cards[slide].sectionTitle}
        />
      </CardWrapper>
    </Box>
  );
};

export default Card;
