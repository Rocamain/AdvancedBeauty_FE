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

export default function Carousel({ path }) {
  const { data } = useFetchData(path, 'carousel');

  const [slide, setSlide] = useState(0);

  // Refs
  const overlapContainer = useRef(null);

  const { height, top } = useChildOverlap(overlapContainer, data);

  return (
    data && (
      <>
        <CarouselContainer
          sx={{
            backgroundImage: `url(${data.carousel[0].background.url})`,
            height: { height },
          }}
        >
          <CarouselHero>
            <Typography
              component="h1"
              variant={data.carousel[0].variantTitle.title}
            >
              {data.carousel[0].title}
            </Typography>
            <Typography
              component="h4"
              variant={data.carousel[0].variantSubtitle.title}
            >
              {data.carousel[0].subtitle}
            </Typography>
          </CarouselHero>
          <SlideContainer
            sx={{
              height: { height },
            }}
          >
            <ChevronButton value="left" />
            <Card ref={overlapContainer} top={top}>
              <Typography
                component="h4"
                variant={data.carousel[0].variantSubtitle.title}
              >
                {data.carousel[0].cards[slide].title}
              </Typography>
              <Typography component="p">
                {data.carousel[0].cards[slide].content}
              </Typography>
            </Card>
            <ChevronButton value="right" />
          </SlideContainer>
        </CarouselContainer>
      </>
    )
  );
}
