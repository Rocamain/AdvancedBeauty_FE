import qs from 'qs';
import { MAIN_QUERY, LOGO_QUERY } from 'constants';
const { NODE_ENV, REACT_APP_STRAPI_URL_PROD, REACT_APP_STRAPI_URL_DEV } =
  process.env;
const URL =
  NODE_ENV !== 'production'
    ? REACT_APP_STRAPI_URL_DEV
    : REACT_APP_STRAPI_URL_PROD;

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

  const queryString = `${URL}/api/${path}?${query}`;

  return queryString;
};

export default makeStrapiQueryString;
