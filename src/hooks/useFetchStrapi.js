import { useEffect, useState } from 'react';
import makeStrapiQueryString from 'services/strapi/makeStrapiQueryString';
import { useNavigate } from 'react-router-dom';

export default function useFetchStrapi(pathname) {
  const [data, setData] = useState({ data: false, loading: true });
  const [refreshed, setRefreshed] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const pathData = data?.[pathname];

    if (!pathData) {
      const abortController = new AbortController();

      fetch(makeStrapiQueryString(pathname), {
        signal: abortController.signal,
      })
        .then((response) => {
          if (response) {
            return response.json();
          }
          return Promise.reject();
        })
        .then((data) => {
          if (data.error) {
            navigate('/error');
          }
          setData((state) => ({ [pathname]: data.data, ...state }));
        })
        .catch((err) => {
          if (abortController.signal.aborted) {
            // The user aborted the request
          } else {
            navigate('/error');
          }
        })
        .finally(() => {});
      return () => {
        abortController.abort();
      };
    }
    //  it refreshed in each call to allow the ref to be updated in useNearScreen
    setRefreshed((prev) => !prev);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const pathData = data?.[pathname];
  if (pathData) {
    return { data: pathData, loading: false };
  }

  return data;
}
