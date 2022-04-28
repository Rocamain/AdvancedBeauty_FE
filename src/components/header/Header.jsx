// Hook and data formatter
import { useState, useRef } from 'react';
import useFetchData from '../../hooks/useFetchData';

//// components, layouts and style hooks imports

import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import {
  HeaderContainer,
  Logo,
  Wrapper,
  PopoverMenu,
  BurgerButton,
} from './styled/index';
import NavMenu from './NavMenu';
import NavMenuList from './NavMenuList';

export default function Header() {
  // states and hooks

  const [selectedIndex, setSelectedIndex] = useState('Home');
  const [anchorEl, setAnchorEl] = useState(null);

  const theme = useTheme();
  const matchesBigScreens = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });

  const screenFormat = matchesBigScreens ? 'bigScreens' : 'mobile';
  const { data, loading } = useFetchData('menu', screenFormat);

  const ref = useRef(null);

  const navigationLinks = data?.links ? data?.links : null;
  const logo = data?.logo ? data?.logo : null;

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleOpen = () => {
    setAnchorEl(ref.current);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    !loading && (
      <>
        <HeaderContainer ref={ref}>
          <Wrapper fixed>
            <Logo src={logo.url} alt={logo.alternativeText} />

            {matchesBigScreens ? (
              <NavMenu
                navigationLinks={navigationLinks}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            ) : (
              <BurgerButton
                aria-describedby={id}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                onClick={handleOpen}
              >
                <MenuIcon />
              </BurgerButton>
            )}
          </Wrapper>
        </HeaderContainer>
        <PopoverMenu
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          <NavMenuList
            links={navigationLinks}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            onClose={handleClose}
          />
        </PopoverMenu>
      </>
    )
  );
}
