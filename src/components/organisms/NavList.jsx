import { StyledNavMenu } from './NavListStyled';
import { MenuItem, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function NavList({ links, onClose, setSelectedIndex, selectedIndex }) {
  const handleListItemClick = (index) => {
    if (onClose) {
      onClose();
    }
    setSelectedIndex(index.target.textContent);
  };

  return (
    <StyledNavMenu>
      {links.map((link, index) => {
        const singleLink = (
          <MenuItem
            key={index}
            onClick={handleListItemClick}
            selected={link.name === selectedIndex}
          >
            <Link
              style={{
                textDecoration: 'none',
                color: 'black',
              }}
              to={link.name === 'Home' ? '/' : `/${link.url}`}
            >
              {link.name}
            </Link>
          </MenuItem>
        );

        const hasDropdownLink = link?.dropdownLinks ? true : false;

        if (hasDropdownLink) {
          const nestedLinks = (
            <Box key={index} sx={{ display: 'flex', flexDirection: 'column' }}>
              {singleLink}
              {link.dropdownLinks.map((dropdownLink, index) => (
                <MenuItem
                  selected={dropdownLink.name === selectedIndex}
                  key={index}
                  onClick={handleListItemClick}
                >
                  <Link
                    key={index}
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                    }}
                    to={
                      dropdownLink.name === 'Home'
                        ? '/'
                        : `${link.url}/${dropdownLink.url}`
                    }
                    value={dropdownLink.name}
                    onClick={(link) => handleListItemClick(link)}
                  >
                    {dropdownLink.name}
                  </Link>
                </MenuItem>
              ))}
            </Box>
          );

          return nestedLinks;
        }
        return singleLink;
      })}
    </StyledNavMenu>
  );
}

export default NavList;
