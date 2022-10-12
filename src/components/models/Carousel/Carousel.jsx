import { useState, useRef, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useFetchData from 'hooks/useFetchData';
import { Typography } from '@mui/material';
import {
  CarouselContainer,
  SlideContainer,
  CarouselHero,
  ChevronButton,
} from 'components/models/Carousel/styled';
import Card from 'components/shared/Card';
import { Loading } from 'components/shared/index';

export default function Carousel({ path, id }) {
  const { data, loading } = useFetchData('strapi', {
    path,
    component: 'carousel',
    id: id,
  });
  const [loaded, setLoaded] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [exit, setExit] = useState(false);
  const [card, setCard] = useState(null);
  const [height, setHeight] = useState('auto');
  const ref = useRef();
  const theme = useTheme();
  const matchesBigScreens = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });

  useEffect(() => {
    if (data) {
      setCard(data[0].slides[slideIndex]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (ref.current && card && !loaded) {
      const elHeight = ref.current.getBoundingClientRect().height;
      setHeight(elHeight);
      setLoaded(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, card]);

  if (loading) {
    return <Loading />;
  }

  const { background, sectionTitle, slides } = data[0];

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
          <Typography variant="carouselSubtitle">Advanced Beauty</Typography>
        </CarouselHero>
      )}
      <div ref={ref}>
        <SlideContainer height={height}>
          <ChevronButton
            className="ChevronButton ChevronButton-left"
            value="left"
            disableRipple={true}
            onClick={handleClick}
          />

          {card && (
            <Card card={card} exit={exit} exitAnimationEnd={exitAnimationEnd} />
          )}

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
