import { LinksMenu, MenuLink } from './styled/index';
import { Box } from '@mui/material';

export default function MobileMenu({
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

  const isMainLink = (link) => {
    return !link.parent?.path;
  };

  return (
    <LinksMenu>
      {links.map((link, index) => {
        return (
          <Box key={index} sx={{ margin: '0 2em' }}>
            <MenuLink
              key={index}
              onClick={handleClick}
              isFirst={index !== 0}
              to={
                isMainLink(link)
                  ? link.path
                  : link.parent.path + '/' + link.path
              }
              mainLink={isMainLink(link)}
              selected={link.title === selectedIndex}
            >
              {link.title}
            </MenuLink>
          </Box>
        );
      })}
    </LinksMenu>
  );
}
