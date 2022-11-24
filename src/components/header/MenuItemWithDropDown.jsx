import { useState, useEffect, useRef } from 'react';
import { DropDownMenu } from 'components/header/styled/index';
import MenuLink from 'components/header/MenuLink.jsx';

export default function MenuItemWithDropDown({
  link,
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

  const handleClick = (e, path) => {
    setOpen(false);
  };

  const id = open
    ? 'simple-popover-' + link.title.replace(' ', '-').toLowerCase()
    : undefined;
  const linkId =
    'dropdown-button-' + link.title.replace(' ', '-').toLowerCase();

  return (
    <MenuLink
      ref={ref}
      id={linkId}
      aria-controls={open ? 'dropdown-menu' : null}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : null}
      onClick={(e) => handleClick(e, link.path)}
      onMouseOver={() => handleHover(link.title)}
      onMouseLeave={handleClose}
      selected={selectedMain === link.path}
      disableGutters
      title={link.title}
      to={link.path}
    >
      <DropDownMenu
        id={id}
        aria-labelledby={linkId}
        anchorEl={anchorEl}
        open={open}
        onMouseOnBackdrop={handleClose}
        onMouseLeave={handleClose}
      >
        {link.items.map((dropdownLink, index) => {
          const { path, title } = dropdownLink;

          return (
            <MenuLink
              key={index}
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
