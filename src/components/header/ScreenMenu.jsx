import { useState } from 'react';
import { Box as Nav } from '@mui/material';
import { LinksMenu, MenuLink } from './styled/index';
import MenuItemWithDropDown from 'components/header/MenuItemWithDropDown';

export default function ScreenMenu({ links, selectedIndex, setSelectedIndex }) {
  const [hoverTracker, setHoverTracker] = useState(null);

  const handleHover = (event) => {
    if (event) {
      setHoverTracker(event.target.textContent);
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
      <Nav component={'nav'} sx={{ display: 'flex' }}>
        <LinksMenu sx={{ display: 'flex', gap: '1.5em', alignItems: 'center' }}>
          {links.map((navLink, index) => {
            return haspopup(navLink) ? (
              <MenuItemWithDropDown
                link={navLink}
                handleHover={handleHover}
                key={index}
                setSelectedIndex={setSelectedIndex}
                selectedIndex={navLink.title === selectedIndex}
                hoverTracker={navLink.title === hoverTracker}
              />
            ) : (
              <MenuLink
                key={index}
                onMouseOver={handleHover}
                onClick={handleClick}
                selected={navLink.title === selectedIndex}
                to={navLink.path}
              >
                {navLink.title}
              </MenuLink>
            );
          })}
        </LinksMenu>
      </Nav>
    )
  );
}
