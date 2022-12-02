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
          h3: {
            fontSize: '1.05rem',
            lineHeight: 1.3,
            color: theme.palette.text.main,
            fontWeight: 600,
          },
          [theme.breakpoints.up('xl')]: {
            h3: {
              fontSize: '1.2rem !important',
              color: 'red',
            },
            a: { padding: '1em 1.5em' },
          },
        })}
      >
        <Link to={to} style={{ textDecoration: 'none' }}>
          <Typography component="h3" variant="h6">
            {title}
          </Typography>
        </Link>
        {children}
      </MenuItem>
    );
  }
);

export default ForwardMenuLink;
