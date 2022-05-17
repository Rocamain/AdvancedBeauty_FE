import { useState } from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

import {
  CarouselContainer,
  SlideContainer,
  CarouselHero,
  ChevronButton,
} from 'components/models/carousel/styled';

import Card from 'components/shared/Card';

const usePhotoAnimation = makeStyles((theme) => ({
  animatedItem: {
    boxShadow: '0px 12px 18px -6px rgb(0 0 0 / 30%)',

    animation: `$myEffect 1200ms ${theme.transitions.easing.easeInOut}`,
  },
  animatedItemExiting: {
    animation: `$myEffectExit 500ms ${theme.transitions.easing.easeInOut}`,
    opacity: 0,
  },
  '@keyframes myEffect': {
    '0%': {
      opacity: 0,
      transform: 'translateX(-25%)',
    },
    '50%': {
      opacity: 0.2,
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  '@keyframes myEffectExit': {
    '0%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  },
}));

export default function Carousel({ path, data }) {
  // const { data } = useFetchData(path, 'carousel');

  const [slide, setSlide] = useState(0);
  const [exit, setExit] = useState(false);

  let animationStyles = usePhotoAnimation();
  let animatedPhoto = `${clsx(animationStyles.animatedItem, {
    [animationStyles.animatedItemExiting]: exit,
  })}`;

  const handleClick = (e) => {
    console.log('clicked');
  };
  console.log(data);

  return (
    <>
      <CarouselContainer url={data.background.url}>
        <CarouselHero>
          <Typography variant={data.variantTitle.title}>
            {data.title}
          </Typography>
          <Typography variant={data.variantSubtitle.title}>
            {data.subtitle}
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
            slide={slide}
          />

          <ChevronButton
            className="ChevronButton ChevronButton-right"
            value="right"
            disableRipple={true}
          />
        </SlideContainer>
      </CarouselContainer>
    </>
  );
}
