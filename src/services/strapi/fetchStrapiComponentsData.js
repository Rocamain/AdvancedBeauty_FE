import makeStrapiQueryString from 'services/strapi/makeStrapiQueryString';

const fetchStrapiComponentsData = async ({ apiRoute, signal }) => {
  const url = makeStrapiQueryString(apiRoute);

  const components = await fetch(url, { signal });

  if (components) {
    const jsonComponents = await components.json();

    return jsonComponents;
  }
};

export default fetchStrapiComponentsData;
