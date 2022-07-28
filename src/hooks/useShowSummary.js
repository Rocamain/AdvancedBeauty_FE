import { useState, useEffect, useRef } from 'react';

export default function useShowSummary(bookingStep) {
  const fromRef = useRef();
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    let handleAnimationEnd;
    let elementGrid = fromRef?.current;

    if (elementGrid && bookingStep > 1) {
      handleAnimationEnd = () => {
        fromRef.current.style.display = 'none';
        setShowSummary(true);
      };
      fromRef.current.addEventListener('animationend', handleAnimationEnd);
      if (bookingStep > 1) {
      }
    }
    return () =>
      elementGrid?.removeEventListener('animationstart', handleAnimationEnd);
  }, [fromRef, bookingStep]);

  return { fromRef, showSummary };
}
