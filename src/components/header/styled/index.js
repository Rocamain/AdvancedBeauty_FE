import {
  styled,
  Container,
  Popover,
  Menu,
  MenuItem,
  IconButton,
  MenuList,
  Typography,
} from '@mui/material';
import { Link as LinkRouter } from 'react-router-dom';

const HeaderContainer = styled('header')(({ theme }) => ({
  height: '13vh',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 0px 0px',
  position: 'sticky',
  backgroundColor: 'white',
  zIndex: 1000,
  top: 0,

  [theme.breakpoints.up('md')]: {
    justifyContent: 'space-between',
    height: '13vh',
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
  width: '80vw',
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'flex',

  [theme.breakpoints.up('xl')]: {
    width: '65vw',
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
  border: 'none',

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

const DropDownMenu = styled(({ onMouseOnBackdrop, ...props }) => (
  <Menu
    elevation={0}
    disableRestoreFocus
    disableAutoFocusItem
    keepMounted
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    // container
    BackdropProps={{
      onMouseOver: onMouseOnBackdrop,
      // invisible: true,
    }}
    disablePortal
    {...props}
  />
))(({ theme }) => ({
  zIndex: -1,
  padding: 0,
  '& .MuiBackdrop-root': {
    padding: 0,
    backgroundColor: 'transparent',
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      top: '18vh',
    },
    [theme.breakpoints.up('lg')]: {
      top: '17vh',
    },
    [theme.breakpoints.up('xl')]: {
      top: '15.5vh',
    },
  },
  '& .MuiPaper-root': {
    overflow: 'visible',
    [theme.breakpoints.up('md')]: {
      paddingTop: 'calc(6vh - 3px )',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: 'calc(5vh)',
    },
  },
  '& .MuiList-root': {
    padding: '20px 0',
    backgroundColor: '#fafafa',
    boxShadow: theme.shadows[10],
    borderTop: `2px solid ${theme.palette.tertiary.main}`,
  },
}));

const LinksMenu = styled((props) => <MenuList autoFocus {...props} />)(
  ({ theme }) => {
    return {
      padding: '0',
      display: 'block',
      margin: '0 auto',
      [theme.breakpoints.down('md')]: {
        width: '85vw ! important',
        padding: '1em 0',

        borderTop: `2px solid ${theme.palette.tertiary.main}`,
      },
    };
  }
);
const MenuLink = styled(({ mainLink, to, replace, title, ...props }) => {
  return (
    <MenuItem disableGutters dense {...props}>
      <Link to={to}>
        <Typography component="h3" variant="p">
          {title}
        </Typography>
      </Link>
    </MenuItem>
  );
})(({ theme, mainLink, isFirst }) => {
  return {
    backgroundColor: isFirst && mainLink && 'rgba(0,0,0,9%)',
    '& .Mui-selected': {
      backgroundColor: 'rgba(117, 201, 204, 0.38)',
    },
    a: {
      [theme.breakpoints.down('md')]: {
        padding: mainLink ? '0.5em 1.5em 0.5em' : '0.5em 3em 0.5em',
        width: '100%',
      },
    },
    h3: {
      color: '#666',
      fontWeight: 600,
    },
  };
});

const Link = styled((props) => <LinkRouter {...props} />)(({ theme }) => ({
  display: 'block',
  textDecoration: 'none',
  padding: '1em 1.5em',
}));

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
