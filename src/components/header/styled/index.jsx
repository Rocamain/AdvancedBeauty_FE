import {
  styled,
  Box,
  Popover,
  Menu,
  MenuItem,
  IconButton,
  MenuList,
  Typography,
} from '@mui/material';
import { Link as LinkRouter } from 'react-router-dom';

// General //

const HeaderContainer = styled('header')(({ theme }) => ({
  boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 0px 0px',
  position: 'sticky',
  backgroundColor: '#F4F9FC',
  zIndex: 1000,
  top: 0,
  right: 0,
  gap: '0.5em',

  [theme.breakpoints.up('md')]: {
    justifyContent: 'space-between',
  },
}));
const Wrapper = styled(Box)(({ theme }) => ({
  width: '80vw',
  margin: '0 auto',

  height: 'inherit',
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'flex',
  maxWidth: 400,
  gap: '1em',
  [theme.breakpoints.up('sm')]: {
    maxWidth: 600,
  },
  [theme.breakpoints.up('md')]: {
    width: '95vw',
    maxWidth: 900,
    padding: '8px 0',
  },
  [theme.breakpoints.up('lg')]: {
    width: '80vw',
    maxWidth: 1200,
  },
  [theme.breakpoints.up('lg')]: {
    width: '70vw',
    maxWidth: 1300,
  },
}));

// Mobile

const BurgerButton = styled((props) => {
  return (
    <IconButton
      aria-haspopup='true'
      aria-label='menu burger button'
      {...props}
    />
  );
})(({ theme }) => ({
  color: theme.palette.tertiary.main,
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

// Mobile

const PopoverMenu = styled((props) => (
  <Popover
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))(({ theme }) => ({
  border: 'none',
  display: 'flex',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
  '.MuiPaper-root': {
    width: '90vw',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: '80vw',
    },
  },
}));

// Mobile

const LinksMenu = styled((props) => <MenuList autoFocus {...props} />)(
  ({ theme }) => {
    return {
      padding: '1em 0',
      display: 'flex',
      flexDirection: 'column',
      width: 'inherit',
      borderTop: `2px solid ${theme.palette.secondary.main}`,
      backgroundColor: '#fafafa',
    };
  }
);

// Big Screens

const DropDownMenu = styled(({ onMouseOnBackdrop, ...props }) => (
  <Menu
    elevation={0}
    disableRestoreFocus
    disableAutoFocusItem
    keepMounted
    disableScrollLock
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    BackdropProps={{
      onMouseOver: onMouseOnBackdrop,
    }}
    disablePortal
    {...props}
  />
))(({ theme }) => ({
  color: '#333333',
  zIndex: -1,
  padding: 0,
  '.MuiBackdrop-root': {
    padding: 0,
    backgroundColor: 'transparent',
    [theme.breakpoints.up('md')]: {
      top: '110px',
    },
    [theme.breakpoints.up('lg')]: {
      top: '135px',
    },
    [theme.breakpoints.up('xxl')]: {
      top: '145px',
    },
  },
  '.MuiPaper-root': {
    [theme.breakpoints.up('md')]: {
      width: 270,
      backgroundColor: 'transparent',
      paddingTop: '26px',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '38px',
      width: 320,
    },
    [theme.breakpoints.up('xxl')]: {
      paddingTop: '43px',
    },
  },
  '& .MuiList-root': {
    backgroundColor: '#F4F9FC',
    borderTop: `4px solid ${theme.palette.secondary.main}`,
  },
}));

// General //

//  Mobile all Links, Big screens Links without DropDown

const MenuLink = styled(({ mainLink, to, replace, title, ...props }) => {
  return (
    <MenuItem disableGutters dense {...props}>
      <Link to={to}>
        <Typography
          component='h3'
          variant='h6'
          sx={{ fontFamily: 'Open Sans' }}
        >
          {title}
        </Typography>
      </Link>
    </MenuItem>
  );
})(({ theme, mainLink }) => {
  return {
    borderRadius: '5px',
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
      color: '#333333',
      fontSize: '1.05rem',
      lineHeight: 1.3,
      fontWeight: 600,
    },

    [theme.breakpoints.down('md')]: {
      whiteSpace: 'inherit',
      width: '90%',
      margin: '0 auto',
      paddingLeft: '2em',
      a: {
        width: 'inherit',
        padding: '0.4em',
      },
      h3: {
        marginLeft: mainLink ? '0em' : '1.2em',
      },
    },
    [theme.breakpoints.up('xl')]: {
      h3: {
        fontSize: '1.2rem',
      },
    },
  };
});

// Mobile

const Link = styled(({ to, ...props }) => {
  return <LinkRouter to={to} {...props} />;
})(({ theme }) => ({
  textDecoration: 'none',
  width: '100%',
  padding: '0.5em 1em',

  [theme.breakpoints.up('md')]: {
    padding: '1em 1.2em',
  },
  [theme.breakpoints.up('xl')]: {
    padding: '1em 1.5em',
  },
}));

export {
  HeaderContainer,
  Wrapper,
  PopoverMenu,
  BurgerButton,
  DropDownMenu,
  LinksMenu,
  MenuLink,
  Link,
};
