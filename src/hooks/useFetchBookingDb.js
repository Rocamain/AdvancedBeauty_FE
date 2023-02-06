import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getAvailableTimes from 'services/booking/getAvailableTimes';

export default function useFetchBookingDb(serviceName, shopName, date) {
  const [data, setData] = useState(false);

  const navigate = useNavigate();
  const url = getAvailableTimes({ shopName, serviceName, date });

  useEffect(() => {
    const abortController = new AbortController();
    let mounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          signal: abortController.signal,
        });

        if (response.ok) {
          const responseJson = await response.json();
          if (mounted) {
            setData(responseJson.bookings);
          }
        } else {
          const err = new Error();
          err.msg = 'Error on Booking process';
          throw err;
        }
      } catch (error) {
        if (abortController.signal.aborted) {
          return;
        } else {
          const err = { msg: error };
          navigate('/error', { state: err });
        }
      }
    };
    if (url && mounted) {
      fetchData();
    }

    return () => {
      setData(false);
      abortController.abort();
    };
  }, [url, navigate]);

  return data;
}
