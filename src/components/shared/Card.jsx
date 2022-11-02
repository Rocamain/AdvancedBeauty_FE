import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import clsx from 'clsx';
import { Typography, Box } from '@mui/material';
import Button from 'components/shared/Button';
import {
  CardWrapper,
  Photo,
  CardPhotoContainer,
} from 'components/models/Carousel/styled';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import style from 'styles/markdown-styles.module.css';
import { slideCard, slidePhoto } from 'components/models/Carousel/styles';

const Card = ({ exit, card, exitAnimationEnd }) => {
  const { photo, content, linkText, linkTo, title } = card;
  const theme = useTheme();
  const matchesBigScreens = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });

  let photoAnimationStyles = slidePhoto();
  let cardAnimationStyles = slideCard();

  let animatedPhoto = `${clsx(photoAnimationStyles.photoEntering, {
    [photoAnimationStyles.photoExiting]: exit,
  })}`;

  let cardAnimation = `${clsx(cardAnimationStyles.cardEntering, {
    [cardAnimationStyles.cardExiting]: exit,
  })}`;

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          maxWidth: '1200px',
        }}
      >
        {matchesBigScreens && (
          <CardPhotoContainer>
            <Photo
              alt={photo.alternativeText}
              src={photo}
              className={animatedPhoto}
            />
          </CardPhotoContainer>
        )}

        <CardWrapper
          className={cardAnimation}
          sx={{
            display: { xs: 'flex', md: 'block' },
            justifyContent: ['flex-start'],
            flexDirection: 'column',
          }}
          onAnimationEnd={exitAnimationEnd}
        >
          <Typography
            component="h4"
            variant="cardTitle"
            sx={{
              paddingBottom: '0.5em',
            }}
          >
            {title}
          </Typography>

          <ReactMarkdown
            className={style.reactMarkDownGridA}
            escapeHTML={true}
            remarkPlugins={[gfm]}
            children={content}
          />

          {linkTo && <Button linkText={linkText} linkTo={linkTo} />}
        </CardWrapper>
      </Box>
    </>
  );
};

export default Card;
