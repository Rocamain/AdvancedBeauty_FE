const qs = require('qs');

const querySelector = {
  // menu: ['links', 'links.dropdown.links', 'logo'],
  menu: ['links', 'links.dl', 'links.dl.links'],

  carousel: [
    'carousel',
    'carousel.variantTitle',
    'carousel.variantSubtitle',
    'carousel.background.media',
    'carousel.cards.photo.media',
  ],
};

const makeQuery = (path) => {
  console.log('makeQuery');
  if (path === 'menu') {
    const que = qs.stringify(
      {
        populate: {
          links: {
            populate: ['links'],
          },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );
    // ?populate[menuLinks][populate][][populate]=name-of-your-media-field
    // ?populate[blocks][populate][restaurants][populate]=image

    const query = qs.stringify(
      {
        populate: [...querySelector[path]],
      },
      {
        encodeValuesOnly: true,
      }
    );
    console.log(que);
    const queryString = `${path}?${query}`;
    console.log(queryString);
    return queryString;
  }

  const queryString = `${path}?populate=*`;

  return queryString;
};

const nestedQuery = (path, component) => {
  if (component) {
    const query = qs.stringify(
      {
        populate: [...querySelector[component]],
      },
      {
        encodeValuesOnly: true,
      }
    );
    const queryString = `${path}?${query}`;

    return queryString;
  }
};

export { makeQuery, nestedQuery };
