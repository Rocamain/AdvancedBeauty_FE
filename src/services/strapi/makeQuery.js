const qs = require('qs');

const headerLogo = ['photo.media'];
const componentSelector = {
  carousel: [
    'sectionTitle',
    'background.media',
    'slides.photo.media',
    'slides.linkTo',
  ],

  gridA: [
    'sectionTitle',
    'photo.media',
    'button',
    'button.linkTo',
    'cardLinks.photo.media',
    'cardLinks.linkTo',
  ],
  cardA: ['sectionTitle', 'photo.media', 'button', 'button.linkTo'],
  gridB: ['cards', 'cards.icon.media'],
  hero: ['cover.media', 'button.linkTo'],
};

const mainComponent = [
  'components',
  // 'components.sectionTitle',
  // 'components.background.media',
  // 'components.cover.media',
  // 'components.photo.media',
  // 'components.photos.media',
  // 'components.cardLinks',
  // 'components.cardLinks.icon.media',
  // 'components.cardLinks.linkTo',
  // 'components.slides.photo.media',
  // 'components.button',
  // 'components.button.linkTo',
];
const URL = process.env.REACT_APP_STRAPI_URL;

const makeQuery = ({ path, component, id }) => {
  path = path.replace('Services-and-Fares', 'Services-and-Fare');
  path = path.replace(
    'Services-and-Fare/Services-in-Palma-de-Majorca',
    'Palma'
  );
  path = path.replace("Services-and-Fare/Services-in-L'Illa-Diagonal", 'Illa');
  path = path.replace('Services-and-Fare/Services-in-Turo-Park', 'Turo');
  path = path.replace('Services-and-Fare/Promotions', 'promotions');
  path = path.replace('Services-and-Fare/Fares', 'fares');

  let querySelector = path !== 'Logo' ? mainComponent : headerLogo;

  let query = qs.stringify(
    {
      populate: [...querySelector],
    },

    {
      encodeValuesOnly: true,
    }
  );

  if (component && id) {
    querySelector = componentSelector[component];
    query = qs.stringify(
      {
        populate: {
          components: {
            populate: [...querySelector],
            filters: {
              id: {
                $eq: id,
              },
            },
          },
        },
      },

      {
        encodeValuesOnly: true,
      }
    );
  }

  const queryString = `${URL}/api/${path}?${query}`;

  return queryString;
};

export { makeQuery };
