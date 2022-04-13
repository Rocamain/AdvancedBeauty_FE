//  Due to the level of nesting, decide to create some functions to sanitize and format the object received.
// https://forum.strapi.io/t/discussion-regarding-the-complex-response-structure-for-rest-graphql-developer-experience/13400/35
//  To be move to a  utils file

const filterUniqueLinks = (dropdown_links, rootURL, isFilterUnique) => {
  return dropdown_links.filter((dropdownLink) => {
    const { name, url } = dropdownLink;
    if (isFilterUnique) {
      const filterUniquePath = !dropdownLink.url.includes(`#`);

      if (filterUniquePath) {
        return { name, url };
      }
    }
    return { name, url };
  });
};

const sanitizeData = (data, filterUnique) => {
  const { links, logo } = data.menu.data.attributes;
  const { alternativeText, url } = logo.data.attributes;

  const formattedLinks = links.reduce(function (allLinks, navLink) {
    const hasDropdownLink = navLink?.dropdown_link?.data?.attributes?.links
      ? true
      : false;
    const dropdownLinks = navLink?.dropdown_link?.data?.attributes?.links;

    const link = hasDropdownLink
      ? {
          name: navLink.name,
          url: navLink.url,
          dropdownLinks: filterUniqueLinks(
            dropdownLinks,
            navLink.url,
            filterUnique
          ),
        }
      : { name: navLink.name, url: navLink.url };

    return [...allLinks, link];
  }, []);
  return { alternativeText, url, formattedLinks };
};

export default sanitizeData;
