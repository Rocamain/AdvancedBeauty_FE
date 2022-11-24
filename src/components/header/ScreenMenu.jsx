import { useState } from 'react';
import { Box as Nav, MenuList } from '@mui/material';
import { MenuLink } from './styled/index';
import MenuItemWithDropDown from 'components/header/MenuItemWithDropDown';

export default function ScreenMenu({ links, selectedLinks }) {
  const [hoverTracker, setHoverTracker] = useState(null);
  const { mainLink, dropLink } = selectedLinks;

  const handleHover = (sectionHover) => {
    if (sectionHover !== hoverTracker) {
      setHoverTracker(sectionHover);
    }
  };

  const haspopup = (navLink) => {
    return navLink?.items.length > 0 ? true : false;
  };

  return (
    <Nav sx={{ display: 'flex', position: 'relative', zIndex: 1000 }}>
      <MenuList
        sx={{
          display: 'flex',
          gap: '0.7em',
          alignItems: 'center',
          padding: '0',
        }}
      >
        {links.map((navLink, index) => {
          const { title, path } = navLink;

          return haspopup(navLink) ? (
            <MenuItemWithDropDown
              key={index}
              link={navLink}
              handleHover={handleHover}
              selectedMain={mainLink}
              selectedDrop={dropLink}
              isHover={title === hoverTracker}
            />
          ) : (
            <MenuLink
              key={index}
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
