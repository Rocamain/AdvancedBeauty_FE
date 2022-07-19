import { useEffect, useState } from 'react';

export default function useButtonSelected({ date, timeFrame }) {
  const [selected, setSelected] = useState('all');

  useEffect(() => {
    if (date || timeFrame) {
      setSelected('all');
    }
  }, [date, timeFrame]);

  const handleSelector = ({ target }) => {
    const btnSelected = target.innerText.toLowerCase();
    setSelected(btnSelected);
  };

  return { selected, handleSelector };
}
