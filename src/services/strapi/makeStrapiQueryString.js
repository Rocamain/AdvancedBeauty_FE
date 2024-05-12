import qs from 'qs';
import { MAIN_QUERY, LOGO_QUERY } from 'constants/index';
const { VITE_APP_STRAPI_URL } = import.meta.env;

const makeStrapiQueryString = (path) => {
  const querySelector = path !== 'logo' ? MAIN_QUERY : LOGO_QUERY;
  const query = qs.stringify(
    {
      populate: [...querySelector],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const queryString = `${VITE_APP_STRAPI_URL}/api/${path}?${query}`;

  return queryString;
};

export default makeStrapiQueryString;
