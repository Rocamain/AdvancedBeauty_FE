const qs = require('qs');

const makeQuery = (path) => {
  const querySelector = {
    menu: ['links', 'link.dropdown_link', 'links.dropdown_link.links', 'logo'],
  };

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
