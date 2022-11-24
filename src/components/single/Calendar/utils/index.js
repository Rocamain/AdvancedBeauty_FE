import dayjs from 'dayjs';

const filterHoursByTimeFrame = ({ availableTimes, timeFrame }) => {
  if (timeFrame === 'afternoon') {
    return availableTimes.filter((hour) => Number(hour.split(':')[0]) > 12);
  }
  return availableTimes.filter((hour) => Number(hour.split(':')[0]) < 12);
};

const isSunday = (date) => {
  const dayOfWeek = dayjs(date).day();

  return dayOfWeek === 0;
};
const isBankHoliday = (date, bankHolidays) => {
  const day =
    `${date.date()}`.length === 1 ? `0${date.date()}` : `${date.date()}`;
  const month =
    `${date.month() + 1}`.length === 1
      ? `0${date.month() + 1}`
      : `${date.month() + 1}`;
  const year = date.year();
  const stringedDate = `${year}-${month}-${day}`;

  return bankHolidays.includes(stringedDate);
};

export { filterHoursByTimeFrame, isBankHoliday, isSunday };
