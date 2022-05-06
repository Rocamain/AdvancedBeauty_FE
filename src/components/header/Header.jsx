// Hook and data formatter
import { useState, useRef } from 'react';
import useFetchData from 'hooks/useFetchData';

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
import NavMenu from 'components/header/NavMenu';
import NavMenuList from 'components/header/NavMenuList';

export default function Header() {
  // states and hooks
  const [selectedIndex, setSelectedIndex] = useState('Home');
  const [anchorEl, setAnchorEl] = useState(null);
  const { data, loading } = useFetchData('menu');

  const theme = useTheme();
  const matchesBigScreens = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });

  const ref = useRef(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleOpen = () => {
    setAnchorEl(ref.current);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    data && (
      <>
        <HeaderContainer ref={ref}>
          <Wrapper fixed>
            <Logo src={data.logo.url} alt={data.logo.alternativeText} />

            {matchesBigScreens ? (
              <NavMenu
                links={data.links}
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
            links={data.links}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            onClose={handleClose}
          />
        </PopoverMenu>
      </>
    )
  );
}
