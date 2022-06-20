import { useState, useEffect } from 'react';
import { LinksMenu, MenuLink } from './styled/index';
import { DropDownMenu } from 'components/header/styled/index';
import { useNavigate } from 'react-router-dom';

export default function MenuItemWithDropDown({
  link,
  selectedIndex,
  handleHover,
  hoverTracker,
  setSelectedIndex,
}) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  let navigate = useNavigate();

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

  const handleClick = (e, path) => {
    setOpen(false);
    setSelectedIndex(anchorEl.textContent);
    if (path) {
      navigate(path);
    }
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
        aria-labelledby="dropdown-button"
        anchorEl={anchorEl}
        open={open}
        onMouseLeave={handleClose}
        sx={{ width: 'inherit' }}
      >
        {link.items.map((dropdownLink, index) => {
          return (
            <MenuLink
              key={index}
              onClick={handleClick}
              onMouseLeave={handleClose}
              to={dropdownLink.path}
            >
              {dropdownLink.title}
            </MenuLink>
          );
        })}
      </DropDownMenu>
    </>
  );
}
