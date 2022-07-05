import { useState, useEffect, useRef } from 'react';
import { DropDownMenu, MenuLink, Link } from 'components/header/styled/index';
import { useNavigate } from 'react-router-dom';
import { MenuItem, Typography } from '@mui/material';

export default function MenuItemWithDropDown({
  link,
  selectedIndex,
  handleHover,
  isHover,
  setSelectedIndex,
}) {
  const navigate = useNavigate();
  const ref = useRef(null);

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

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
    setSelectedIndex(anchorEl.textContent);
    if (path) {
      navigate(path);
    }
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
      onClick={handleClick}
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
        g{' '}
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
            <MenuLink key={index} onClick={handleClick} to={path}>
              {dropdownLink.title}
            </MenuLink>
          );
        })}
      </DropDownMenu>
    </MenuItem>
  );
}
