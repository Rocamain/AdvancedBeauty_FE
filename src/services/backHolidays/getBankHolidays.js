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

  // eslint-disable-next-line array-callback-return
  const countyBankHols = bankHolidays.filter((holiday) => {
    if (holiday.counties) return holiday?.counties.includes(shopCountyCode);
  });

  const shopBankHolidays = nationalBankHols.concat(countyBankHols);

  return shopBankHolidays.map((holiday) => holiday.date);
};

const getBankHolidaysUrlString = (year) => {
  const queryString = `${process.env.REACT_APP_HOLS_API}/${year}/ES`;

  return queryString;
};

export { getBankHolidaysUrlString, getShopBankHolidays };
