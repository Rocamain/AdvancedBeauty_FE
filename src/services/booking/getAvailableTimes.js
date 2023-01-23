const PATH = process.env.REACT_APP_BOOKING;

const getAvailableTimes = ({ shopName, serviceName, date }) => {
  const day = date.format('DD/MM/YYYY');

  const queryString = `${PATH}/api/bookings/available?shopName=${shopName}&serviceName=${serviceName}&date=${day}`;

  return queryString;
};

export default getAvailableTimes;
