import { MenuList } from './styled/index';
import { MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { getMobileNavLinks } from 'utils/index';

export default function NavMenuList({
  links,
  onClose,
  setSelectedIndex,
  selectedIndex,
}) {
  const handleClick = (index) => {
    if (onClose) {
      onClose();
    }
    setSelectedIndex(index.target.textContent);
  };

  const isMainLink = (link) => link?.__component;

  return (
    <MenuList>
      {getMobileNavLinks(links).map((link, index) => {
        return (
          <MenuItem
            key={index}
            onClick={handleClick}
            selected={link.route === selectedIndex}
            sx={{
              px: isMainLink(link) ? '1.3em' : '2em',
            }}
          >
            <Link
              style={{
                textDecoration: 'none',
                color: 'black',
                width: '100%',
              }}
              to={link.routePath}
            >
              {link.route}
            </Link>
          </MenuItem>
        );
      })}
    </MenuList>
  );
}
