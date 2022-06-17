import { useState } from 'react';
import useNearScreen from 'hooks/useNearScreen';
import clsx from 'clsx';
import { Typography } from '@mui/material';
import {
  CarouselContainer,
  SlideContainer,
  CarouselHero,
  ChevronButton,
} from 'components/models/carousel/styled';
import Card from 'components/shared/Card';
import { slideCard, slidePhoto } from './carousel/styles.js';

export default function Carousel({ data, id }) {
  const [slide, setSlide] = useState(0);
  const [exit, setExit] = useState(false);
  const { fromRef, isNearScreen } = useNearScreen();

  const handleClick = (e) => {
    const increment = e.currentTarget.value === 'right' ? +1 : -1;
    const newIndex =
      (slide + increment + data.cards.length) % data.cards.length;

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
    <div id={id} ref={fromRef} style={{ marginBottom: '14vw' }}>
      {/* LAZY LOAD */}

      {isNearScreen ? (
        <>
          <CarouselContainer url={data.background.url}>
            <CarouselHero>
              <Typography variant="carouselTitle">2U Aesthetics </Typography>
              <Typography variant="carouselSubtitle">
                Advanced Beauty
              </Typography>
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
                cards={data.cards}
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
        </>
      ) : null}
    </div>
  );
}
