import { useEffect, useState } from 'react';
import { makeQuery, nestedQuery } from 'queries/makeQuery';
import { formatMenu } from 'hooks/utils/index';

const FORMATEDDATA = {
  menu: (json) => formatMenu(json),
  home: ({ components }) => components,
  'About-us': ({ components }) => components,
  carousel: (json) => json,
  contact: ({ components }) => components,
  singleCardA: ({ carousel }) => carousel,
};

export default function useFetchData(path, nestedComponent = false) {
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
        const queryString = nestedComponent
          ? nestedQuery(path, nestedComponent)
          : makeQuery(path);

        const res = await fetch(`http://localhost:1337/api/${queryString}`);

        const { data } = await res.json();
        console.log(queryString);

        const formattedData = FORMATEDDATA[path](data);

        setData({ data: formattedData, error: false, loading: false });
      } catch (err) {
        console.log(err);
        setData({ error: err.message, data: false, loading: false });
      }
    };
    getData();
  }, [path, nestedComponent]);

  return data;
}
