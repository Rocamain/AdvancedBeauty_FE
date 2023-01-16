import qs from 'qs';
import { MAIN_QUERY, LOGO_QUERY, URL } from 'constants';

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
