import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_SELECTOR = {
  strapi: ({ component }) => {
    const { makeQuery } = require('services/strapi/makeQuery');
    return makeQuery(component);
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
  { component, location, year, action, date, shopName, serviceName }
) {
  const [data, setData] = useState();
  const [loading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const abortController = new AbortController();

    fetch(
      API_SELECTOR[api]({
        component,
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
      abortController.abort();
    };
  }, [api, component, year, location, action, date, date?.$d]);

  return { data, loading };
}
