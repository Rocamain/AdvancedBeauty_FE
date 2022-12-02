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

export default function Icon({ showTitle, iconFullSize, icon }) {
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '-20%',
  });

  return (
    <Box ref={fromRef}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: !iconFullSize
            ? { xs: '2em', md: '1.2em' }
            : showTitle
            ? '5 em'
            : { xs: '0.5em', md: '1em' },

          height: {
            xs: iconFullSize ? '120px' : '90px',
            sm: iconFullSize ? '130px' : '90px',
            md: iconFullSize ? '130px' : '95px',
            xl: iconFullSize ? '140px' : '100px',
          },
        }}
      >
        <Box
          component="img"
          // loading="lazy"
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

            // width: 'inherit',
            // maxHeight: {
            //   xs: 'inherit',
            //   // md: iconFullSize ? 'auto' : '100px',
            //   // xll: iconFullSize ? 'inherit' : '128px',
            // },
          }}
        />
      </Box>
    </Box>
  );
}
