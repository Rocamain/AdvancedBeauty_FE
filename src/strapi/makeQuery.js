const qs = require('qs');

const querySelector = {
  menu: ['links', 'logo', 'links.dropdown_links.links'],
  home: [
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
  'Services-and-Fares': [
    'components',

    'components.background.media',
    'components.cards',
    'components.cards.photo.media',
    'components.photo.media',
    'components.button',
  ],
  Contact: ['*'],
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
  if (path === 'Services-and-Fares') path = 'Services-and-Fare';

  const queryString = `${path}?${query}`;

  return queryString;
};

export { makeQuery };
