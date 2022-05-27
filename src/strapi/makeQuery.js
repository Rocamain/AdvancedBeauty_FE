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
  'services-and-fares': ['*'],
  contact: ['*'],
};

const makeQuery = (path) => {
  if (path === 'menu') {
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
  }

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
