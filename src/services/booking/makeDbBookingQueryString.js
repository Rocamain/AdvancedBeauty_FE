const { VITE_APP_BOOKING } = import.meta.env;

const makeDbBookingString = (path) => {
  // apiPath = path.includes('Services in') && 'services';

  const queryString = `${VITE_APP_BOOKING}/api/${path}${
    path === 'services' ? '?orderBy=type' : ''
  }`;

  return queryString;
};

export default makeDbBookingString;
