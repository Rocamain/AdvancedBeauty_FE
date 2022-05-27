//  return an array of all the nav links.

const getMobileNavLinks = (links) => {
  const navLinks = links.map((link) => {
    const hasDropdownLinks = link?.dropdown;
    if (hasDropdownLinks) {
      const dropdownLinks = link.dropdown.links.map((navLink) => ({
        ...navLink,
      }));

      const mainLink = { ...link };

      return [mainLink, ...dropdownLinks];
    }
    return {
      ...link,
    };
  });
  return navLinks.flat();
};

//  return an array of unique route links.

const underscoredLink = (route) => route.replaceAll(' ', '-');

const getRoutesLinks = ({ links }) => {
  const linkList = links.map((link) => {
    const hasDropdown = link?.dropdown_links;
    if (hasDropdown) {
      const uniquePathLinks = link.dropdown_links.links.filter(
        (dropdown_link) => !dropdown_link.isPathToID
      );
      const dropdownLinks = uniquePathLinks.map((dropdown_link) => ({
        ...dropdown_link,
      }));

      const mainLink = { ...link };
      return [mainLink, ...dropdownLinks];
    }

    return {
      ...link,
    };
  });

  return [...linkList.flat()];
};

const formatMenu = ({ links, ...rest }) => {
  const formattedLinks = links.map((link) => {
    link.routePath = link.route === 'Home' ? '/' : underscoredLink(link.route);
    if (link?.dropdown_links) {
      console.log(link);
      link.dropdown_links.links.map((dropLink) => {
        dropLink.routePath = dropLink.isPathToID
          ? underscoredLink(`${link.route}/#${dropLink.route}`)
          : underscoredLink(`${link.route}/${dropLink.route}`);
      });
    }

    return link;
  });

  return { links: formattedLinks, ...rest };
};

export { getMobileNavLinks, getRoutesLinks, formatMenu };
