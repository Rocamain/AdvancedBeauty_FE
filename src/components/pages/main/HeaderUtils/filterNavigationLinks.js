//  Due to the level of nesting, decide to create some functions to sanitize and format the object received.
// https://forum.strapi.io/t/discussion-regarding-the-complex-response-structure-for-rest-graphql-developer-experience/13400/35

const filterNavigationLinks = (links, filter) =>
  links.reduce((storage, link) => {
    // if dropdownLink will filter = true  will filter links with "#" in the same path.
    const filterNestedLinks = filter
      ? link?.dropdown_link?.links.filter(
          (dropdownLink) => !dropdownLink.url.includes(`#`)
        )
      : link?.dropdown_link?.links;

    const { id, name, url, __component } = link;

    const navLink = { id, name, url, __component };

    if (filterNestedLinks) {
      return [...storage, navLink, ...filterNestedLinks];
    }

    return [...storage, navLink];
  }, []);

export default filterNavigationLinks;
