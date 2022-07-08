const qs = require('qs');

const headerLogo = ['photo.media'];
const mainComponent = [
  'components',
  'components.treatments',
  'components.background.media',
  'components.cards',
  'components.cards.photo.media',
  'components.photo.media',
  'components.cover.media',
  'components.button',
];

const makeQuery = (path) => {
  path = path.replace('Services-and-Fares', 'Services-and-Fare');
  path = path.replace('Services-and-FareServices-in-Palma-de-Majorca', 'Palma');
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
