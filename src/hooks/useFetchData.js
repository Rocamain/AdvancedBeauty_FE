import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_SELECTOR = {
  strapi: ({ path, component, id }) => {
    const { makeQuery } = require('services/strapi/makeQuery');
    return makeQuery({ path, component, id });
  },
  calendar: ({ year, location }) => {
    const {
      getBankHolidays,
    } = require('services/calendarific/getBankHolidays');

    return getBankHolidays({ year });
  },
  bookingSystem: ({ action, shopName, serviceName, date }) => {
    const getQuery = require(`services/booking/${action}.js`).default;

    if (action === 'getAvailableTimes') {
      return getQuery({ shopName, serviceName, date });
    }
    return getQuery();
  },
};

export default function useFetchData(
  api,
  { path, component, id, location, year, action, date, shopName, serviceName }
) {
  const [data, setData] = useState(false);
  const [loading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const abortController = new AbortController();

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
          setData(data?.data || data?.bookings || data);
        }
      })
      .catch(() => {
        if (abortController.signal.aborted) {
          console.log('The user aborted the request');
        } else {
          navigate('/error');
        }
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      setData(false);
      setIsLoading(true);
      abortController.abort();
    };
  }, [
    api,
    path,
    year,
    location,
    action,
    date,
    date?.$d,
    navigate,
    serviceName,
    shopName,
    component,
    id,
  ]);

  return { data, loading };
}
