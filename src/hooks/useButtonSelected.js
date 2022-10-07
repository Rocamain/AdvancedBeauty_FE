import { useEffect, useState } from 'react';

export default function useButtonSelected({ date, availableTimes }) {
  const [selected, setSelected] = useState('all');

  useEffect(() => {
    if (date || availableTimes) {
      setSelected('all');
    }
  }, [date, availableTimes]);

  const handleSelector = (btnText) => {
    const btnSelected = btnText.toLowerCase();
    setSelected(btnSelected);
  };

  return { selected, handleSelector };
}
