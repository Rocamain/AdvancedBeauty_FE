const qs = require('qs');

const headerLogo = ['photo.media'];

const mainComponent = [
  'Hero.button.linkTo',
  'Hero.cover.media',
  'components',
  'components.cover.media',
  'components.sectionTitle',
  'components.background.media',
  'components.slides.photo.media',
  'components.slides.linkTo',
  'components.photos.media',
  'components.photo.media',
  'components.button',
  'components.button.linkTo',
  'components.buttons.linkTo',
  'components.cardLinks.photo.media',
  'components.cardLinks.linkTo',
  'components.cards',
  'components.cards.icon.media',
  'cards.icon.media',
];
const URL = process.env.REACT_APP_STRAPI_URL;
const PATHS = {
  '/': 'Home',
  '/Contact': 'Contact',
  '/About-us': 'about-us',
  '/About-us/': 'about-us',
  '/Promotions': 'Promotions',
  '/Promotions/': 'Promotions',
  '/Services-and-Fares/': 'Services-and-Fare',
  '/Services-and-Fares': 'Services-and-Fare',
  '/Services-and-Fares/Services-in-Palma-de-Majorca': 'Palma',
  "/Services-and-Fares/Services-in-L'Illa-Diagonal": 'Illa',
  '/Services-and-Fares/Services-in-Turo-Park': 'Turo',
  '/Services-and-Fares/Promotions': 'Promotions',
  '/Services-and-Fares/Fares': 'fares',
  '/Services-and-Fares/Fares/': 'fares',
  Logo: 'Logo',
};

const makeStrapiQueryString = (path) => {
  const strapiPath = PATHS[path];

  const querySelector = path !== 'Logo' ? mainComponent : headerLogo;
  const query = qs.stringify(
    {
      populate: [...querySelector],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const queryString = `${URL}/api/${strapiPath}?${query}`;

  return queryString;
};

export default makeStrapiQueryString;
