import { LinksMenu, MenuLink } from './styled/index';
import { Box } from '@mui/material';

export default function MobileMenu({
  links,
  onClose,
  handleSelect,
  selectedLinks,
}) {
  const handleClick = (e, { parentPath, path }) => {
    if (parentPath) {
      const fullPath = `/${parentPath}/${path}`;

      handleSelect(e, fullPath);
    } else {
      const slashedPath = !path.includes('/') ? '/' + path : path;

      handleSelect(e, `${slashedPath}`);
    }

    if (onClose) {
      onClose();
    }
  };

  const isMainLink = (link) => {
    return !link.parent?.path;
  };

  return (
    <LinksMenu>
      {links.map((link, index) => {
        const slashedPath = !link.path.includes('/')
          ? '/' + link.path
          : link.path;
        let fullPath = slashedPath;
        if (link?.parent?.path) {
          fullPath = `/${link.parent.path}/${link.path}`;
        }

        return (
          <Box key={index} sx={{ margin: '0 2em' }}>
            <MenuLink
              key={index}
              onClick={(e) =>
                handleClick(e, {
                  parentPath: link?.parent?.path,
                  path: link.path,
                })
              }
              isFirst={index !== 0}
              replace={true}
              to={
                isMainLink(link)
                  ? `${link.path}`
                  : link.parent.path + '/' + link.path
              }
              mainLink={isMainLink(link)}
              selected={
                fullPath ===
                (selectedLinks.dropLink
                  ? selectedLinks.mainLink + selectedLinks.dropLink
                  : selectedLinks.mainLink)
              }
              title={link.title}
            />
          </Box>
        );
      })}
    </LinksMenu>
  );
}
