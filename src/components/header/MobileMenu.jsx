import { LinksMenu, MenuLink } from './styled/index';

export default function MobileMenu({ links, onClose, selectedLinks }) {
  const handleClick = () => {
    onClose();
  };

  const { mainLink, dropLink } = selectedLinks;

  const flatLinkList = links.reduce((linksAcc, link) => {
    const { title, path, items } = link;
    const mainLink = { isMainLink: true, title, path };
    linksAcc.push(mainLink);
    if (items) {
      const dropDownLinks = items.map(({ path, title }) => ({
        isMainLink: false,
        title,
        path,
      }));
      linksAcc.push(...dropDownLinks);
    }

    return linksAcc;
  }, []);

  return (
    <LinksMenu>
      {flatLinkList.map(({ title, path, isMainLink }) => (
        <MenuLink
          key={path}
          onClick={handleClick}
          to={path}
          mainLink={isMainLink}
          selected={
            !dropLink
              ? mainLink === path
              : dropLink === '/' + path.split('/')[2]
          }
          title={title}
        />
      ))}
    </LinksMenu>
  );
}
