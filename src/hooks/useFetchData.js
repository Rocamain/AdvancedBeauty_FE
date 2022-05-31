import { useEffect, useState } from 'react';
import { makeQuery } from 'strapi/makeQuery';
import { formatMenu } from 'utils/index';

const FORMATEDDATA = {
  menu: (json) => formatMenu(json),
  home: ({ components }) => components,
  'About-us': ({ components }) => components,
  carousel: (json) => json,
  contact: ({ components }) => components,
  singleCardA: ({ carousel }) => carousel,
};

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
        const queryString = makeQuery(path);

        const res = await fetch(`http://localhost:1337/api/${queryString}`);

        // For production

        // const res = await fetch(
        //   `https://strapi-advanced-beauty.herokuapp.com/api/${queryString}`
        // );

        const { data } = await res.json();

        const formattedData = FORMATEDDATA[path](data);

        setData({ data: formattedData, error: false, loading: false });
      } catch (err) {
        console.log(err);
        setData({ error: err, data: false, loading: false });
      }
    };
    getData();
  }, [path]);

  return data;
}
