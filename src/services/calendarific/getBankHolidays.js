const COUNTIES = {
  'Palma de Majorca': 'ES-IB',
  "L'Illa Diagonal": 'ES-CT',
  'Turo Park': 'ES-CT',
};

const getShopBankHolidays = ({ bankHolidays, shop }) => {
  const shopCountyCode = COUNTIES[shop];

  const nationalBankHols = bankHolidays.filter(
    (holiday) => holiday.global === true
  );

  const countyBankHols = bankHolidays.filter((holiday) => {
    if (holiday.counties) return holiday?.counties.includes(shopCountyCode);
  });

  const shopBankHolidays = nationalBankHols.concat(countyBankHols);

  return shopBankHolidays.map((holiday) => holiday.date);
};
// API is not very reliable, in future need to look for a better API
const getBankHolidaysUrlString = (year) => {
  const queryString = `https://date.nager.at/api/v3/publicholidays/${year}/ES`;
  // `${process.env.REACT_APP_HOLS_API}?&api_key=${process.env.REACT_APP_HOLS_KEY}&country=es&year=${year}`;

  return queryString;
};

export { getBankHolidaysUrlString, getShopBankHolidays };
