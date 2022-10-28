import React, { Suspense, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import useNearScreen from 'hooks/useNearScreen.js';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useLocation, useNavigationType } from 'react-router-dom';
import { Loading } from 'components/shared/index';

const getMarginTop = ({
  type,
  isFirstChild,
  isFirstColumnPhoto,
  matchesBigScreens,
  matchesBigMobiles,
}) => {
  if (matchesBigScreens) {
    const marginTop = {
      'full-cards': `calc( ${isFirstChild ? 0 : '10vw'} + 160px)`,
      'full-photo': `calc( ${isFirstChild ? 0 : '10vw'} + 244px)`,
      'right-cards': `calc( ${isFirstChild ? 0 : '10vw'})`,
      'right-photo': `calc( ${isFirstChild ? 0 : '10vw'} + 64px)`,
      'mixed leaves and right-cards': 0,
      'mixed leaves and right-photo': `calc( ${
        isFirstChild ? 0 : '10vw'
      } + 64px)`,

      'none-cards': 0,
      'none-photo': `calc( ${isFirstChild ? 0 : '10vw'} + 64px)`,
    };
    return marginTop[type];
  }
  if (matchesBigMobiles) {
    if (isFirstColumnPhoto) {
      if (type === 'full-cards') {
        return `calc( ${isFirstChild ? 0 : '10vw'} + 240px)`;
      }

      return `calc( ${isFirstChild ? 0 : '10vw'} + 80px)`;
    }
    if (
      type === 'full-cards' ||
      type === 'full-photo' ||
      type === 'right-cards'
    )
      return `calc( ${isFirstChild ? 0 : '10vw'} + 160px)`;
  }

  return 0;
};
const getMarginBottom = ({ type, matchesBigScreens, matchesBigMobiles }) => {
  const margin = matchesBigScreens ? '10vw' : '10vw';

  if (matchesBigScreens) {
    const marginBottom = {
      'full-cards': `calc( ${margin} +  354px)`,
      'full-photo': `calc( ${margin} + 160px)`,
      'right-cards': `calc( ${margin} +  160px)`,
      'right-photo': `${margin}`,
      'mixed leaves and right-cards': `${margin}`,
      'mixed leaves and right-photo': `${margin}`,
      'none-cards': `calc( ${margin} +  160px)`,
      'none-photo': `${margin}`,
    };

    return marginBottom[type];
  }
  if (matchesBigMobiles) {
    const marginBottom = {
      'full-cards': `calc( ${margin} +  160px)`,
      'full-photo': `calc( ${margin} + 160px)`,
      'right-cards': `${margin}`,
      'right-photo': `${margin}`,
      'mixed leaves and right-cards': `${margin}`,
      'mixed leaves and right-photo': `${margin}`,
      'none-cards': `${margin}`,
      'none-photo': `${margin}`,
    };

    return marginBottom[type];
  }

  return margin;
};

const GridA = React.lazy(() => import('components/models/GridA/GridA.jsx'));

const LazyGridA = ({ data, sectionTitle, firstChild }) => {
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '400px',
  });
  const { hash, pathname } = useLocation();
  const [loaded, setLoaded] = useState(false);
  const navigationType = useNavigationType();
  const isPushNavigation = navigationType === 'PUSH';
  const { photoColumn, show, backgroundType } = data;
  const theme = useTheme();
  const matchesBigScreens = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });
  const matchesBigMobiles = useMediaQuery(
    theme.breakpoints.between('sm', 'md'),
    {
      noSsr: true,
    }
  );
  const isFirstChild = Boolean(firstChild);

  useEffect(() => {
    if (fromRef.current && isNearScreen) {
      const sectionId = '#' + fromRef.current.id;

      if (sectionId === hash) {
        const HeaderHeight = Math.round(
          document.documentElement.clientHeight * 0.23
        );
        const section = fromRef.current;
        const offsetTop = section.offsetTop - HeaderHeight;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    }
  }, [fromRef, isNearScreen, hash, isPushNavigation, pathname, loaded]);

  return (
    <Box
      onLoad={() => setLoaded(true)}
      component="section"
      id={sectionTitle.title.replaceAll(' ', '-')}
      ref={fromRef}
      sx={(theme) => {
        const isFirstColumnPhoto = show === 'photo' && photoColumn === 'first';
        return {
          minHeight: isNearScreen ? 'auto' : '40vh',
          marginTop: getMarginTop({
            type: `${backgroundType}-${show}`,
            isFirstChild,
            isFirstColumnPhoto,
            matchesBigScreens,
            matchesBigMobiles,
          }),
          marginBottom: getMarginBottom({
            type: `${backgroundType}-${show}`,
            matchesBigScreens,
            matchesBigMobiles,
          }),

          backgroundImage:
            backgroundType === 'full' &&
            'linear-gradient(90deg,#75c9cc 0%,#00bccc 100%)',

          display: backgroundType === 'full' && 'flex',
        };
      }}
    >
      <Suspense fallback={<Loading title="gridA" />}>
        {isNearScreen && <GridA {...data} />}
      </Suspense>
    </Box>
  );
};

export default LazyGridA;
