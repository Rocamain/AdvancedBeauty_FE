// Hook and data formatter
import { useState, useRef } from 'react';
import useFetchData from 'hooks/useFetchData';
import useNavigation from 'hooks/useNavigation';
import useMenuLinkSelected from 'hooks/useMenuLinkSelected';

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

export default function Header() {
  // states and hooks
  const { data, loading } = useFetchData('Logo');
  const navigation = useNavigation();
  const { selectedLink, setSelectedLink, pathBuilder } = useMenuLinkSelected();
  const [anchorEl, setAnchorEl] = useState(null);

  const theme = useTheme();
  const matchesBigScreens = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });

  const ref = useRef(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : null;

  const handleOpen = () => {
    setAnchorEl(ref.current);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (e, fullPath) => {
    const splitPath = pathBuilder(fullPath);
    setSelectedLink(splitPath);
    const hasHash = fullPath.includes('#');
    if (!hasHash) {
      window.scrollTo(0, 0);
    }
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
                selectedLink={selectedLink}
                handleSelect={handleSelect}
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
            selectedLink={selectedLink}
            handleSelect={handleSelect}
            onClose={handleClose}
          />
        </PopoverMenu>
      </>
    )
  );
}
