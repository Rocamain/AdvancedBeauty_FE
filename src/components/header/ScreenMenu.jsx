import { useState } from 'react';
import { Box as Nav, MenuList } from '@mui/material';
import { MenuLink } from './styled/index';
import MenuItemWithDropDown from 'components/header/MenuItemWithDropDown';

export default function ScreenMenu({ links, selectedLinks, handleSelect }) {
  const [hoverTracker, setHoverTracker] = useState(null);
  const { mainLink, dropLink } = selectedLinks;

  const handleHover = (sectionHover) => {
    if (sectionHover !== hoverTracker) {
      setHoverTracker(sectionHover);
    }
  };

  const handleClick = (event, path) => {
    handleSelect(event, path);
    window.scrollTo(0, 0);
  };

  const haspopup = (navLink) => {
    return navLink?.items.length > 0 ? true : false;
  };

  return (
    <Nav
      component={'nav'}
      sx={{ display: 'flex', position: 'relative', zIndex: 1000 }}
    >
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
              link={navLink}
              handleHover={handleHover}
              key={index}
              handleSelect={handleSelect}
              selectedMain={mainLink}
              selectedDrop={dropLink}
              isHover={title === hoverTracker}
            />
          ) : (
            <MenuLink
              key={index}
              onMouseOver={(e) => handleHover(title)}
              onClick={(e) => handleClick(e, path)}
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
