import { useEffect, useState } from 'react';

export default function useChildOverlap(overlapContainerRef, data) {
  const [height, setHeight] = useState({ height: `100%`, top: 0 });

  const setWrapperSize = () => {
    let childHeight = overlapContainerRef.current.scrollHeight;

    setHeight(() => ({
      height: `${Math.floor(childHeight * 0.8)}px`,
      top: `-${Math.floor(childHeight * 0.1)}px`,
    }));
  };

  useEffect(() => {
    if (data && overlapContainerRef) {
      setWrapperSize();

      return () => window.addEventListener('resize', setWrapperSize);
    }

    return () => window.removeEventListener('resize', setWrapperSize());
  }, [overlapContainerRef, data]);

  return height;
}
