const qs = require('qs');

const querySelector = {
  menu: ['links.dropdown.links', 'logo'],
  home: [
    'components',
    'components.background.media',
    'components.cards',
    'components.cards.photo.media',
    'components.photo.media',
    'components.button',
    'components.variantTitle',
    'components.variantSubtitle',
  ],
  'About-us': [
    'components',
    'components.background.media',
    'components.cards',
    'components.cards.photo.media',
    'components.button',
    'components.photo.media',
    'components.variantTitle',
    'components.variantSubtitle',
  ],
  'services-and-fares': ['*'],
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
