import dayjs from 'dayjs';

const filterHoursByTimeFrame = ({ availableTimes, timeFrame }) => {
  if (timeFrame === 'afternoon') {
    return availableTimes.filter((hour) => Number(hour.split(':')[0]) >= 14);
  }
  return availableTimes.filter((hour) => Number(hour.split(':')[0]) < 14);
};

const isSunday = (date) => {
  const dayOfWeek = dayjs(date).day();

  return dayOfWeek === 0;
};
const isBankHoliday = (date, bankHolidays) => {
  const day = date.format('YYYY-MM-DD');

  return bankHolidays.includes(day);
};

export { filterHoursByTimeFrame, isBankHoliday, isSunday };
