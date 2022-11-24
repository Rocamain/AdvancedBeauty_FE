const PATH = process.env.REACT_APP_BOOKING;

const getShops = () => {
  const queryString = `${PATH}/shops`;

  return queryString;
};

export default getShops;
