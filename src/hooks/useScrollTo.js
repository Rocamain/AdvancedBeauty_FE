import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function useScrollTo({ url, isNearScreen }) {
  const { hash } = useLocation();
  const scrollRef = useRef(null);
  const theme = useTheme();
  const bigScreens = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    if (url) {
      const hashId = hash.split('#')[1];
      const id = url.split('#')[1];

      if (scrollRef.current.offsetTop && isNearScreen && hashId === id) {
        if (bigScreens) {
          window.scrollTo({
            top: 0,
          });
        }
        let ratio = 0.2;
        if (bigScreens) {
          ratio = 0.25;
        }
        const headerHeight = Math.round(
          document.documentElement.clientHeight * ratio
        );

        const timer = setTimeout(() => {
          return window.scrollTo({
            top: scrollRef.current.offsetTop - headerHeight,
            behavior: bigScreens ? 'smooth' : 'instant',
          });
        }, 40);

        return () => {
          clearTimeout(timer);
        };
      }
    }
  }, [url, hash, scrollRef, isNearScreen, bigScreens]);

  return { scrollRef };
}
