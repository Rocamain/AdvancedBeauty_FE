import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getBankHolidays from 'services/calendarific/getBankHolidays',
// import { useOutletContext } from 'react-router-dom';



export default function useFetchBankHolidays(
  api,
  { path, component, id, location, year, action, date, shopName, serviceName }
) {
  const [data, setData] = useState(false);
  const [loading, setIsLoading] = useState(true);
  const [loaded, setIsLoaded] = useState(false);

  const navigate = useNavigate();

  

  // const [sections, setSections] = useOutletContext();

  useEffect(() => {
    const abortController = new AbortController();
    if (!loaded) {
      fetch(
        API_SELECTOR[api]({
          path,
          component,
          id,
          year,
          date,
          location,
          action,
          shopName,
          serviceName,
        }),
        {
          signal: abortController.signal,
        }
      )
        .then((response) => {
          if (response) {
            return response.json();
          }
          return Promise.reject();
        })
        .then((data) => {
          if (api === 'calendar') {
            const { holidays } = data.response;

            const {
              getISOdates,
            } = require('services/calendarific/getBankHolidays');

            const shopBankHols = getISOdates({ holidays, location });

            setData(shopBankHols);
          } else {
            setData(data?.data || data?.bookings || data[0]);
          }
        })
        .catch(() => {
          if (abortController.signal.aborted) {
            // The user aborted the request
            setData(false);
            setIsLoading(true);
            setIsLoaded(true);
          } else {
            navigate('/error');
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    return () => {
      setData(false);
      setIsLoading(true);
      // setIsLoaded(false);
      abortController.abort();
    };
  }, [
    // api,
    path,
    // year,
    // location,
    // action,
    // date,
    // date?.$d,
    // navigate,
    // serviceName,
    // shopName,
    // component,
    // id,
  ]);

  return { data, loading };
}
