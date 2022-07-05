import { useState } from 'react';
import { Box as Nav, MenuList } from '@mui/material';
import { MenuLink } from './styled/index';
import MenuItemWithDropDown from 'components/header/MenuItemWithDropDown';

export default function ScreenMenu({ links, selectedIndex, setSelectedIndex }) {
  const [hoverTracker, setHoverTracker] = useState(null);

  const handleHover = (sectionHover) => {
    // setHoverTracker(null);
    if (sectionHover !== hoverTracker) {
      setHoverTracker(sectionHover);
    }
  };

  const handleClick = (event) => {
    setSelectedIndex(event.target.textContent);
  };

  const haspopup = (navLink) => {
    return navLink?.items.length > 0 ? true : false;
  };

  return (
    links && (
      <Nav
        component={'nav'}
        sx={{ display: 'flex', position: 'relative', zIndex: 4000 }}
      >
        <MenuList
          sx={{
            display: 'flex',
            gap: '0.7em',
            alignItems: 'center',
            padding: '0 0',
          }}
        >
          {links.map((navLink, index) => {
            return haspopup(navLink) ? (
              <MenuItemWithDropDown
                link={navLink}
                handleHover={handleHover}
                key={index}
                setSelectedIndex={setSelectedIndex}
                selectedIndex={navLink.title === selectedIndex}
                isHover={navLink.title === hoverTracker}
              />
            ) : (
              <MenuLink
                key={index}
                onMouseOver={(e) => handleHover(navLink.title)}
                onClick={handleClick}
                selected={navLink.title === selectedIndex}
                to={navLink.path}
              >
                {navLink.title}
              </MenuLink>
            );
          })}
        </MenuList>
      </Nav>
    )
  );
}
