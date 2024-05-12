import { useState, useEffect } from 'react';
const VITE_APP_STRAPI_URL = import.meta.env.VITE_APP_STRAPI_URL;

const useNavigation = () => {
  const [routes, setRoutes] = useState(null);

  useEffect(() => {
    let controller = new AbortController();
    const fetchRoutesData = async () => {
      try {
        const routesResponse = await fetch(
          `${VITE_APP_STRAPI_URL}/api/navigation/render/main-navigation?type=TREE`,
          { signal: controller.signal }
        );

        const navroutes = await routesResponse.json();

        setRoutes(navroutes);
        controller = null;
      } catch (err) {
        console.log({ err });
      }
    };

    if (routes == null) {
      fetchRoutesData();
    } else {
      return () => {
        controller?.abort();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (routes) return routes;
};

export default useNavigation;
