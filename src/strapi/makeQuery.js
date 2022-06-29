const qs = require('qs');

const headerLogo = ['photo.media'];
const mainComponent = [
  'components',
  'components.background.media',
  'components.cards',
  'components.cards.photo.media',
  'components.photo.media',
  'components.button',
];

const makeQuery = (path) => {
  path = path.replace('Services-and-Fares', 'Services-and-Fare');

  const querySelector = path !== 'Logo' ? mainComponent : headerLogo;

  const query = qs.stringify(
    {
      populate: [...querySelector],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const queryString = `${path}?${query}`;

  return queryString;
};

export { makeQuery };
