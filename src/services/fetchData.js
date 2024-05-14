import fetchStrapiComponentsData from 'services/strapi/fetchStrapiComponentsData';
import fetchBookingDb from 'services/booking/fetchBookingDb';

const fetchData = async ({ apiRoute, signal }) => {
  try {
    const strapiResponse = await fetchStrapiComponentsData({
      apiRoute,
      signal,
    });

    const { data: componentsData } = strapiResponse;

    switch (apiRoute) {
      case 'logo':
        const { shops } = await fetchBookingDb({ apiRoute: 'shops', signal });
        return { logo: componentsData.photo, shops };
      case 'palma':
      case 'turo':
      case 'illa':
        const { services } = await fetchBookingDb({
          apiRoute: 'services',
          signal,
        });

        return {
          components: componentsData?.components || componentsData,
          services,
        };
      default:
        return {
          components: componentsData?.components || componentsData,
        };
    }
  } catch (err) {
    throw err;
  }
};

export default fetchData;
