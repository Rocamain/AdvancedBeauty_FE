import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import clsx from 'clsx';
import { Typography, Box } from '@mui/material';
import Button from 'components/shared/Button';
import {
  CardWrapper,
  Photo,
  CardPhotoContainer,
} from 'components/main/section/section-components/Carousel/styled';
import Markdown from 'components/shared/MarkDown';

import {
  slideCard,
  slidePhoto,
} from 'components/main/section/section-components/Carousel/styles';

const Card = ({ slides, exit, slideIndex, exitAnimationEnd }) => {
  const theme = useTheme();
  const matchesBigScreens = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });
  console.log({ slideIndex });
  let photoAnimationStyles = slidePhoto();
  let cardAnimationStyles = slideCard();

  let animatedPhoto = `${clsx(
    { [photoAnimationStyles.photoEntering]: !exit },
    {
      [photoAnimationStyles.photoExiting]: exit,
    }
  )}`;

  let cardAnimation = `${clsx(cardAnimationStyles.cardEntering, {
    [cardAnimationStyles.cardExiting]: exit,
  })}`;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {/* {matchesBigScreens && (
        <CardPhotoContainer>
          <Photo
            className={animatedPhoto}
            alt={photo.alternativeText}
            src={photo}
          />
        </CardPhotoContainer>
      )} */}
      {slides.map(({ photo, content, linkText, linkTo, title }, index) => (
        <CardWrapper
          className={slideIndex === index && cardAnimation}
          onAnimationEnd={slideIndex === index && exitAnimationEnd}
          sx={{
            display: slideIndex === index ? 'block' : 'none',
            position: slideIndex !== index && 'absolute',
            top: 0,
          }}
        >
          <Box sx={{ marginBottom: '1.7em' }}>
            <Typography
              component="h4"
              variant="carouselCardTitle"
              sx={{
                paddingBottom: '1.1em',
                px: '1em',
              }}
            >
              {title}
            </Typography>

            <Markdown content={content} carousel />
          </Box>
          {linkTo && <Button linkText={linkText} linkTo={linkTo} />}
        </CardWrapper>
      ))}
    </Box>
  );
};

export default Card;
