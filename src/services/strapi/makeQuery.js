const qs = require('qs');

const headerLogo = ['photo.media'];
const mainComponent = [
  'components',
  'components.treatments',
  'components.sectionTitle',
  'components.background.media',
  'components.cover.media',
  'components.photo.media',
  'components.photos.media',
  'components.cards',
  'components.cards.icon.media',
  'components.slides.linkedTo',
  'components.slides.photo.media',
  'components.button',
  'components.buttons.linkedTo',
];

const makeQuery = (path) => {
  path = path.replace('Services-and-Fares', 'Services-and-Fare');
  path = path.replace(
    'Services-and-Fare/Services-in-Palma-de-Majorca',
    'Palma'
  );
  path = path.replace("Services-and-Fare/Services-in-L'Illa-Diagonal", 'Illa');
  path = path.replace('Services-and-Fare/Services-in-Turo-Park', 'Turo');
  path = path.replace('Services-and-Fare/Promotions', 'promotions');
  path = path.replace('Services-and-Fare/Fares', 'fares');
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
