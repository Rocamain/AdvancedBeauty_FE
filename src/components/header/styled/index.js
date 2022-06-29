import {
  styled,
  Container,
  Popover,
  Menu,
  MenuItem,
  IconButton,
  Menu as MuiMenu,
  Typography,
} from '@mui/material';
import { Link as LinkRouter } from 'react-router-dom';

const HeaderContainer = styled('header')(({ theme }) => ({
  width: '100vw',
  height: '13vh',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 0px 0px',
  position: 'sticky',
  backgroundColor: 'white',
  zIndex: 1000,
  top: 0,

  [theme.breakpoints.up('md')]: {
    height: '18vh',
  },
  [theme.breakpoints.up('lg')]: {
    justifyContent: 'space-between',
    height: '17vh',
  },
  [theme.breakpoints.up('xl')]: {
    height: '15.5vh',
  },
}));

const Logo = styled('img')(({ theme }) => ({
  maxWidth: '140px',

  [theme.breakpoints.up('sm')]: {
    maxWidth: '200px',
  },
  [theme.breakpoints.between('md', 'lg')]: {
    maxWidth: '30%',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '300px',
  },
}));

const Wrapper = styled(Container)(({ theme }) => ({
  height: 'inherit',
  margin: '0 auto',
  maxWidth: '80%',
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'flex',

  [theme.breakpoints.up('xl')]: {
    maxWidth: '70%',
  },
}));

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
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const BurgerButton = styled((props) => (
  <IconButton aria-haspopup="true" aria-label="menu burger button" {...props} />
))(({ theme }) => ({
  color: theme.palette.tertiary.main,
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const DropDownMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    hideBackdrop
    disablePortal
    {...props}
  />
))(({ theme }) => {
  return {
    top: '15vh',
    '& .MuiPaper-root': {
      borderRadius: 6,
      top: '0!important',
      color:
        theme.palette.mode === 'light'
          ? 'rgb(55, 65, 81)'
          : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: theme.spacing(1),
      },
      '&MuiPopover-paper': {},
      '& .MuiMenuItem-root': {
        '&:active': {},
      },
    },
  };
});

const LinksMenu = styled((props) => <MenuList autoFocus {...props} />)(
  ({ theme }) => {
    return {
      padding: 0,
      display: 'block',
      margin: '0 auto',
      [theme.breakpoints.down('md')]: {
        width: '85vw ! important',
        padding: '0.5em 0',
        borderTop: `2px solid ${theme.palette.tertiary.main}`,
      },
    };
  }
);
const MenuLink = styled(
  ({ mainLink, to, children, onClick, onMouseLeave, ...props }) => {
    return (
      <MenuItem
        disableGutters={true}
        {...props}
        onClick={(e) => onClick(e, to)}
      >
        <Link to={to}>
          <Typography variant="navLink" component="h2">
            {children}
          </Typography>
        </Link>
      </MenuItem>
    );
  }
)(({ theme, mainLink }) => {
  return {
    padding: '0 !important',
    boxSizing: 'border-box',
    backgroundColor: mainLink && 'rgba(0,0,0,3%)',
    display: 'block',

    a: {
      [theme.breakpoints.down('md')]: {
        display: 'block',
        whiteSpace: 'pre-wrap',
        padding: mainLink ? '1.2em 5em 1.2em' : '1em 7em 1em',
      },
      [theme.breakpoints.down('sm')]: {
        padding: mainLink ? '0.8em 1em 0.8em' : '0.5em 2em 0.5em',
      },
    },
  };
});

const Link = styled((props) => <LinkRouter {...props} />)(({ theme }) => {
  return {
    display: 'block',
    textDecoration: 'none',
    color: 'black',
    padding: '1.5em',
  };
});

export {
  HeaderContainer,
  Logo,
  Wrapper,
  PopoverMenu,
  BurgerButton,
  DropDownMenu,
  LinksMenu,
  MenuLink,
  Link,
};
