import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getBankHolidaysUrlString,
  getShopBankHolidays,
} from 'services/backHolidays/getBankHolidays';

export default function useFetchBankHolidays(year, shop) {
  const [data, setData] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if ((year && shop) || !data[shop]) {
      const abortController = new AbortController();

      const bankHolsURL = getBankHolidaysUrlString(year);

      fetch(bankHolsURL, {
        signal: abortController.signal,
      })
        .then((response) => response.json())
        .then((bankHolidays) => {
          const shopBankHols = getShopBankHolidays({ bankHolidays, shop });

          setData({ [shop]: shopBankHols });
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
        abortController.abort();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shop, year]);

  return data?.[shop];
}
