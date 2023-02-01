import { useState, useEffect, useRef } from 'react';

export default function useShowSummary(bookingStep) {
  const calenderRef = useRef();
  const summaryRef = useRef();

  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    let handleAnimationEnd;
    let calendarRefCurrent = calenderRef?.current;
    handleAnimationEnd = () => {
      setShowSummary(true);
    };

    if (calendarRefCurrent && bookingStep === 'summary') {
      calendarRefCurrent.addEventListener('animationend', handleAnimationEnd);
    }
    return () => {
      calendarRefCurrent?.removeEventListener(
        'animationend',
        handleAnimationEnd
      );
    };
  }, [calenderRef, bookingStep]);

  return { calenderRef, showSummary, summaryRef };
}
