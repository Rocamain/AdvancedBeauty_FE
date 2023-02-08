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
    gridPhoto:
      '(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) 1024px, 100vw',
  }[componentType]);

const COMPONENT_SCR_SET = (componentType) =>
  ({
    gridA: ['1300w', '980w', '480w'],
    cardA: ['900w', '750w', '480w'],
    gridPhoto: ['1024w', '980w', '480w'],
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
    type: 'tel',
  },
  {
    id: 'Subject',
    type: 'text',
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
  bookingStep: 'initial',
  emailAuthorization: false,
  bookingConfirmation: false,
};
const SHOPS = {
  'Palma de Majorca': {
    openingTimes: ['9:30', '20:30'],
    openingTimesWnked: ['10', '15'],
    googleMapAddress:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d872.0178610391715!2d2.6541507531398913!3d39.57367450475289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12979253c75938f1%3A0xe974fedce6bb1bfa!2sAz+Est%C3%A9tica+Avanzada!5e0!3m2!1ses!2ses!4v1535230926482',
  },
  'Turo Park': {
    openingTimes: ['9:30', '21'],
    openingTimesWnked: ['9', '15'],
    googleMapAddress:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.0286127000722!2d2.1398713162238434!3d41.39518497926346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49876f2e7b20d%3A0xcdfc8ef095b24329!2s2u+Tur%C3%B3+Park!5e0!3m2!1ses!2ses!4v1535230836808',
  },

  "L'Illa Diagonal": {
    openingTimes: ['9:30', '21'],
    openingTimesWnked: ['9', '21'],
    googleMapAddress:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488.86906321291707!2d2.134061846769298!3d41.389213653431696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a499e3a8008c35%3A0xc82c19eb75d9dbe3!2s2u+Est%C3%A8tica+Avan%C3%A7ada!5e0!3m2!1ses!2ses!4v1535230696541',
  },
};

module.exports = {
  LOGO_QUERY,
  MAIN_QUERY,
  COMPONENT_SIZES,
  COMPONENT_SCR_SET,
  COUNTY_CODE,
  INPUTS,
  INITIAL_BOOKING_STATE,
  SHOPS,
};
