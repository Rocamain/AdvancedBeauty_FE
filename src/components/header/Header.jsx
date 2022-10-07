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
import { Loading } from 'components/shared/index';

export default function Header({ routes }) {
  // states and hooks

  const { data, loading } = useFetchData('strapi', { component: 'Logo' });

  const theme = useTheme();
  const matchesBigScreens = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });

  const { selectedLinks } = useMenuLinkSelected();
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

  if (loading) {
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
              selectedLinks={selectedLinks}
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
          selectedLinks={selectedLinks}
          onClose={handleClose}
        />
      </PopoverMenu>
    </>
  );
}
