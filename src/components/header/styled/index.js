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
  backgroundColor: theme.palette.primary.contrastText,
  zIndex: 1000,
  top: 0,
  padding: '1em 0',
  gap: '0.5em',
  [theme.breakpoints.up('md')]: {
    height: '16vh',
    padding: '0',
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
  [theme.breakpoints.up('sm')]: {
    maxWidth: 600,
  },
  [theme.breakpoints.up('md')]: {
    width: '90vw',
    maxWidth: 900,
  },
  [theme.breakpoints.up('lg')]: {
    width: '80vw',
    maxWidth: 1000,
  },
  [theme.breakpoints.up('lg')]: {
    width: '65vw',
    maxWidth: 1300,
  },
}));

// General //

const Logo = styled(({ url, altText, formats, ...props }) => {
  return (
    <>
      <Box
        component="img"
        width="300"
        height="100"
        loading="lazy"
        src={url}
        alt={altText}
        title={altText}
        srcSet={`${formats.thumbnail.url} 700w,${formats.small.url} 1200w,`}
        sizes="(min-width: 0px) and (max-width: 700px) 700px,(min-width: 701px) 1200px 100vw"
        {...props}
      />
    </>
  );
})(({ theme }) => ({
  maxWidth: 180,
  [theme.breakpoints.between('sm', 'md')]: {
    maxWidth: 200,
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: 230,
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: 300,
  },
}));

// Mobile

const BurgerButton = styled((props) => (
  <IconButton aria-haspopup="true" aria-label="menu burger button" {...props} />
))(({ theme }) => ({
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
  padding: 0,
  '.MuiBackdrop-root': {
    padding: 0,
    backgroundColor: 'transparent',
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      top: '17vh',
    },
  },
  '.MuiPaper-root': {
    overflow: 'visible',
    [theme.breakpoints.up('md')]: {
      width: 270,
      paddingTop: 'calc(5vh)',
    },
    [theme.breakpoints.up('xl')]: {
      width: 320,
    },
  },
  '& .MuiList-root': {
    padding: '1.3em 0',
    backgroundColor: '#fafafa',
    boxShadow: theme.shadows[10],
    borderTop: `2px solid ${theme.palette.secondary.main}`,
  },
}));

// General //

//  Mobile all Links, Big screens Links without DropDown

const MenuLink = styled(({ mainLink, to, replace, title, ...props }) => {
  return (
    <MenuItem disableGutters dense {...props}>
      <Link to={to}>
        <Typography component="h3" variant="h6">
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
      color: `${theme.palette.text.main} !important`,
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

const Link = styled((props) => <LinkRouter {...props} />)(({ theme }) => ({
  textDecoration: 'none',
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
  Logo,
  Wrapper,
  PopoverMenu,
  BurgerButton,
  DropDownMenu,
  LinksMenu,
  MenuLink,
  Link,
};
