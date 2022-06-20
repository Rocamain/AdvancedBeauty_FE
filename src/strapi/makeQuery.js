const qs = require('qs');

const querySelector = {
  Logo: ['photo.media'],
  Home: [
    'components',
    'components.background.media',
    'components.cards',
    'components.cards.photo.media',
    'components.photo.media',
    'components.button',
  ],
  'About-us': [
    'components',
    'components.background.media',
    'components.cards',
    'components.cards.photo.media',
    'components.photo.media',
    'components.button',
  ],
  'Services-and-Fare': [
    'components',
    'components.background.media',
    'components.cards',
    'components.cards.photo.media',
    'components.photo.media',
    'components.button',
  ],
  Contact: ['components', 'components.button', 'components.photo.media'],
};

const makeQuery = (path) => {
  path = path.replace('/', '');
  if (path === 'Services-and-Fares') path = 'Services-and-Fare';

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

export { makeQuery };
