import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function useNearScreen({ distance = '100px' }) {
  const { hash } = useLocation();

  // if has hash then activate  setShow //

  const [isNearScreen, setShow] = useState(() => (hash ? true : false));

  const fromRef = useRef(null);

  useEffect(() => {
    let observer;

    if (!hash) {
      const onChange = (entries) => {
        const el = entries[0];
        if (el.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      };

      // In case the navigator does not support IntersectionObserver API,
      // It will do a dynamic import of the polyfill intersection-observer

      if (fromRef.current) {
        Promise.resolve(
          typeof IntersectionObserver !== 'undefined'
            ? IntersectionObserver
            : import('intersection-observer')
        ).then(() => {
          observer = new IntersectionObserver(onChange, {
            rootMargin: distance,
          });

          observer.observe(fromRef.current);
        });

        return () => observer && observer.disconnect();
      }
    }
  }, [fromRef]);

  return { isNearScreen, fromRef, setShow };
}
