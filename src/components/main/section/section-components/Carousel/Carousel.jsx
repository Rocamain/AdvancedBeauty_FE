import { useState, useEffect } from 'react';
import { useMediaQuery, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  CarouselContainer,
  SlideContainer,
  CarouselHero,
  ChevronButton,
} from 'components/main/section/section-components/Carousel/styled/index.jsx';
import Card from 'components/main/section/section-components/Carousel/Card.jsx';

export default function Carousel({ background, title, subtitle, slides }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [animationExit, setAnimationExit] = useState(false);
  const [animationEnter, setAnimationEnter] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const [isPhotoLoaded, setPhotoLoaded] = useState(false);
  const [card, setCard] = useState(slides[slideIndex]);
  const theme = useTheme();
  const matchesBigScreens = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });

  // EFFECT FOR MOBILES. On mount wait 1 second to start animation.

  useEffect(() => {
    let timer;

    if (matchesBigScreens === false && initialLoad) {
      timer = setTimeout(() => {
        setInitialLoad(false);
        setAnimationEnter(true);
      }, 1000);
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ON BIG SCREENS. Once the image is loaded On wait 1 second to start animation.

  const onLoad = () => {
    // time out will apply on initial load,

    if (initialLoad) {
      setTimeout(() => {
        // set image as loaded

        setPhotoLoaded(true);
        setInitialLoad(false);
      }, 1000);
    }
    if (!initialLoad) {
      setPhotoLoaded(true);
      setAnimationExit(false);
    }
  };

  // Once the isPhotoLoaded start the animation to enter the card

  useEffect(() => {
    if (matchesBigScreens && isPhotoLoaded) {
      setAnimationEnter(true);
    }
  }, [matchesBigScreens, isPhotoLoaded, card]);

  // On click set the exit the card and set a the new index.

  const handleClick = (e) => {
    const increment = e.currentTarget.value === 'right' ? +1 : -1;
    const newIndex = (slideIndex + increment + slides.length) % slides.length;

    setSlideIndex(newIndex);
    setAnimationExit(true);
    setAnimationEnter(false);
    setPhotoLoaded(false);
  };

  // On Exit  animation End set the new card with index set on click event
  const exitAnimationEnd = (e) => {
    const isExitAnimation = e.target.id === 'card out';

    if (isExitAnimation) {
      if (matchesBigScreens && !initialLoad) {
        // On big screen will check is the image is already loaded, as load event will note triggered.

        const currentPhoto = card.photo.url;
        const newPhoto = slides[slideIndex].photo.url;
        const isAlreadyLoaded = currentPhoto === newPhoto;

        if (isAlreadyLoaded) {
          setAnimationExit(false);
          setPhotoLoaded(true);
        }
      } else {
        // on Mobile once the animation end will reverse the states on exit and enter
        setAnimationExit(false);
        setAnimationEnter(true);
      }
      setCard(slides[slideIndex]);
    }
  };
  return (
    <CarouselContainer onLoad={onLoad} url={background.url}>
      {matchesBigScreens && (
        <CarouselHero>
          <Typography
            component='h1'
            variant='carouselTitle'
            sx={{ mb: '15px' }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              component='h2'
              variant='carouselSubtitle'
              sx={{ textAlign: 'right' }}
            >
              {subtitle}
            </Typography>
          )}
        </CarouselHero>
      )}
      <Box
        sx={{
          height: '300px',
          margin: 'auto',
          width: '100%',
        }}
      >
        <SlideContainer sx={{ height: '300px' }} />
        <Box
          display='flex'
          height='300px'
          sx={{
            position: 'relative',
            top: '-300px',
            alignItems: 'center',
          }}
        >
          <ChevronButton
            className='ChevronButton ChevronButton-left'
            value='left'
            onClick={handleClick}
            disableRipple
          />
          <Card
            enter={animationEnter}
            exit={animationExit}
            card={card}
            exitAnimationEnd={exitAnimationEnd}
          />
          <ChevronButton
            className='ChevronButton ChevronButton-right'
            value='right'
            onClick={(e) => handleClick(e)}
            disableRipple
          />
        </Box>
      </Box>
    </CarouselContainer>
  );
}
