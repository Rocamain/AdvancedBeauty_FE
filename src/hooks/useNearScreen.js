import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function useNearScreen({ distance = '100px' }) {
  const { hash } = useLocation();

  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef(null);

  useEffect(() => {
    let observer;

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
          rootMargin: `${distance} 0px`,
          threshold: 1.0,
        });

        observer.observe(fromRef.current);
      });

      return () => observer && observer.disconnect();
    }
  }, [fromRef, distance, hash]);

  return { isNearScreen, fromRef };
}
