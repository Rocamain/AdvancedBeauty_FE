import makeDbBookingQueryString from 'services/booking/makeDbBookingQueryString.js';

const fetchBookingDbData = async ({ apiRoute, signal }) => {
  const url = makeDbBookingQueryString(apiRoute);

  const data = await fetch(url, { signal });

  if (data) {
    const jsonData = await data.json();
    return jsonData;
  }
};

export default fetchBookingDbData;
