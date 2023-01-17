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

export default function Icon({ showTitle, isSizeBig, icon }) {
  const { fromRef, isNearScreen } = useNearScreen({
    distance: '-20%',
  });

  return (
    <Box ref={fromRef}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: !isSizeBig
            ? { xs: '2em', md: '1.2em' }
            : showTitle
            ? '5 em'
            : { xs: '0.5em', md: '1em' },

          height: {
            xs: isSizeBig ? '120px' : '90px',
            sm: isSizeBig ? '130px' : '90px',
            md: isSizeBig ? '130px' : '95px',
            xl: isSizeBig ? '140px' : '100px',
          },
        }}
      >
        <Box
          width={isSizeBig ? '280px' : '150px'}
          height={isSizeBig ? '140px' : '90px'}
          loading="lazy"
          alt={icon.alternativeText}
          sx={{
            display: 'block',
            opacity: 0,
            height: '100%',
            maxHeight: isSizeBig ? '140px' : '90px',
            maxWidth: '100%',
            margin: '0 auto',
            animation:
              isNearScreen && `${fadeOutAnimation} 0.7s linear forwards 0.2s`,

            objectFit: 'contain',

            content: {
              xs: `url(${icon.url})`,
            },

            // width: 'inherit',
            // maxHeight: {
            //   xs: 'inherit',
            //   // md: isSizeBig ? 'auto' : '100px',
            //   // xll: isSizeBig ? 'inherit' : '128px',
            // },
          }}
        />
      </Box>
    </Box>
  );
}
