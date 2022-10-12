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
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { slideCard, slidePhoto } from 'components/models/Carousel/styles';
import clsx from 'clsx';

const Card = ({ exit, card, exitAnimationEnd }) => {
  const { photo, content, buttonText, page, title, sectionTitle } = card;
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
        component="div"
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: [
            theme.spacing(0),
            theme.spacing(0),
            theme.spacing(-3.5),
            theme.spacing(-9),
          ],
          width: { md: '75%', lg: '70%' },
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
          sx={{ pb: '2em' }}
          onAnimationEnd={exitAnimationEnd}
        >
          <Typography
            component="h4"
            variant="cardTitle"
            sx={{ paddingBottom: '1em', color: 'black' }}
          >
            {title}
          </Typography>
          <ReactMarkdown
            className={style.reactMarkDown}
            escapeHTML={true}
            remarkPlugins={[gfm]}
            children={content}
            style={{ paddingBottom: '1em', color: 'black' }}
          />

          <Button
            buttonText={buttonText}
            buttonTo={page}
            sectionTitle={sectionTitle}
          />
        </CardWrapper>
      </Box>
    </>
  );
};

export default Card;
