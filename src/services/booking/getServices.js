const PATH = process.env.VITE_APP_BOOKING;

const getServices = () => {
  const queryString = `${PATH}/api/services?orderBy=type`;

  return queryString;
};

export default getServices;
