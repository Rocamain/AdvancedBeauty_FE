import { useState, useEffect, useRef } from 'react';
import { DropDownMenu } from 'components/header/styled/index';
import MenuLink from 'components/header/MenuLink';
// import { LinksMenu, MenuLink } from './styled/index';

export default function MenuItemWithDropDown({
  path,
  title,
  dropdownLinks,
  selectedMain,
  selectedDrop,
  handleHover,
  isHover,
}) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    setOpen(false);
    if (isHover) {
      setAnchorEl(ref.current);
      setOpen(true);
    }
  }, [isHover]);

  const handleClose = (event) => {
    setOpen(false);
    setAnchorEl(null);
    handleHover(event);
  };

  const handleClick = () => {
    setOpen(false);
  };

  const mainLinkId = 'dropdown-button-' + title.replace(' ', '-').toLowerCase();
  const dropDownMainLinkId = open
    ? 'simple-popover-' + title.replace(' ', '-').toLowerCase()
    : undefined;

  return (
    <MenuLink
      ref={ref}
      id={mainLinkId}
      aria-controls={open ? 'dropdown-menu' : null}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : null}
      onClick={(e) => handleClick(e, path)}
      onMouseOver={() => handleHover(title)}
      onMouseLeave={handleClose}
      selected={selectedMain === path}
      disableGutters
      title={title}
      to={path}
    >
      <DropDownMenu
        id={dropDownMainLinkId}
        aria-labelledby={mainLinkId}
        anchorEl={anchorEl}
        open={open}
        onMouseOnBackdrop={handleClose}
        onMouseLeave={handleClose}
      >
        {dropdownLinks.map(({ path, title }) => {
          return (
            <MenuLink
              dropdownLink
              key={path}
              onClick={(e) => handleClick(e, path)}
              selected={path.includes(selectedDrop)}
              to={path}
              title={title}
            />
          );
        })}
      </DropDownMenu>
    </MenuLink>
  );
}
