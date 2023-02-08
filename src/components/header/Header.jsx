import { useLoaderData } from 'react-router-dom';
import { useState, useRef } from 'react';
import useMenuLinkSelected from 'hooks/useMenuLinkSelected';
import { useMediaQuery, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import {
  HeaderContainer,
  Wrapper,
  PopoverMenu,
  BurgerButton,
} from 'components/header/styled/index';
import ScreenMenu from 'components/header/ScreenMenu';
import MobileMenu from 'components/header/MobileMenu';
import Logo from 'components/shared/Image.jsx';

export default function Header({ navigationLinks }) {
  const { logo } = useLoaderData();
  const { selectedLinks } = useMenuLinkSelected();
  const theme = useTheme();
  const matchesBigScreens = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });
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
    <>
      <HeaderContainer id="header" ref={ref}>
        <Wrapper>
          <Box
            sx={{
              width: ['60%', '50%', '30%'],
            }}
          >
            {logo && (
              <Logo
                height={[80, 100, 120, 140, 160]}
                width="100%"
                url={logo.formats.thumbnail.url}
                formats={logo.formats}
                alt={logo.alternativeText}
                componentType="logo"
              />
            )}
          </Box>
          {matchesBigScreens ? (
            <ScreenMenu links={navigationLinks} selectedLinks={selectedLinks} />
          ) : (
            <Box>
              <BurgerButton
                aria-describedby={id}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                onClick={handleOpen}
              >
                <MenuIcon fontSize="large" sx={{ fontSize: '2.5rem' }} />
              </BurgerButton>
            </Box>
          )}
        </Wrapper>
      </HeaderContainer>
      {!matchesBigScreens && (
        <PopoverMenu
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          <MobileMenu
            links={navigationLinks}
            selectedLinks={selectedLinks}
            onClose={handleClose}
          />
        </PopoverMenu>
      )}
    </>
  );
}
