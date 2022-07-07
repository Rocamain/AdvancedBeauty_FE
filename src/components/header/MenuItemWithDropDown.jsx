import { useState, useEffect, useRef } from 'react';
import { DropDownMenu, MenuLink, Link } from 'components/header/styled/index';
import { MenuItem, Typography } from '@mui/material';

export default function MenuItemWithDropDown({
  link,
  selectedIndex,
  handleHover,
  isHover,
  setSelectedIndex,
}) {
  const ref = useRef(null);

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [click, setClick] = useState(false);

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

  const handleClickMain = (e) => {
    e.preventDefault();
    setOpen(false);
    setSelectedIndex(anchorEl.textContent);

    window.scrollTo(0, 0);
  };

  const handleClickDrop = (e) => {
    e.stopPropagation();
    setClick(true);
    setOpen(false);
    setSelectedIndex(anchorEl.textContent);
  };

  const id = open
    ? 'simple-popover-' + link.title.replace(' ', '-').toLowerCase()
    : undefined;
  const linkId =
    'dropdown-button-' + link.title.replace(' ', '-').toLowerCase();

  return (
    <MenuItem
      ref={ref}
      id={linkId}
      aria-controls={open ? 'dropdown-menu' : null}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : null}
      onClick={handleClickMain}
      onMouseOver={() => handleHover(link.title)}
      onMouseLeave={handleClose}
      selected={selectedIndex}
      sx={{ padding: 0 }}
      disableGutters
    >
      <Link to={link.path}>
        <Typography component="h3" variant="p">
          {link.title}
        </Typography>
      </Link>
      <DropDownMenu
        id={id}
        aria-labelledby={linkId}
        anchorEl={anchorEl}
        open={open}
        onMouseOnBackdrop={handleClose}
        onMouseLeave={handleClose}
      >
        {link.items.map((dropdownLink, index) => {
          const { path } = dropdownLink;

          return (
            <MenuLink
              key={index}
              onClick={handleClickDrop}
              to={path}
              state={{ click }}
            >
              {dropdownLink.title}
            </MenuLink>
          );
        })}
      </DropDownMenu>
    </MenuItem>
  );
}
