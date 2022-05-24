import { useState } from 'react';
import useNearScreen from 'hooks/useNearScreen';
import useAlignTitle from 'hooks/useAlignTitle';
import { Typography } from '@mui/material';

import clsx from 'clsx';

import {
  CarouselContainer,
  SlideContainer,
  CarouselHero,
  ChevronButton,
} from 'components/models/carousel/styled';
import { slideCard, slidePhoto } from './carousel/styles.js';

import Card from 'components/shared/Card';

export default function Carousel({ path, data, id }) {
  const [slide, setSlide] = useState(0);
  const [exit, setExit] = useState(false);
  const { fromRef, isNearScreen } = useNearScreen();
  const { ref, coords } = useAlignTitle(isNearScreen);

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

  console.log(coords.top);
  return (
    <div ref={fromRef} style={{ marginBottom: '14vw' }}>
      {isNearScreen ? (
        <>
          {coords.top && (
            <CarouselHero left={coords?.left} top={coords?.top}>
              <Typography variant={data.variantTitle.title}>
                {data.title}
              </Typography>
              <Typography variant={data.variantSubtitle.title}>
                {data.subtitle}
              </Typography>
            </CarouselHero>
          )}
          <CarouselContainer url={data.background.url}>
            <SlideContainer>
              <ChevronButton
                className="ChevronButton ChevronButton-left"
                value="left"
                disableRipple={true}
                onClick={handleClick}
              />

              <Card
                ref={ref}
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
