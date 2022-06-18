// Hook and data formatter
import { useState, useRef } from 'react';
import useFetchData from 'hooks/useFetchData';
import useNavigation from 'hooks/useNavigation';

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
} from 'components/header/styled/index';
import ScreenMenu from 'components/header/ScreenMenu';
import MobileMenu from 'components/header/MobileMenu';
import { useLocation } from 'react-router-dom';

export default function Header() {
  // states and hooks
  const { data, loading } = useFetchData('Logo');
  const navigation = useNavigation();
  const theme = useTheme();
  const matchesBigScreens = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });
  const { pathname } = useLocation();

  const formattedPath =
    pathname === '/'
      ? 'Home'
      : pathname.replaceAll('/', '').replaceAll('-', ' ');

  const [selectedIndex, setSelectedIndex] = useState(formattedPath);
  const [anchorEl, setAnchorEl] = useState(null);

  const ref = useRef(null);
  const open = Boolean(anchorEl);

  const id = open ? 'simple-popover' : null;

  const handleOpen = () => {
    setAnchorEl(ref.current);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    data &&
    navigation && (
      <>
        <HeaderContainer ref={ref}>
          <Wrapper fixed>
            <Logo src={data.photo.url} alt={data.photo.alternativeText} />

            {matchesBigScreens ? (
              <ScreenMenu
                links={navigation.nestedList}
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
          <MobileMenu
            links={navigation.flatList}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            onClose={handleClose}
          />
        </PopoverMenu>
      </>
    )
  );
}
