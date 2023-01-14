import { useState, useEffect } from 'react';
const { NODE_ENV, REACT_APP_STRAPI_URL_PROD, REACT_APP_STRAPI_URL_DEV } =
  process.env;
const URL =
  NODE_ENV !== 'production'
    ? REACT_APP_STRAPI_URL_DEV
    : REACT_APP_STRAPI_URL_PROD;

const useNavigation = () => {
  const [data, setData] = useState({ navigationLinks: null });

  useEffect(() => {
    let controller = new AbortController();
    const fetchData = async () => {
      try {
        const links = await fetch(
          `https://${URL}/api/navigation/render/main-navigation?type=TREE`,
          { signal: controller.signal }
        );

        const linksParsed = await links.json();

        setData({ navigationLinks: linksParsed });
        controller = null;
      } catch (err) {}
    };

    if (data.navigationLinks === null) {
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
