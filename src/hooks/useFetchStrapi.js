import { useEffect, useState } from 'react';
import makeStrapiQueryString from 'services/strapi/makeStrapiQueryString';
import { useNavigate } from 'react-router-dom';

export default function useFetchStrapi(pathname) {
  const [data, setData] = useState({ data: false, loading: true });

  const navigate = useNavigate();
  const pathDataInfo = data?.[pathname];

  useEffect(() => {
    if (!pathDataInfo) {
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
        });

      return () => {
        abortController.abort();
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (pathDataInfo) {
    return { data: pathDataInfo, loading: false };
  }

  return data;
}
