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
    BackdropProps={{
      onMouseOver: onMouseOnBackdrop,
    }}
    disablePortal
    {...props}
  />
))(({ theme }) => ({
  zIndex: -1,
  '& .MuiBackdrop-root': {
    backgroundColor: 'transparent',
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
  ({ mainLink, to, replace, state, children, ...props }) => {
    return (
      <MenuItem disableGutters {...props}>
        <Link to={to} replace={replace} state={state}>
          <Typography component="h3" variant="p">
            {children}
          </Typography>
        </Link>
      </MenuItem>
    );
  }
)(({ theme, mainLink }) => ({
  padding: 0,
  a: {
    [theme.breakpoints.down('md')]: {
      padding: mainLink ? '0.5em 1.5em 0.5em' : '0.5em 3em 0.5em',
      backgroundColor: mainLink && 'rgba(0,0,0,3%)',
    },
  },
}));

const Link = styled((props) => <LinkRouter {...props} />)(({ theme }) => ({
  display: 'block',
  textDecoration: 'none',
  color: 'black',
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
