import { useState, useEffect } from 'react';
import { useMediaQuery, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  CarouselContainer,
  SlideContainer,
  CarouselHero,
  ChevronButton,
} from 'components/main/section/section-components/Carousel/styled';
import Card from 'components/main/section/section-components/Carousel/Card';

export default function Carousel({ background, title, subtitle, slides }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [exit, setExit] = useState(false);
  const [card, setCard] = useState(null);
  const theme = useTheme();
  const matchesBigScreens = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });

  useEffect(() => {
    if (!exit) {
      setCard(slides[slideIndex]);
    }
  }, [slideIndex, slides, exit]);

  const handleClick = (e) => {
    const increment = e.currentTarget.value === 'right' ? +1 : -1;
    const newIndex = (slideIndex + increment + slides.length) % slides.length;
    setSlideIndex(newIndex);
    setExit(true);
  };

  const exitAnimationEnd = (e) => {
    const isExitAnimation = e.target.id === 'card out';
    if (isExitAnimation) {
      setExit(false);
      setCard(slides[slideIndex]);
    }
  };

  return (
    <CarouselContainer url={background.url}>
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
        <Box
          id="slide container"
          sx={{
            height: ['300px', '300px'],
            margin: 'auto',
            width: '100%',
          }}
        >
          <SlideContainer sx={{ height: ['300px', '300px'] }} />

          <Box
            display="flex"
            height={['300px', '300px']}
            sx={{
              position: 'relative',
              top: ['-300px', '-300px'],
              alignItems: 'center',
            }}
          >
            <ChevronButton
              className="ChevronButton ChevronButton-left"
              value="left"
              onClick={handleClick}
              disableRipple
            />
            {
              <Box id="carousel-card">
                <Card
                  exit={exit}
                  card={card}
                  exitAnimationEnd={exitAnimationEnd}
                />
              </Box>
            }
            <ChevronButton
              className="ChevronButton ChevronButton-right"
              value="right"
              onClick={(e) => handleClick(e)}
              disableRipple
            />
          </Box>
        </Box>
      )}
    </CarouselContainer>
  );
}
