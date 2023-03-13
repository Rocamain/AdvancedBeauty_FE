import { useEffect, useState, useRef } from 'react';
import { useNavigationType } from 'react-router-dom';

const debounce = (func, timeout = 100) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export default function useScrollTo({ hash }) {
  const [recordedHeight, setHeight] = useState(0);
  const navigationType = useNavigationType();
  const fromRef = useRef(null);

  //  We use Resize observer because the document is constantly resize due to use of Lazy components along
  //  with useNear screen, like a infinity scroll behavior
  useEffect(() => {
    setHeight(0);
  }, []);

  useEffect(() => {
    let observer;

    const onChange = debounce((e) => {
      const entry = e[0];
      const height = entry.contentRect.height;

      setHeight(height);
      const section = hash.split('#')[1];
      entry.target.opacity = 0;
      if (recordedHeight === height) {
        observer.unobserve(entry.target);
        entry.target.opacity = 1;
        const sectionToNavigate = document.getElementById(section);

        if (sectionToNavigate && navigationType === 'PUSH') {
          const headerHeight =
            document.getElementById('header').scrollHeight * 1.3;

          window.scrollTo({
            top: sectionToNavigate.offsetTop - headerHeight,
          });
        }
      }
    });

    // In case the navigator does not support resize-observer API,
    // It will do a dynamic import of the polyfill intersection-observer

    if (fromRef.current && navigationType === 'PUSH' && hash.length > 0) {
      Promise.resolve(
        typeof ResizeObserver !== 'undefined'
          ? ResizeObserver
          : import('resize-observer-polyfill')
      ).then(() => {
        observer = new ResizeObserver(onChange);

        observer.observe(fromRef.current);
      });
    }

    return () => {
      observer && observer.disconnect();
    };
  });

  return { fromRef };
}
