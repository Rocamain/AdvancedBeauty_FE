import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollTo() {
  const { hash, state, pathname } = useLocation();

  const scrollToRef = useRef(null);

  useEffect(() => {
    let observer;

    const onChange = (entries) => {
      const sections = entries[0].target.children;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const hashId = `#${section.id.replaceAll(' ', '-')}`;

        if (hash === hashId) {
          const HeaderHeight = Math.round(
            document.documentElement.clientHeight * 0.2
          );

          const offsetTop = section.offsetTop - HeaderHeight;

          setTimeout(
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth',
            }),
            300
          );
        }
      }
    };
    // In case the navigator does not support ResizeObserver API,
    // It will do a dynamic import of the polyfill resize-observer-polyfill

    if (scrollToRef.current) {
      Promise.resolve(
        typeof ResizeObserver !== 'undefined'
          ? ResizeObserver
          : import('resize-observer-polyfill')
      ).then(() => {
        observer = new ResizeObserver(onChange);

        observer.observe(scrollToRef.current);
      });

      return () => observer && observer.disconnect();
    }
  }, [scrollToRef, state, hash, pathname]);

  return { scrollToRef };
}
