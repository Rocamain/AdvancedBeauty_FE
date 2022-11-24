const PATH = process.env.REACT_APP_BOOKING;

const getServices = () => {
  const queryString = `${PATH}/services?orderBy=type`;

  return queryString;
};

export default getServices;
