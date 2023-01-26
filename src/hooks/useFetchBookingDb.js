import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getAvailableTimes from 'services/booking/getAvailableTimes';

export default function useFetchBookingDb(serviceName, shopName, date) {
  const [data, setData] = useState(false);

  const navigate = useNavigate();
  const url = getAvailableTimes({ shopName, serviceName, date });

  useEffect(() => {
    const abortController = new AbortController();

    if (url) {
      fetch(url, {
        signal: abortController.signal,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.msg) {
            const err = new Error();
            err.msg = data.msg;
            throw err;
          }

          setData(data.bookings);
        })
        .catch((err) => {
          if (err) {
            navigate('/error', { state: { err: { msg: err } } });
            setData(false);
          }
          if (abortController.signal.aborted) {
            setData(false);
          }
        });
    }

    return () => {
      setData(false);
      abortController.abort();
    };
  }, [url, navigate]);

  return data;
}
