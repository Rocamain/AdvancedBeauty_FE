import { useState, useRef, useEffect } from 'react';

export default function useAlignTitle(isNearScreen) {
  const [coords, setShow] = useState(false);
  const ref = useRef();
  const refTop = useRef();

  useEffect(() => {
    const onChange = function (event, initial = 'second render') {
      if (ref?.current) {
        if (initial === 'first render') {
          const { left, top } = ref.current.getBoundingClientRect();
          console.log('1COORDS:', { left, top });
          setShow({ left, top: top });
        }

        // console.log('INITIAL', initial);
        // console.log('ELEMENT CURRENT', ref?.current);

        const { left, top } = ref.current.getBoundingClientRect();
        console.log('2COORDS:', { left, top });
        setShow({ left, top });
      }
    };

    // const observer = new ResizeObserver(onChange);
    onChange('e', 'first render');
    if (ref.current) {
      window.addEventListener('resize', onChange);
    }
    return () => window.removeEventListener('resize', onChange);
  }, [isNearScreen]);
  console.log('pass Props coords', coords);
  return { coords, ref, refTop };
}
