//  return an array of all the nav links.

const getMobileNavLinks = (data) => {
  const { links, ...rest } = data;

  const formattedLinks = links.reduce((storage, link) => {
    const dropdown_link = link?.dropdown_link?.links;
    const { id, name, url, __component } = link;
    const navLink = { id, name, url, __component };

    return dropdown_link
      ? [...storage, navLink, ...dropdown_link]
      : [...storage, navLink];
  }, []);

  return { links: formattedLinks, ...rest };
};

//  return an array of unique route links.

const getRoutesLinks = ({ links, ...rest }) => {
  console.log(links, rest);
  const filterUniquePaths = links.map((link) => {
    const hasDropdownLinks = link.__component === 'menu.dropdown-links';

    if (hasDropdownLinks) {
      const uniquePathLinks = link.dropdown_link.filter(
        (dropdownLink, index) => !dropdownLink.url.includes(`#`)
      );
      return { link, ...uniquePathLinks };
    }

    return link;
  });

  console.log(filterUniquePaths);
  return filterUniquePaths;

  // const formattedRouteLinks = links.reduce((storage, link) => {
  //   const { id, name, url, __component } = link;

  //   const mainRouteLink = { id, name, url, __component };

  //   const routeLinks = link?.dropdown_link?.links?.filter(
  //     (dropdownLink) => !dropdownLink.url.includes(`#`)
  //   );

  //   return routeLinks
  //     ? [...storage, mainRouteLink, ...routeLinks]
  //     : [...storage, mainRouteLink];
  // }, []);

  // return { links: formattedRouteLinks, ...rest };
};

const getMainLink = (link) => link.hasOwnProperty('__component');

export { getMobileNavLinks, getMainLink, getRoutesLinks };
