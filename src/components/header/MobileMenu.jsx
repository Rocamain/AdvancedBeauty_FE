import { LinksMenu, MenuLink } from './styled/index';
import { Box } from '@mui/material';

export default function MobileMenu({ links, onClose, selectedLinks }) {
  const handleClick = () => {
    onClose();
  };

  const { mainLink, dropLink } = selectedLinks;

  return (
    <LinksMenu>
      {links.map(({ title, items, path, ...link }, index) => {
        return (
          <Box key={index} sx={{ margin: ['0 1em', '0 2em'], maxWidth: '90%' }}>
            <MenuLink
              key={path}
              onClick={handleClick}
              to={path}
              mainLink
              selected={!dropLink && mainLink === path}
              title={title}
            />
            {items &&
              items.map(({ title, items, path, ...link }, index) => {
                return (
                  <MenuLink
                    key={index}
                    onClick={handleClick}
                    to={path}
                    selected={dropLink === '/' + path.split('/')[2]}
                    title={title}
                  />
                );
              })}
          </Box>
        );
      })}
    </LinksMenu>
  );
}
