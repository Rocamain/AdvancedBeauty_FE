import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getBankHolidaysUrlString,
  getShopBankHolidays,
} from 'services/calendarific/getBankHolidays';

export default function useFetchBankHolidays(year, shop) {
  const [data, setData] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (year || shop) {
      const abortController = new AbortController();

      const calendarificUrlString = getBankHolidaysUrlString(year);
      fetch(calendarificUrlString, {
        signal: abortController.signal,
      })
        .then((response) => response.json())
        .then((bankHolidays) => {
          
          const shopBankHols = getShopBankHolidays({ bankHolidays, shop });

          setData(shopBankHols);
        })
        .catch((err) => {
          if (abortController.signal.aborted) {
            // The user aborted the request
            setData(false);
          } else {
            navigate('/error');
          }
        });

      return () => {
        // setData(false);
        abortController.abort();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shop, year]);

  if (data) {
    return data;
  }
}
