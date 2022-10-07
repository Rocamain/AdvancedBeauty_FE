const PATH = process.env.REACT_APP_BOOKING;

const getAvailableTimes = ({ shopName, serviceName, date }) => {
  const day =
    `${date.date()}`.length === 1 ? `0${date.date()}` : `${date.date()}`;
  const month =
    `${date.month() + 1}`.length === 1
      ? `0${date.month() + 1}`
      : `${date.month() + 1}`;
  const year = date.year();
  const formattedDate = `${day}/${month}/${year}`;

  const queryString = `${PATH}/bookings/available?shopName=${shopName}&serviceName=${serviceName}&date=${formattedDate}`;

  console.log('Execute get QueryAvailableTimes', queryString);
  return queryString;
};

export default getAvailableTimes;
