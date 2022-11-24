import { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function useNearScreen({ distance = '100px' }) {
  const { hash, pathname, state } = useLocation();
  const [isNearScreen, setShow] = useState(Boolean(hash));
  const [buttonBackPressed, setButtonBackPressed] = useState(() =>
    Boolean(hash) || state?.hash ? true : false
  );

  const fromRef = useRef(null);
  const navigationType = useNavigationType();

  useEffect(() => {
    window.onpopstate = () => {
      setButtonBackPressed(true);
      
    };
  }, [pathname, navigationType]);

  useEffect(() => {
    let observer;
    setShow(false);
    const onChange = (entries) => {
      const el = entries[0];

      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    if (buttonBackPressed) {
      setShow(true);
    }

    // In case the navigator does not support IntersectionObserver API,
    // It will do a dynamic import of the polyfill intersection-observer

    if (fromRef.current && !Boolean(hash) && isNearScreen === false) {
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
    } else {
      setShow(true);
    }
    return () => {
      setButtonBackPressed(false);
      observer && observer.disconnect();
      setShow(false);
    };
  }, [fromRef, distance, hash, buttonBackPressed, isNearScreen]);

  return { isNearScreen, fromRef };
}
