import { useState, useEffect } from 'react';
const { REACT_APP_STRAPI_URL } = process.env;

const useNavigation = () => {
  const [data, setData] = useState({ navigationLinks: null });

  useEffect(() => {
    let controller = new AbortController();
    const fetchData = async () => {
      try {
        const links = await fetch(
          `${REACT_APP_STRAPI_URL}/api/navigation/render/main-navigation?type=TREE`,
          { signal: controller.signal }
        );

        const linksParsed = await links.json();
        console.log(linksParsed);
        setData({ navigationLinks: linksParsed });
        controller = null;
      } catch (err) {}
    };

    if (data.navigationLinks === null) {
      console.log('hello');
      fetchData();
    }
    return () => {
      controller?.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
};

export default useNavigation;
