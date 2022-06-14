import { forwardRef } from 'react';
import { Typography, Box } from '@mui/material';
import Button from 'components/shared/Button';
import {
  CardWrapper,
  Photo,
  CardPhotoContainer,
} from 'components/models/carousel/styled';

const Card = ({ cards, animatedPhoto, cardAnimation, slide }, ref) => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        // width: 'inherit',
        maxWidth: { xs: '70%', xl: '60%' },
        boxSizing: 'border-box !important',
        marginLeft: { sm: '-5%' },
      }}
    >
      <CardPhotoContainer>
        <Photo
          alt="woman face"
          src={cards[slide].photo.url}
          className={animatedPhoto}
        />
      </CardPhotoContainer>

      <CardWrapper className={cardAnimation}>
        <Typography
          ref={ref}
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
          buttonTo={cards[slide].buttonTo}
        />
      </CardWrapper>
    </Box>
  );
};

export default forwardRef(Card);
