import { useState, useEffect } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let controller = new AbortController();
    const fetchData = async () => {
      try {
        const resNested = await fetch(
          'https://strapi-advanced-beauty.herokuapp.com/api/navigation/render/main-navigation?type=TREE',
          { signal: controller.signal }
        );
        const resFlat = await fetch(
          'https://strapi-advanced-beauty.herokuapp.com/api/navigation/render/main-navigation?type=FLAT',
          { signal: controller.signal }
        );
        // const resNested = await fetch(
        //   'http://localhost:1337/api/navigation/render/main-navigation?type=TREE',
        //   { signal: controller.signal }
        // );
        // const resFlat = await fetch(
        //   'http://localhost:1337/api/navigation/render/main-navigation?type=FLAT',
        //   { signal: controller.signal }
        // );

        const menuNested = await resNested.json();
        const menuFlat = await resFlat.json();

        setData({ nestedList: menuNested, flatList: menuFlat });
        controller = null;
      } catch (err) {
        console.log('err', err);
      }
    };
    fetchData();
    return () => controller?.abort();
  }, []);

  return data;
};

export default useFetch;
