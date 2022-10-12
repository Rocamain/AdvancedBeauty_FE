import { useState, useRef, useEffect } from 'react';
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

export default function Carousel({ slides, background, sectionTitle }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [exit, setExit] = useState(false);
  const [card, setCard] = useState(slides[slideIndex]);
  const [height, setHeight] = useState(false);
  const ref = useRef();
  const theme = useTheme();
  const matchesBigScreens = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });

  console.log(card, sectionTitle);
  useEffect(() => {
    if (ref.current) {
      const elHeight = ref.current.getBoundingClientRect().height;
      setHeight(elHeight);
    }
  }, [ref]);

  const exitAnimationEnd = (e) => {
    const isExitAnimation = e.animationName.includes('cardOut');
    if (isExitAnimation) {
      setExit(false);
      setCard(slides[slideIndex]);
    }
  };

  const handleClick = (e) => {
    const increment = e.currentTarget.value === 'right' ? +1 : -1;
    const newIndex = (slideIndex + increment + slides.length) % slides.length;
    setExit(true);
    setSlideIndex(newIndex);
  };

  return (
    <CarouselContainer url={background.formats}>
      {matchesBigScreens && (
        <CarouselHero>
          <Typography variant="carouselTitle">{sectionTitle.title} </Typography>
          <Typography variant="carouselSubtitle">Advanced Beauty</Typography>
        </CarouselHero>
      )}
      <div ref={ref}>
        <SlideContainer height={height ? height : undefined}>
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
            onClick={(e, ref) => handleClick(e, ref)}
          />
        </SlideContainer>
      </div>
    </CarouselContainer>
  );
}
