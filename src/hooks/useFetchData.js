import { useEffect, useState } from 'react';
import makeQuery from '../queries/makeQuery';
import { getMobileNavLinks, getRoutesLinks } from './utils/index';

const FORMATEDDATA = {
  menu: {
    routes: (jsonData) => getRoutesLinks(jsonData),
    mobile: (jsonData) => getMobileNavLinks(jsonData),
    bigScreens: (jsonData) => jsonData,
  },
  // menu: (jsonData, filter) => filteNavigationLinks(jsonData, filter),
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
        // make a strapi api query
        const queryString = makeQuery(path);
        const res = await fetch(`http://localhost:1337/api/${queryString}`);

        const { data } = await res.json();

        // check the need to format the data.

        const formattedData = format
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
