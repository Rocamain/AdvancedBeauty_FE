import { useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import Button from 'components/shared/Button';
import {
  CardWrapper,
  Photo,
  CardPhotoContainer,
} from 'components/models/carousel/styled';

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

      <CardWrapper className={cardAnimation}>
        <Typography
          component="h4"
          variant="cardTitle"
          sx={{ paddingBottom: '1em' }}
        >
          {cards[slide].title}
        </Typography>

        <Typography component="p" sx={{ paddingBottom: '2em' }}>
          {cards[slide].content}
        </Typography>
        <Button
          buttonText={cards[slide].buttonText}
          buttonTo={cards[slide].page}
        />
      </CardWrapper>
    </Box>
  );
};

export default Card;
