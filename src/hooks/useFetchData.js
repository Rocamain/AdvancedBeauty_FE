import { useEffect, useState } from 'react';
import { makeQuery } from 'strapi/makeQuery';

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
        let res;
        // For production

        // if (process.env.NODE_ENV !== 'production') {
        // }

        // res = await fetch(`http://localhost:1337/api/${queryString}`, {
        //   signal: controller.signal,
        // });

        res = await fetch(
          `https://strapi-advanced-beauty.herokuapp.com/api/${queryString}`,
          { signal: controller.signal }
        );
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
