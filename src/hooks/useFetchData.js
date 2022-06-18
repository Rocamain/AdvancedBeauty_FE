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
      setData({ loading: true, data: false, error: false });
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
        console.log(err);
        setData({ error: err, data: false, loading: false });
      }
    };
    getData();
  }, [path]);

  return data;
}
