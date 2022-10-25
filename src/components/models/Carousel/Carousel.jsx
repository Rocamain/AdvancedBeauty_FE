import { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import {
  CarouselContainer,
  SlideContainer,
  CarouselHero,
  ChevronButton,
} from 'components/models/Carousel/styled';
import Card from 'components/shared/Card';

export default function Carousel({
  background,
  sectionTitle,
  subtitle,
  slides,
}) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [exit, setExit] = useState(false);
  const [card, setCard] = useState(() => slides[slideIndex]);

  const theme = useTheme();
  const matchesBigScreens = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });

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
    <CarouselContainer url={background.formats}>
      {matchesBigScreens && (
        <CarouselHero>
          <Typography variant="carouselTitle">{sectionTitle.title} </Typography>
          {subtitle && (
            <Typography variant="carouselSubtitle">{subtitle}</Typography>
          )}
        </CarouselHero>
      )}

      {card && (
        <SlideContainer>
          <ChevronButton
            className="ChevronButton ChevronButton-left"
            value="left"
            disableRipple={true}
            onClick={handleClick}
          />
          <Card card={card} exit={exit} exitAnimationEnd={exitAnimationEnd} />
          <ChevronButton
            className="ChevronButton ChevronButton-right"
            value="right"
            disableRipple={true}
            onClick={(e) => handleClick(e)}
          />
        </SlideContainer>
      )}
    </CarouselContainer>
  );
}
