import fetchStrapiComponentsData from 'services/strapi/fetchStrapiComponentsData';
import fetchBookingDb from 'services/booking/fetchBookingDb';

const fetchData = async ({ apiRoute, signal }) => {
  try {
    const data = await fetchStrapiComponentsData({
      apiRoute: apiRoute,
      signal: signal,
    });
    const shopsDbData = await fetchBookingDb({
      apiRoute: 'shops',
      signal,
    });

    if (data) {
      if (apiRoute === 'logo') {
        return { logo: data.data.photo, shops: shopsDbData.shops };
      }
      if (apiRoute === 'palma' || apiRoute === 'turo' || apiRoute === 'illa') {
        const bookingDbData = await fetchBookingDb({
          apiRoute: 'services',
          signal,
        });

        return {
          components: data.data,
          services: bookingDbData.services,
          shops: shopsDbData.shops,
        };
      }
      return {
        components: data.data,
        shops: shopsDbData.shops,
      };
    }
  } catch (err) {
    throw err;
  }
};

export default fetchData;
