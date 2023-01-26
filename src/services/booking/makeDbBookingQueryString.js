const { REACT_APP_BOOKING } = process.env;

const makeDbBookingString = (path) => {
  // apiPath = path.includes('Services in') && 'services';

  const queryString = `${REACT_APP_BOOKING}/api/${path}${
    path === 'services' ? '?orderBy=type' : ''
  }`;

  return queryString;
};

export default makeDbBookingString;
