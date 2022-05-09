import { useState, useRef, useEffect } from 'react';
import useFetchData from 'hooks/useFetchData';
import useChildOverlap from 'hooks/useGetHeight';
import {
  CarouselContainer,
  CarouselHero,
  SlideContainer,
  SlideShowWrapper,
  ChevronButton,
  ChevronButto,
} from 'components/models/carousel/styled';
import { Typography } from '@mui/material';
import Card from 'components/shared/Card';

export default function Carousel({ path, data }) {
  // const { data } = useFetchData(path, 'carousel');

  const [slide, setSlide] = useState(0);

  // Refs
  const overlapContainer = useRef(null);

  const { height, top } = useChildOverlap(overlapContainer, data);

  return (
    <>
      <CarouselContainer
        sx={{
          backgroundImage: `url(${data.background.url})`,
          height: { height },
        }}
      >
        <CarouselHero>
          <Typography component="h1" variant={data.variantTitle.title}>
            {data.title}
          </Typography>
          <Typography component="h4" variant={data.variantSubtitle.title}>
            {data.subtitle}
          </Typography>
        </CarouselHero>
        <SlideContainer
          sx={{
            height: { height },
          }}
        >
          <ChevronButton value="left" />
          <Card ref={overlapContainer} top={top}>
            <Typography component="h4" variant={data.variantSubtitle.title}>
              {data.cards[slide].title}
            </Typography>
            <Typography component="p">{data.cards[slide].content}</Typography>
          </Card>
          <ChevronButton value="right" />
        </SlideContainer>
      </CarouselContainer>
    </>
  );
}
