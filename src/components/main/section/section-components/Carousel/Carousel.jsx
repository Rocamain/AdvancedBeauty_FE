import { useState, useRef, useEffect } from 'react';
import { useMediaQuery, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  CarouselContainer,
  SlideContainer,
  CarouselHero,
  ChevronButton,
} from 'components/main/section/section-components/Carousel/styled';
import Card from 'components/shared/Card';

export default function Carousel({ background, title, subtitle, slides }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [height, setHeight] = useState();
  const ref = useRef(null);
  const [exit, setExit] = useState(false);
  const [card, setCard] = useState(() => slides[slideIndex]);
  const theme = useTheme();
  const matchesBigScreens = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });

  useEffect(() => {
    if (ref.current && !height) {
      const cardHeight =
        ref.current.children[0].children[0].getBoundingClientRect().height;

      setHeight(cardHeight);
    }
  }, [ref, height]);
  const handleClick = (e) => {
    const increment = e.currentTarget.value === 'right' ? +1 : -1;
    const newIndex = (slideIndex + increment + slides.length) % slides.length;
    setExit(true);
    setSlideIndex(newIndex);
  };
  const exitAnimationEnd = (e) => {
    const isExitAnimation = e.animationName.includes('cardOut');
    if (isExitAnimation) {
      setExit(false);
      setCard(slides[slideIndex]);
    }
  };

  return (
    <CarouselContainer
      sx={{
        // padding: '10em 0',

        // overflowX: 'hidden',
        // display: 'flex',
        // alignContent: 'center',
        position: 'relative',
      }}
      url={background.formats}
    >
      {matchesBigScreens && (
        <CarouselHero>
          <Typography
            component="h1"
            variant="carouselTitle"
            sx={{ mb: '15px' }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              component="h2"
              variant="carouselSubtitle"
              sx={{ mb: '10px', textAlign: 'right' }}
            >
              {subtitle}
            </Typography>
          )}
        </CarouselHero>
      )}

      {card && (
        <Box sx={{ position: 'relative', top: '200px' }}>
          <SlideContainer sx={{ height: '400px' }}></SlideContainer>

          <Box
            display="flex"
            height="400px"
            sx={{ position: 'relative', top: '-400px' }}
          >
            <ChevronButton
              className="ChevronButton ChevronButton-left"
              value="left"
              onClick={handleClick}
            />

            <Card card={card} exit={exit} exitAnimationEnd={exitAnimationEnd} />

            <ChevronButton
              className="ChevronButton ChevronButton-right"
              value="right"
              onClick={(e) => handleClick(e)}
            />
          </Box>
        </Box>
      )}
    </CarouselContainer>
  );
}
