//  Due to the level of nesting, decide to create some functions to sanitize and format the object received.
// https://forum.strapi.io/t/discussion-regarding-the-complex-response-structure-for-rest-graphql-developer-experience/13400/35
//  To be move to a  utils file

const filterUniqueLinks = (dropdown_links, rootURL) => {
  return dropdown_links.filter((dropdownLink) => {
    const isUnique = !dropdownLink.url.includes(`#`);

    if (isUnique) {
      const { name, url } = dropdownLink;
      return { name, url };
    }
  });
};

const sanitizeData = (data) => {
  const { links } = data.menu.data.attributes;

  return links.reduce(function (allLinks, navLink) {
    const hasDropdownLink = navLink?.dropdown_link?.data?.attributes?.links
      ? true
      : false;
    const dropdownLinks = navLink?.dropdown_link?.data?.attributes?.links;

    const link = hasDropdownLink
      ? {
          name: navLink.name,
          url: navLink.url,
          dropdownLinks: filterUniqueLinks(dropdownLinks, navLink.url),
        }
      : { name: navLink.name, url: navLink.url };

    return [...allLinks, link];
  }, []);
};

export default sanitizeData;
