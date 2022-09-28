import { useState, useEffect } from 'react';
import { getYear, getMonth, getDate } from 'date-fns';

const QUERY = {
  getServices: () => '/services?orderBy=type',
};
const PATH = 'http://localhost:9000';

const useBookingSystem = (action, queryFields = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  let URL = PATH + QUERY[action]();

  useEffect(() => {
    let controller = new AbortController();

    const fetchData = async () => {
      try {
        let data = await fetch(URL, {
          signal: controller.signal,
        });

        data = await data.json();

        setData(data);
        setLoading(false);
        controller = null;
      } catch (err) {
        console.log({ err });
      }
    };

    if (loading) {
      fetchData();
    }
    return () => controller?.abort();
  }, [URL]);

  return { loading, data };
};

export default useBookingSystem;
