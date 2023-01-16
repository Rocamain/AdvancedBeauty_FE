const { NODE_ENV, REACT_APP_STRAPI_URL_PROD, REACT_APP_STRAPI_URL_DEV } =
  process.env;

const LOGO_QUERY = ['photo.media'];

const MAIN_QUERY = [
  'components.cover.media',
  'components.withLink',
  'components.background.media',
  'components.slides.photo.media',
  'components.slides.linkTo',
  'components.photos.media',
  'components.photo.media',
  'components.button',
  'components.button.linkTo',
  'components.buttons.linkTo',
  'components.cardLinks.photo.media',
  'components.cardLinks.cardLinkedTo',
  'components.cards',
  'components.cards.icon.media',
  'cards.icon.media',
];
const COMPONENT_SIZES = (componentType) =>
  ({
    gridA:
      '(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) 1024px, 100vw',
  }[componentType]);

const COMPONENT_SCR_SET = (componentType) =>
  ({
    gridA: ['1024w', '980w', '480w'],
  }[componentType]);

const URL =
  NODE_ENV !== 'production'
    ? REACT_APP_STRAPI_URL_DEV
    : REACT_APP_STRAPI_URL_PROD;

module.exports = {
  LOGO_QUERY,
  MAIN_QUERY,
  COMPONENT_SIZES,
  COMPONENT_SCR_SET,
  URL,
};
