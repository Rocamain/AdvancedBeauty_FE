import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function useScrollTo({
  sectionTitle,
  marginTop = 0,
  isNearScreen,
}) {
  const { hash } = useLocation();
  const scrollRef = useRef(null);
  const theme = useTheme();
  const bigScreens = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    const id = '#' + sectionTitle.title.replaceAll(' ', '-');

    if (scrollRef.current && isNearScreen && id === hash) {
      let ratio = 0.2;
      if (bigScreens) {
        ratio = 0.25;
      }
      const headerHeight = Math.round(
        document.documentElement.clientHeight * ratio
      );
      const timer = setTimeout(() => {
        return window.scrollTo({
          top: scrollRef.current.offsetTop - headerHeight - marginTop,
          behavior: bigScreens ? 'smooth' : 'instant',
        });
      }, 100);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [
    sectionTitle?.title,
    hash,
    scrollRef,
    marginTop,
    isNearScreen,
    bigScreens,
  ]);

  return { scrollRef };
}
