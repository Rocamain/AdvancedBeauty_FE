import { useState } from 'react';
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
  const [exit, setExit] = useState(false);
  const [card, setCard] = useState(() => slides[slideIndex]);
  const theme = useTheme();
  const matchesBigScreens = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });

  const handleClick = (e) => {
    const increment = e.currentTarget.value === 'right' ? +1 : -1;
    console.log(
      { increment },
      (slideIndex + increment + slides.length) % slides.length
    );

    const newIndex = (slideIndex + increment + slides.length) % slides.length;
    setSlideIndex(newIndex);
    setExit(true);
    console.log('clicked', newIndex, slides);
  };

  const exitAnimationEnd = (e) => {
    const isExitAnimation = e.animationName.includes('cardOut');
    if (isExitAnimation) {
      setExit(false);
      setCard(slides[slideIndex]);
    }
  };

  return (
    <CarouselContainer url={background}>
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

            <Card
              slideIndex={slideIndex}
              slides={slides}
              exit={exit}
              card={card}
              exitAnimationEnd={exitAnimationEnd}
            />

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
