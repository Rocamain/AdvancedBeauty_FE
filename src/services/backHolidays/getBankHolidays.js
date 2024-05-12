import { COUNTY_CODE } from 'constants/index.js';
const { VITE_APP_HOLS_API } = import.meta.env;

const getShopBankHolidays = ({ bankHolidays, shop }) => {
  const shopCountyCode = COUNTY_CODE(shop);

  const nationalBankHols = bankHolidays.filter(
    (holiday) => holiday.global === true
  );
  const countyBankHols = bankHolidays.filter(
    (holiday) => holiday?.counties && holiday.counties.includes(shopCountyCode)
  );
  const shopBankHolidays = nationalBankHols.concat(countyBankHols);

  return shopBankHolidays.map((holiday) => holiday.date);
};

const getBankHolidaysUrlString = (year) => {
  const queryString = `${VITE_APP_HOLS_API}/${year}/ES`;

  return queryString;
};

export { getBankHolidaysUrlString, getShopBankHolidays };
