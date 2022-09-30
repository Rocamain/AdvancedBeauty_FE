// Hook and data formatter
import { useState, useRef } from 'react';
import useFetchData from 'hooks/useFetchData';
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
import { Error, Loading } from 'components/shared/index';

export default function Header({ routes }) {
  // states and hooks

  const { data, loading } = useFetchData('Logo');
  const theme = useTheme();
  const matchesBigScreens = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });

  const { selectedLink, setSelectedLink, pathBuilder } = useMenuLinkSelected();
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

  const handleSelect = (e, fullPath) => {
    const splitPath = pathBuilder(fullPath);
    setSelectedLink(splitPath);
    const hasHash = fullPath.includes('#');
    if (!hasHash) {
      window.scrollTo(0, 0);
    }
  };

  if (!data) {
    return <Loading />;
  }

  return (
    <>
      <HeaderContainer ref={ref}>
        <Wrapper fixed>
          <Logo src={data.photo.url} alt={data.photo.alternativeText} />
          {matchesBigScreens ? (
            <ScreenMenu
              links={routes.nestedList}
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
          links={routes.flatList}
          selectedLink={selectedLink}
          handleSelect={handleSelect}
          onClose={handleClose}
        />
      </PopoverMenu>
    </>
  );
}
