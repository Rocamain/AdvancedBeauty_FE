import { useState, useLayoutEffect } from 'react';
import useNearScreen from 'hooks/useNearScreen.js';
import { keyframes } from '@emotion/react';
import { Box } from '@mui/material';

const fadeOutAnimation = keyframes`
    0% {
      opacity: 0;
      height: 0;
    }
    50% {
      opacity: 0.2;
      height: auto;
    }
    100% {
      opacity: 1;
      height: auto;
    }
  `;

const getWindowHeight = () => {
  const { innerHeight: height } = window;
  return height;
};

export default function Icon({ showTitle, iconFullSize, icon }) {
  const [distance, setDistance] = useState();
  const { fromRef, isNearScreen } = useNearScreen({
    distance: distance,
  });

  useLayoutEffect(() => {
    const height = getWindowHeight();
    setDistance(`${Math.floor(-height / 3)}px`);
  }, []);

  return (
    <div ref={fromRef}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: showTitle ? '1.5em' : '1em',

          height: {
            xs: iconFullSize ? '150px' : '80px',
            md: iconFullSize ? '150px' : '100px',
            xll: iconFullSize ? '150px' : '128px',
          },
        }}
      >
        <Box
          component="img"
          loading="lazy"
          alt={icon.alternativeText}
          sx={{
            opacity: 0,
            height: 0,
            animation:
              isNearScreen && `${fadeOutAnimation} 0.7s linear forwards 0.2s`,

            objectFit: 'contain',

            content: {
              xs: `url(${icon.url})`,
            },

            maxWidth: {
              xs: iconFullSize ? '240px' : '80px',
              md: iconFullSize ? '220px' : '100px',
              xll: iconFullSize ? '250px' : '128px',
            },

            maxHeight: {
              xs: iconFullSize ? 'auto' : '80px',
              md: iconFullSize ? 'auto' : '100px',
              xll: iconFullSize ? 'inherit' : '128px',
            },
          }}
        />
      </Box>
    </div>
  );
}
