import { useState } from 'react';
import { StyledNavList } from './NavListStyled';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

function NavList({ links, onClose }) {
  const [selectedIndex, setSelectedIndex] = useState('Home');

  const handleListItemClick = (index) => {
    if (onClose) {
      onClose();
    }
    setSelectedIndex(index);
  };

  return (
    <StyledNavList>
      <Box component="ul" sx={{ display: 'flex', flexDirection: 'column' }}>
        {links.map((link, index) =>
          link?.dropdownLinks ? (
            <Link
              key={index}
              to={link.name === 'Home' ? '/' : `/${link.url}`}
              onClick={handleListItemClick}
            >
              {link.name}
            </Link>
          ) : (
            <Link
              key={index}
              to={link.name === 'Home' ? '/' : `/${link.url}`}
              onClick={handleListItemClick}
            >
              {link.name}
            </Link>
          )
        )}
      </Box>
    </StyledNavList>
  );
}

export default NavList;
