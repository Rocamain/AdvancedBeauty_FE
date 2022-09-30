import { useState, useRef, useEffect } from 'react';

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

export default function Carousel({
  slides,
  background,
  sectionTitle,
  ...rest
}) {
  const [slide, setSlide] = useState(0);
  const [exit, setExit] = useState(false);
  const [height, setHeight] = useState(false);
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      const elHeight = ref.current.getBoundingClientRect().height;
      setHeight(elHeight);
    }
  }, [ref]);

  const handleClick = (e) => {
    const increment = e.currentTarget.value === 'right' ? +1 : -1;
    const newIndex = (slide + increment + slides.length) % slides.length;

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
        <Typography variant="carouselTitle">{sectionTitle.title} </Typography>
        <Typography variant="carouselSubtitle">Advanced Beauty</Typography>
      </CarouselHero>
      <div ref={ref}>
        <SlideContainer height={height ? height : undefined}>
          <ChevronButton
            className="ChevronButton ChevronButton-left"
            value="left"
            disableRipple={true}
            onClick={handleClick}
          />

          <Card
            className="card"
            cards={slides}
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
      </div>
    </CarouselContainer>
  );
}
