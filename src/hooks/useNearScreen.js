import { useEffect, useState, useRef } from 'react';

export default function useNearScreen(distance = '100px') {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    let observer;

    const onChange = (entries) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    // in case the navigator does not support IntersectionObserver API,
    // It will do a dynamic import  of the polyfill intersection-observer.disconnect()

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
  }, []);

  return { isNearScreen, fromRef };
}
