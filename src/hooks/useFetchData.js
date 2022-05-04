import { useEffect, useState } from 'react';
import { makeQuery, nestedQuery } from '../queries/makeQuery';
import { getMobileNavLinks, getRoutesLinks } from './utils/index';

const FORMATEDDATA = {
  menu: {
    routes: (jsonData) => getRoutesLinks(jsonData),
    mobile: (jsonData) => getMobileNavLinks(jsonData),
    bigScreens: (jsonData) => jsonData,
  },
  home: ({ id, createdAt, updatedAt, publishedAt, ...data }) => data,
};

export default function useFetchData(path, format) {
  console.log(path, format);

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
        const queryString = format
          ? nestedQuery(path, format)
          : makeQuery(path);
        console.log(queryString);

        const res = await fetch(`http://localhost:1337/api/${queryString}`);

        const { data } = await res.json();
        console.log('FETCH', data);
        const formattedData =
          path === 'menu'
            ? FORMATEDDATA[path][format](data)
            : FORMATEDDATA[path](data);

        console.log('FORMAT', formattedData);

        // setData({ data: formattedData, error: false, loading: false });
      } catch (err) {
        console.log(err);
        setData({ error: err.message, data: false, loading: false });
      }
    };
    getData();
  }, [path, format]);

  return data;
}
