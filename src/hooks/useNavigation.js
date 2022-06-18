import { useState, useEffect } from 'react';
const URL = process.env.REACT_APP_URL;
const useNavigation = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let controller = new AbortController();
    const fetchData = async () => {
      try {
        const resNested = await fetch(
          `${URL}/api/navigation/render/main-navigation?type=TREE`,
          { signal: controller.signal }
        );
        const resFlat = await fetch(
          `${URL}/api/navigation/render/main-navigation?type=FLAT`,
          { signal: controller.signal }
        );
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

export default useNavigation;
