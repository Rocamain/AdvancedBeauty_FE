import { useState } from 'react';
import useFetchData from '../../../hooks/useFetchData';

import {
  CarouselContainer,
  CarouselHero,
  SlideContainer,
} from './styled/index';
import { Typography } from '@mui/material';

export default function Carousel({ path }) {
  const { data } = useFetchData(path, 'carousel');
  const [slide, setSlide] = useState(0);

  return (
    data && (
      <CarouselContainer
        sx={{ backgroundImage: `url(${data.carousel.background.url})` }}
      >
        <CarouselHero>
          <Typography component="h1" variant={data.carousel.variantTitle.title}>
            {data.carousel.title}
          </Typography>
          <Typography
            component="h4"
            variant={data.carousel.variantSubtitle.title}
          >
            {data.carousel.subtitle}
          </Typography>
        </CarouselHero>
        <SlideContainer />
      </CarouselContainer>
    )
  );
}
