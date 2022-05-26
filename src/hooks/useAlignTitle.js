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

          setShow({ left, top: top });
        }

        const { left, top } = ref.current.getBoundingClientRect();

        setShow({ left, top });
      }
    };

    onChange('e', 'first render');
    if (ref.current) {
      window.addEventListener('resize', onChange);
    }
    return () => window.removeEventListener('resize', onChange);
  }, [isNearScreen]);

  return { coords, ref, refTop };
}
