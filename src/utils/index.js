//  return an array of all the nav links.

const getMobileNavLinks = (links) => {
  const navLinks = links.map((link) => {
    const hasDropdownLinks = link?.dropdown_links;

    if (hasDropdownLinks) {
      const dropdownLinks = link.dropdown_links.links;
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

const getRoutesLinks = ({ links }) => {
  const linkList = links.map((link) => {
    const hasDropdown = link?.dropdown_links;
    if (hasDropdown) {
      const uniquePathDropdownLinks = link.dropdown_links.links.filter(
        (dropdown_link) => !dropdown_link.isPathID
      );

      const mainLink = { ...link };
      return [mainLink, ...uniquePathDropdownLinks];
    }

    return {
      ...link,
    };
  });

  return [...linkList.flat()];
};

export { getMobileNavLinks, getRoutesLinks };
