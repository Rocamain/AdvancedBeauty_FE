import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getAvailableTimes from 'services/booking/getAvailableTimes';
import getShopsInfo from 'services/booking/getShopsInfo';
import getServices from 'services/booking/getServices';

const ACTION_SELECTOR = {
  getAvailableTimes: (serviceName, shopName, date) =>
    getAvailableTimes({ shopName, serviceName, date }),
  getShopsInfo: () => getShopsInfo(),
  getServices: () => getServices(),
};

export default function useFetchBookingDb(action, serviceName, shopName, date) {
  const [data, setData] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const abortController = new AbortController();

    fetch(ACTION_SELECTOR[action](serviceName, shopName, date), {
      signal: abortController.signal,
    })
      .then((response) => {
        if (response) {
          return response.json();
        }
        return Promise.reject();
      })
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        if (abortController.signal.aborted) {
          // The user aborted the request
          setData(false);
        } else {
          navigate('/error');
        }
      });

    return () => {
      setData(false);
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceName, shopName, date]);

  return data;
}
