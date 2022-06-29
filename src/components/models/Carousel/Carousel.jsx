import { useState } from 'react';

import clsx from 'clsx';
import { Typography } from '@mui/material';
import {
  CarouselContainer,
  SlideContainer,
  CarouselHero,
  ChevronButton,
} from 'components/models/Carousel/styled';
import Card from 'components/shared/Card';
import { slideCard, slidePhoto } from './styles.js';

export default function Carousel({ cards, background }) {
  const [slide, setSlide] = useState(0);
  const [exit, setExit] = useState(false);

  const handleClick = (e) => {
    const increment = e.currentTarget.value === 'right' ? +1 : -1;
    const newIndex = (slide + increment + cards.length) % cards.length;

    setExit(true);

    setTimeout(() => {
      setSlide(newIndex);
      setExit(false);
    }, 500);
  };

  // ANIMATIONS

  let photoAnimationStyles = slidePhoto();
  let cardAnimationStyles = slideCard();

  let animatedPhoto = `${clsx(photoAnimationStyles.photoEntering, {
    [photoAnimationStyles.photoExiting]: exit,
  })}`;

  let cardAnimation = `${clsx(cardAnimationStyles.cardEntering, {
    [cardAnimationStyles.cardExiting]: exit,
  })}`;

  return (
    <CarouselContainer url={background.url}>
      <CarouselHero>
        <Typography variant="carouselTitle">2U Aesthetics </Typography>
        <Typography variant="carouselSubtitle">Advanced Beauty</Typography>
      </CarouselHero>
      <SlideContainer>
        <ChevronButton
          className="ChevronButton ChevronButton-left"
          value="left"
          disableRipple={true}
          onClick={handleClick}
        />

        <Card
          className="card"
          cards={cards}
          animatedPhoto={animatedPhoto}
          cardAnimation={cardAnimation}
          slide={slide}
        />

        <ChevronButton
          className="ChevronButton ChevronButton-right"
          value="right"
          disableRipple={true}
          onClick={handleClick}
        />
      </SlideContainer>
    </CarouselContainer>
  );
}
