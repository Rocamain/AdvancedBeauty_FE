import { SHOP_DB_PATH } from 'constants/index.js';
const PATH = process.env.REACT_APP_BOOKING;

const getAvailableTimes = ({ shopName, serviceName, date }) => {
  const shopRoute = SHOP_DB_PATH(shopName);
  const day = date.format('DD/MM/YYYY');

  const queryString = `${PATH}/api/bookings/available?shopName=${shopName}&serviceName=${serviceName}&date=${day}`;

  return queryString;
};

export default getAvailableTimes;
