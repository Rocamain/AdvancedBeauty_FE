import { forwardRef } from 'react';

import { Typography, Box } from '@mui/material';
import Button from 'components/shared/Button';
import {
  CarouselHero,
  CardWrapper,
  Photo,
  CardPhotoContainer,
} from 'components/models/carousel/styled';

const Card = forwardRef(({ cards, animatedPhoto, cardAnimation, slide }) => {
  return (
    <>
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          width: { xs: '70%', sm: '80%' },
          maxWidth: '1200px',
          marginRight: 'auto',
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
          <CarouselHero />
          <Box sx={{ paddingLeft: '2em' }}>
            <Box sx={{ paddingBottom: '2em' }}>
              <Typography component="h4" variant="cardTitle">
                {cards[slide].title}
              </Typography>
            </Box>
            <Typography component="p" sx={{ paddingBottom: '2em' }}>
              {cards[slide].content}
            </Typography>
            <Button
              buttonText={cards[slide].buttonText}
              buttonTo={cards[slide].buttonTo}
            />
          </Box>
        </CardWrapper>
      </Box>
    </>
  );
});

export default Card;
