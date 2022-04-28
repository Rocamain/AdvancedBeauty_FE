import { useState } from 'react';
import { MenuList, Box as Nav, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuItemWithDropDown from './MenuItemWithDropDown';

export default function NavMenu({
  navigationLinks,
  selectedIndex,
  setSelectedIndex,
}) {
  const [hoverTracker, setHoverTracker] = useState(null);

  const handleHover = (event) => {
    event
      ? setHoverTracker(event.target.textContent)
      : setHoverTracker((prev) => prev);
  };

  const handleClick = (event) => {
    setSelectedIndex(event.target.textContent);
  };

  const haspopup = (navLink) => navLink?.dropdown_link?.links;

  return (
    <Nav component={'nav'} sx={{ display: 'flex' }}>
      <MenuList sx={{ display: 'flex', gap: '1.5em', alignItems: 'center' }}>
        {navigationLinks.map((navLink, index) =>
          haspopup(navLink) ? (
            <MenuItemWithDropDown
              link={navLink}
              handleHover={handleHover}
              handleClick={handleClick}
              key={index}
              selectedIndex={navLink.name === selectedIndex}
              hoverTracker={navLink.name === hoverTracker}
            />
          ) : (
            <MenuItem
              key={index}
              onMouseOver={handleHover}
              onClick={handleClick}
              selected={navLink.name === selectedIndex}
              sx={{ padding: 3 }}
            >
              <Link
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  width: '100%',
                }}
                to={navLink.url}
              >
                {navLink.name}
              </Link>
            </MenuItem>
          )
        )}
      </MenuList>
    </Nav>
  );
}
