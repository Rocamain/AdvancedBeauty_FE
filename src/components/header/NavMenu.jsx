import { useState } from 'react';
import { MenuList, Box as Nav, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuItemWithDropDown from 'components/header/MenuItemWithDropDown';

export default function NavMenu({ links, selectedIndex, setSelectedIndex }) {
  const [hoverTracker, setHoverTracker] = useState(null);

  const handleHover = (event) => {
    event
      ? setHoverTracker(event.target.textContent)
      : setHoverTracker((prev) => prev);
  };

  const handleClick = (event) => {
    setSelectedIndex(event.target.textContent);
  };

  const haspopup = (navLink) => navLink?.dropdown?.links;

  return (
    links && (
      <Nav component={'nav'} sx={{ display: 'flex' }}>
        <MenuList sx={{ display: 'flex', gap: '1.5em', alignItems: 'center' }}>
          {links.map((navLink, index) =>
            haspopup(navLink) ? (
              <MenuItemWithDropDown
                link={navLink}
                handleHover={handleHover}
                handleClick={handleClick}
                key={index}
                selectedIndex={navLink.route === selectedIndex}
                hoverTracker={navLink.route === hoverTracker}
              />
            ) : (
              <MenuItem
                key={index}
                onMouseOver={handleHover}
                onClick={handleClick}
                selected={navLink.route === selectedIndex}
                sx={{ padding: 0, display: 'block' }}
              >
                <Link
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    color: 'black',
                    padding: '1.5em',
                  }}
                  to={navLink.routePath}
                >
                  {navLink.route}
                </Link>
              </MenuItem>
            )
          )}
        </MenuList>
      </Nav>
    )
  );
}
