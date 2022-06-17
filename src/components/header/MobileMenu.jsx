import { LinksMenu, MenuLink } from './styled/index';

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

  const isMainLink = (link) => link.type === 'INTERNAL';

  return (
    <LinksMenu>
      {links.map((link, index) => {
        return (
          <MenuLink
            key={index}
            onClick={handleClick}
            to={
              isMainLink(link) ? link.path : link.parent.path + '/' + link.path
            }
            mainLink={isMainLink(link)}
            selected={link.title === selectedIndex}
          >
            {link.title}
          </MenuLink>
        );
      })}
    </LinksMenu>
  );
}
