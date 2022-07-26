import { useEffect, useState } from 'react';

export default function useButtonSelected({ date, timeFrame }) {
  const [selected, setSelected] = useState('all');

  useEffect(() => {
    if (date || timeFrame) {
      setSelected('all');
    }
  }, [date, timeFrame]);

  const handleSelector = (btnText) => {
    const btnSelected = btnText.toLowerCase();
    setSelected(btnSelected);
  };

  return { selected, handleSelector };
}
