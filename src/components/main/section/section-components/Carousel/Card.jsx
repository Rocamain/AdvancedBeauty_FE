import { useMediaQuery, Typography, Box, useTheme } from '@mui/material';
import Button from 'components/shared/Button';
import { CardWrapper } from 'components/main/section/section-components/Carousel/styled/index.jsx';
import PhotoCarousel from 'components/main/section/section-components/Carousel/PhotoCarousel.jsx';
import Markdown from 'components/shared/MarkDown.jsx';

const Card = ({ card, animation }) => {
  const theme = useTheme();
  const { photo, content, linkText, linkTo, title } = card;
  const matchesBigScreens = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {matchesBigScreens && (
        <PhotoCarousel
          alt={photo.alternativeText}
          src={photo.url}
          animation={animation}
        />
      )}
      <CardWrapper animation={animation}>
        <Box sx={{ marginBottom: '1.7em' }}>
          <Typography
            component='h4'
            variant='carouselCardTitle'
            sx={{
              paddingBottom: '1.1em',
              px: '1em',
            }}
          >
            {title}
          </Typography>
          <Markdown content={content} carousel />
        </Box>
        {linkTo && <Button linkText={linkText} linkTo={linkTo} />}
      </CardWrapper>
    </Box>
  );
};

export default Card;
