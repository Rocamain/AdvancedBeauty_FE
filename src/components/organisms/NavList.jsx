import { StyledNavMenu } from './NavListStyled';
import { MenuItem } from '@mui/material';
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
        console.log(link);
        return (
          <MenuItem
            key={index}
            onClick={handleListItemClick}
            selected={link.name === selectedIndex}
            sx={{
              px: link.hasOwnProperty('__component') ? '1.3em' : '2em',
            }}
          >
            <Link
              style={{
                textDecoration: 'none',
                color: 'black',
              }}
              to={link.url}
            >
              {link.name}
            </Link>
          </MenuItem>
        );
      })}
    </StyledNavMenu>
  );
}

export default NavList;
