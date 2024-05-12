const { VITE_APP_BOOKING } = import.meta.env;

const getAvailableTimes = ({ shopName, serviceName, date }) => {
  if (shopName && serviceName && date) {
    const day = date.format('DD/MM/YYYY');

    const queryString = `${VITE_APP_BOOKING}/api/bookings/available?shopName=${shopName}&serviceName=${serviceName}&date=${day}`;

    return queryString;
  }
  return false;
};

export default getAvailableTimes;
