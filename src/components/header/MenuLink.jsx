import { forwardRef } from 'react';
import { MenuItem, Typography } from '@mui/material';
import { Link } from 'components/header/styled/';

const ForwardMenuLink = forwardRef(
  (
    { mainLink, to, replace, state, title, isFirst, children, ...props },
    ref
  ) => {
    return (
      <MenuItem
        ref={ref}
        disableGutters
        dense
        {...props}
        sx={(theme) => ({
          backgroundColor: isFirst && mainLink && 'rgba(0,0,0,9%)',
          color: '#666 !important',
          '&.Mui-selected': {
            backgroundColor: 'rgba(117, 201, 204, 0.38)',
            a: {
              display: 'block',
              textDecoration: 'none',
              padding: '1em 1.5em',

              [theme.breakpoints.down('md')]: {
                color: '#666',
                padding: mainLink ? '0.5em 1.5em 0.5em' : '0.5em 3em 0.5em',
              },
            },
          },
          h3: {
            color: '#666',
            fontWeight: 600,
          },
        })}
      >
        <Link
          to={to}
          replace={replace}
          state={state}
          style={{ textDecoration: 'none' }}
        >
          <Typography component="h3" variant="p">
            {title}
          </Typography>
        </Link>
        {children && children}
      </MenuItem>
    );
  }
);

export default ForwardMenuLink;
