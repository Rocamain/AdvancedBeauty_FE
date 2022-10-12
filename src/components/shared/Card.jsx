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
          width: { sm: '60%', md: '80%', lg: '70%' },
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
        <Box
          sx={{
            width: {
              xs: '100%',
              md: '100%',
              lg: '70%',
              margin: '-100px auto',
              position: 'relative',
            },
          }}
        >
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
                paddingBottom: '1em',
                color: 'black',
                textAlign: 'center',
              }}
            >
              {title}
            </Typography>
            <Box sx={{ marginBottom: ['0.4m', '1em'] }}>
              <ReactMarkdown
                className={style.reactMarkDown}
                escapeHTML={true}
                remarkPlugins={[gfm]}
                children={content}
              />
            </Box>
            {linkTo && <Button linkText={linkText} linkTo={linkTo} />}
          </CardWrapper>
        </Box>
      </Box>
    </>
  );
};

export default Card;
