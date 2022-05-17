import { forwardRef } from 'react';

import { Typography, Box } from '@mui/material';
import Button from 'components/shared/Button';
import {
  CarouselHero,
  CardWrapper,
  Photo,
  CardPhotoContainer,
} from 'components/models/carousel/styled';

const Card = forwardRef(({ cards, animatedPhoto, slide }) => {
  return (
    <>
      <Box
        sx={{
          display: 'inline-flex',
          width: { xs: '80%', sm: '80%' },
          marginRight: 'auto',
          alignItems: 'center',
          maxWidth: '1200px',
        }}
      >
        <CardPhotoContainer>
          <Photo
            alt="woman face"
            src={cards[slide].photo.url}
            className={animatedPhoto}
          />
        </CardPhotoContainer>

        <CardWrapper>
          <CarouselHero />
          <Box sx={{ paddingLeft: '2em' }}>
            <Box sx={{ paddingBottom: '2em' }}>
              <Typography component="h4" variant={'cardTitle'}>
                {cards[slide].title}
              </Typography>
            </Box>
            <Typography component="p" sx={{ paddingBottom: '2em' }}>
              {cards[slide].content}
            </Typography>
            <Button
              text={cards[slide].buttonText}
              buttonTo={cards[slide].buttonTo}
            />
          </Box>
        </CardWrapper>
      </Box>
    </>
  );
});

export default Card;
