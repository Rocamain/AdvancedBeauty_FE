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
  'Hero.cover.media',
  'Hero.button.linkTo',
];
const COMPONENT_SIZES = (componentType) =>
  ({
    gridA:
      '(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) 1300px, 100vw',
    cardA:
      '(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 750px) 750px, (min-width: 751px) 900px, 100vw',
  }[componentType]);

const COMPONENT_SCR_SET = (componentType) =>
  ({
    gridA: ['1300w', '980w', '480w'],
    cardA: ['900w', '750w', '480w'],
  }[componentType]);

const COUNTY_CODE = (county) =>
  ({
    'Palma de Majorca': 'ES-IB',
    "L'Illa Diagonal": 'ES-CT',
    'Turo Park': 'ES-CT',
  }[county]);

const INPUTS = [
  {
    id: 'Name',
    required: true,
  },
  {
    id: 'Email',
    required: true,
    type: 'email',
  },
  {
    id: 'Phone',
    required: false,
  },
  {
    id: 'Shop',
    select: true,
    options: true,
  },
  {
    id: 'Message',
    required: true,
    multiline: true,
    fullWith: true,
    rows: 4,
  },
];

const INITIAL_BOOKING_STATE = {
  serviceName: null,
  shopName: null,
  date: null,
  year: new Date().getFullYear(),
  time: null,
  price: null,
  bookingStep: 0,
  emailAuthorization: false,
  bookingConfirmation: false,
};

module.exports = {
  LOGO_QUERY,
  MAIN_QUERY,
  COMPONENT_SIZES,
  COMPONENT_SCR_SET,
  COUNTY_CODE,
  INPUTS,
  INITIAL_BOOKING_STATE,
};
