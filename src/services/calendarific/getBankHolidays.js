const COUNTIES = {
  'Palma de Majorca': 'IB',
  "L'Illa Diagonal": 'CT',
  'Turo Park': 'CT',
};

const getISOdates = ({ holidays, location }) => {
  const countyCode = COUNTIES[location];
  const filterCountyHols = holidays.filter(
    (holiday) =>
      holiday.locations === countyCode ||
      holiday.locations === '14 states' ||
      holiday.type.includes('National holiday')
  );

  return filterCountyHols.map((holiday) => {
    return holiday.date.iso;
  });
};
// API is not very reliable, in future need to look for a better API
const getBankHolidays = ({ year }) => {
  const queryString = `${process.env.REACT_APP_HOLS_API}?&api_key=${process.env.REACT_APP_HOLS_KEY}&country=es&year=${year}`;

  return queryString;
};

export { getBankHolidays, getISOdates };
