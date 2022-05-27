import { useState } from 'react';
import { Link } from 'react-router-dom';

import { MenuItem } from '@mui/material';
import { DropDownMenu } from 'components/header/styled/index';

export default function MenuItemWithDropDown({
  link,
  selectedIndex,
  handleHover,
  handleClick,
  hoverTracker,
}) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const id = open ? 'simple-popover' + link.name : undefined;

  const handleClose = (event) => {
    handleHover(event);
    setOpen(false);
    setAnchorEl(null);
  };

  const handleOpen = (event) => {
    handleHover(event);
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleCloseModal = (event) => {
    const isModal = event.target.className.includes('Modal');
    if (isModal) {
      handleHover(event);
      setOpen(false);
      setAnchorEl(null);
    }
  };

  return (
    <>
      <MenuItem
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        component={'li'}
        onClick={handleClick}
        onMouseOver={handleOpen}
        selected={selectedIndex}
        sx={{ padding: 0, display: 'block' }}
      >
        <Link
          style={{
            display: 'block',
            textDecoration: 'none',
            color: 'black',
            padding: '1.5em',
          }}
          to={link.routePath}
        >
          {link.route}
        </Link>
      </MenuItem>

      <DropDownMenu
        id={id}
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
          onMouseLeave: handleClose,
        }}
        anchorEl={anchorEl}
        open={hoverTracker}
        onMouseOver={handleCloseModal}
      >
        {link.dropdown_links.links.map((link, index) => {
          return (
            <MenuItem key={index} sx={{ padding: 0 }}>
              <Link
                style={{
                  padding: '2em',
                  textDecoration: 'none',
                  color: 'black',
                  width: '100%',
                }}
                to={link.routePath}
              >
                {link.route}
              </Link>
            </MenuItem>
          );
        })}
      </DropDownMenu>
    </>
  );
}
