import { forwardRef } from 'react';
import { MenuItem, Typography } from '@mui/material';
import { Link } from 'components/header/styled/';

const ForwardMenuLink = forwardRef(
  ({ dropdownLink, to, title, children, ...props }, ref) => {
    return (
      <MenuItem
        ref={ref}
        disableGutters
        dense
        className="MuiTypography-h6"
        {...props}
        sx={(theme) => ({
          borderRadius: '5px',
          whiteSpace: 'inherit',
          width: dropdownLink && '90%',
          margin: dropdownLink && '0.5em',
          a: { padding: '1em 1.2em' },
          ':hover': {
            backgroundColor: theme.palette.linkHover,
          },
          '&.Mui-selected': {
            backgroundColor: theme.palette.linkSelected,
            '&:hover': {
              backgroundColor: theme.palette.linkHover,
            },
          },
        })}
      >
        <Link to={to} style={{ textDecoration: 'none' }}>
          <Typography
            component="h3"
            variant="h6"
            sx={{ fontFamily: 'Open Sans', textAlign: 'center' }}
          >
            {title}
          </Typography>
        </Link>
        {children}
      </MenuItem>
    );
  }
);

export default ForwardMenuLink;
