import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function useScrollTo({ url, isNearScreen }) {
  const { hash } = useLocation();
  const [run, setRun] = useState(false);
  const scrollRef = useRef(null);
  const theme = useTheme();
  const bigScreens = useMediaQuery(theme.breakpoints.up('md'), { noSsr: true });

  useEffect(() => {
    if (url) {
      const hashId = hash.split('#')[1];
      const id = url.split('#')[1];
      if (isNearScreen && hashId === id) {
        setRun(true);
      }
    }
    return () => {
      setRun(false);
    };
  }, [hash, url, isNearScreen]);

  useEffect(() => {
    if (scrollRef.current && run) {
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
  });

  return { scrollRef };
}
