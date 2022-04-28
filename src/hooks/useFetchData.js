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
        const queryString =
          path !== 'menu' && format
            ? nestedQuery(path, format)
            : makeQuery(path);

        const res = await fetch(`http://localhost:1337/api/${queryString}`);

        const { data } = await res.json();

        const formattedData =
          path === 'menu'
            ? FORMATEDDATA[path][format](data)
            : FORMATEDDATA[path](data);

        setData({ data: formattedData, error: false, loading: false });
      } catch (err) {
        setData({ error: err.message, data: false, loading: false });
      }
    };
    getData();
  }, [path, format]);

  return data;
}
