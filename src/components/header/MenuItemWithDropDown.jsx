import { useState, useEffect } from 'react';
import { LinksMenu, MenuLink } from './styled/index';
import { DropDownMenu } from 'components/header/styled/index';

export default function MenuItemWithDropDown({
  link,
  selectedIndex,
  handleHover,
  hoverTracker,
  setSelectedIndex,
}) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    setOpen(hoverTracker);
  }, [hoverTracker]);

  const handleClose = (event) => {
    handleHover(event);
    setOpen(false);
    setAnchorEl(null);
  };

  const handleOpen = (event) => {
    handleHover(event);
    setOpen(true);
    setAnchorEl(event.target);
  };

  const handleClick = () => {
    setOpen(false);
    setSelectedIndex(anchorEl.textContent);
  };

  const id = open ? 'simple-popover' + link.name : undefined;

  return (
    <>
      <MenuLink
        id="dropdown-button"
        aria-controls={open ? 'dropdown-menu' : null}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : null}
        component={'li'}
        onClick={handleClick}
        onMouseOver={handleOpen}
        selected={selectedIndex}
        to={link.path}
      >
        {link.title}
      </MenuLink>

      <DropDownMenu
        id={id}
        anchorEl={anchorEl}
        open={open}
        sx={{ width: 'inherit' }}
      >
        <LinksMenu onMouseLeave={handleClose} aria-labelledby="dropdown-button">
          {link.items.map((dropdownLink, index) => {
            const { path } = dropdownLink;

            return (
              <MenuLink
                key={index}
                onClick={handleClick}
                onMouseLeave={handleClose}
                to={path}
              >
                {dropdownLink.title}
              </MenuLink>
            );
          })}
        </LinksMenu>
      </DropDownMenu>
    </>
  );
}
