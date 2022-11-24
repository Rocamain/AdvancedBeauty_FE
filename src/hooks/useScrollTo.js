import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollTo({
  sectionTitle,
  marginTop = 0,
  isNearScreen,
}) {
  const { hash } = useLocation();
  const scrollRef = useRef(null);

  useEffect(() => {
    const id = '#' + sectionTitle.title.replaceAll(' ', '-');

    if (scrollRef.current && isNearScreen && id === hash) {
      const headerHeight = Math.round(
        document.documentElement.clientHeight * 0.15
      );

      const timer = setTimeout(() => {
        return window.scrollTo({
          top: scrollRef.current.offsetTop - headerHeight - marginTop,
          behavior: 'smooth',
        });
      }, 25);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [sectionTitle?.title, hash, scrollRef, marginTop, isNearScreen]);

  return { scrollRef };
}
