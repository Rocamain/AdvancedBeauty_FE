import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function useScrollTo({ url, isNearScreen }) {
  const { hash } = useLocation();
  const scrollRef = useRef(null);
  const theme = useTheme();
  const bigScreens = useMediaQuery(theme.breakpoints.up('md'), { noSsr: true });

  useLayoutEffect(() => {
    const hashId = hash.split('#')[1];
    const id = url && url.split('#')[1];
    if (isNearScreen && hashId === id) {
      if (scrollRef.current && url && id === hashId) {
        if (bigScreens) {
          window.scrollTo({
            top: 0,
          });
        }
        let ratio = 0.17;
        if (bigScreens) {
          ratio = 0.2;
        }
        const headerHeight = Math.round(
          document.documentElement.clientHeight * ratio
        );

        const timer = setTimeout(() => {
          window.scrollTo({
            top: scrollRef.current.offsetTop - headerHeight,
            behavior: bigScreens ? 'smooth' : 'instant',
          });
        }, 240);
        return () => {
          clearTimeout(timer);
        };
      }
    }
  }, [url, hash, bigScreens, isNearScreen]);

  return { scrollRef };
}
