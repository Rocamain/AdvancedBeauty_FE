const LOCATIONS = {
  'Palma de Majorca': 'IB',
  "L'Illa Diagonal": 'CT',
  'Turo Park': 'CT',
};
const getISOdates = (holidays, county) => {
  const filterCountyHols = holidays.filter(
    (holiday) =>
      holiday.locations === county ||
      holiday.locations === '14 states' ||
      holiday.type.includes('National holiday')
  );

  return filterCountyHols.map((holiday) => {
    return holiday.date.iso;
  });
};
const getBankHolidays = async ({ year, location }) => {
  try {
    const holsData = await fetch(
      `${process.env.REACT_APP_HOLS_API}?&api_key=${process.env.REACT_APP_HOLS_KEY}&country=es&year=${year}`
    );

    const holsParsed = await holsData.json();

    const nationalHolidays = holsParsed.response.holidays;

    if (nationalHolidays) {
      const bankHolidays = getISOdates(nationalHolidays, LOCATIONS[location]);

      return bankHolidays;
    }
  } catch (err) {
    throw err;
  }
};

export default getBankHolidays;
