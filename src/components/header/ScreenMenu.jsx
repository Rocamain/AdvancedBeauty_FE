import { useState } from 'react';
import { Box as Nav, MenuList } from '@mui/material';
import { MenuLink } from './styled/index';
import MenuItemWithDropDown from 'components/header/MenuItemWithDropDown';

const hasDropdownLinks = (items) => {
  return items.length > 0 ? true : false;
};

export default function ScreenMenu({ links, selectedLinks }) {
  const [hoverTracker, setHoverTracker] = useState(null);
  const { mainLink, dropLink } = selectedLinks;

  const handleHover = (sectionHover) => {
    if (sectionHover !== hoverTracker) {
      setHoverTracker(sectionHover);
    }
  };

  return (
    <Nav sx={{ display: 'flex', position: 'relative', zIndex: 1000 }}>
      <MenuList
        sx={{
          display: 'flex',
          gap: { md: '0.5em', xl: '1em' },
          alignItems: 'center',
          padding: 0,
        }}
      >
        {links.map(({ title, path, items }) => {
          return hasDropdownLinks(items) ? (
            <MenuItemWithDropDown
              key={path}
              title={title}
              path={path}
              dropdownLinks={items}
              handleHover={handleHover}
              selectedMain={mainLink}
              selectedDrop={dropLink}
              isHover={title === hoverTracker}
            />
          ) : (
            <MenuLink
              key={path}
              onMouseOver={(e) => handleHover(title)}
              selected={path === mainLink}
              to={path}
              title={title}
            />
          );
        })}
      </MenuList>
    </Nav>
  );
}
