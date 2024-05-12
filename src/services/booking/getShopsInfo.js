const { VITE_APP_BOOKING } = import.meta.env;

const getShops = () => {
  const queryString = `${VITE_APP_BOOKING}/api/shops`;

  return queryString;
};

export default getShops;
