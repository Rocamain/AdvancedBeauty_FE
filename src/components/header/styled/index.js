import { styled, alpha, List, Container, Popover, Menu } from '@mui/material';
import { IconButton } from '@mui/material';

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
        '&:active': {
          // backgroundColor: alpha(
          //   theme.palette.primary.main,
          //   theme.palette.action.selectedOpacity
          // ),
        },
      },
    },
  };
});

const MenuList = styled(List)(({ theme }) => ({
  width: '85vw',
  margin: '0 auto',
  ariaLabel: 'navigation menu',
  alignItems: 'flexStart',
  justifyContent: 'flex-end',
  borderTop: '3px solid #2ea3f2',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    alignItems: 'center',
    borderTop: 'none',
    flexDirection: 'row',
    width: 'auto',
  },
}));

export {
  HeaderContainer,
  Logo,
  Wrapper,
  PopoverMenu,
  BurgerButton,
  DropDownMenu,
  MenuList,
};
