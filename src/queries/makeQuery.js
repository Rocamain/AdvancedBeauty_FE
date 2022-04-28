const qs = require('qs');

const querySelector = {
  menu: ['links', 'link.dropdown_link', 'links.dropdown_link.links', 'logo'],
};

const makeQuery = (path) => {
  const query = qs.stringify(
    {
      populate: [...querySelector[path]],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const queryString = `${path}?${query}`;
  return queryString;
};

export default makeQuery;
