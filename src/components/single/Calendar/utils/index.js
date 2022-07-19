const filterHoursByTimeFrame = ({ timesAvailable, timeFrame }) => {
  if (timeFrame === 'afternoon') {
    return timesAvailable.filter((hour) => Number(hour.split(':')[0]) > 12);
  }
  return timesAvailable.filter((hour) => Number(hour.split(':')[0]) < 12);
};
export { filterHoursByTimeFrame };
