import { useEffect, useState } from 'react';
import makeQuery from '../queries/makeQuery';

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
      try {
        // make a strapi api query
        const queryString = makeQuery(path);

        const res = await fetch(`http://localhost:1337/api/${queryString}`);
        const json = await res.json();

        setData({ data: json, error: false, loading: false });
      } catch (err) {
        setData({ error: err, data: false, loading: false });
      }
    };
    getData();
  }, [path]);

  return data;
}
