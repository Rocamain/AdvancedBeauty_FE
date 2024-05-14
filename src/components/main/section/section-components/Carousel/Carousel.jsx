import { useState, useEffect } from 'react';
import { useMediaQuery, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  CarouselContainer,
  SlideContainer,
  CarouselHero,
  ChevronButton,
} from 'components/main/section/section-components/Carousel/styled/index.jsx';
import Card from 'components/main/section/section-components/Carousel/Card.jsx';

export default function Carousel({ background, title, subtitle, slides }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [animation, setAnimation] = useState('idle');
  const [card, setCard] = useState(slides[slideIndex]);
  const theme = useTheme();
  const matchesBigScreens = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });

  // EFFECT FOR MOBILES. On mount wait 1 second to start animation.

  useEffect(() => {
    let timer;

    if (animation === 'exit') {
      timer = setTimeout(() => {
        setCard(slides[slideIndex]);
        setAnimation('enter');
      }, 1000);
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animation]);

  // On click set the exit the card and set a the new index.

  const handleClick = (e) => {
    const increment = e.currentTarget.value === 'right' ? +1 : -1;
    const newIndex = (slideIndex + increment + slides.length) % slides.length;
    setAnimation((prev) => {
      return 'exit';
    });
    setSlideIndex(newIndex);
  };

  return (
    <CarouselContainer url={background.url}>
      {matchesBigScreens && (
        <CarouselHero>
          <Typography
            component='h1'
            variant='carouselTitle'
            sx={{ mb: '15px' }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              component='h2'
              variant='carouselSubtitle'
              sx={{ textAlign: 'right' }}
            >
              {subtitle}
            </Typography>
          )}
        </CarouselHero>
      )}
      <Box
        sx={{
          height: '300px',
          margin: 'auto',
          width: '100%',
        }}
      >
        <SlideContainer sx={{ height: '300px' }} />
        <Box
          display='flex'
          height='300px'
          sx={{
            position: 'relative',
            top: '-300px',
            alignItems: 'center',
          }}
        >
          <ChevronButton
            className='ChevronButton ChevronButton-left'
            value='left'
            onClick={handleClick}
            disableRipple
          />
          <Card animation={animation} card={card} />
          <ChevronButton
            className='ChevronButton ChevronButton-right'
            value='right'
            onClick={(e) => handleClick(e)}
            disableRipple
          />
        </Box>
      </Box>
    </CarouselContainer>
  );
}
