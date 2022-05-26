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
        <Box sx={{ paddingLeft: ['0em', '0em', '6em', '7em'] }}>
          <Box sx={{ padding: '1.5em 0' }}>
            <Typography ref={ref} component="h4" variant="cardTitle">
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
  );
};

export default forwardRef(Card);
