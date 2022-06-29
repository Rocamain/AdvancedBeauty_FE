import { useEffect, useState } from 'react';
import { makeQuery } from 'strapi/makeQuery';

const URL = process.env.REACT_APP_URL;

export default function useFetchData(path) {
  const [data, setData] = useState({
    loading: true,
    data: false,
    error: false,
  });

  // fetch data

  useEffect(() => {
    const getData = async () => {
      let controller = new AbortController();

      try {
        const queryString = makeQuery(path);
        const res = await fetch(`${URL}/api/${queryString}`, {
          signal: controller.signal,
        });

        const { data } = await res.json();
        setData({ data: data, error: false, loading: false });

        controller = null;
      } catch (err) {
        setData({ data: false, error: err, loading: false });
      }
    };

    getData();

    return () => {
      setData((prev) => prev);
    };
  }, [path]);

  return data;
}
