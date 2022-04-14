// Hook and data formatter
import { useState, useRef } from 'react';
import useFetchData from '../../../hooks/useFetchData';
import filterNavigationLinks from '../../pages/main/HeaderUtils/filterNavigationLinks';

//// components, layouts and style hooks imports

import { useMediaQuery, IconButton, Popover } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledHeader, StyledImg, Container } from './HeaderStyled/index';
import StyledNavList from '../../organisms/NavList';

export default function Header() {
  const { data, loading } = useFetchData('menu');

  let navigationLinks = data?.data?.links
    ? filterNavigationLinks(data.data.links, false)
    : false;

  let logo = data?.data?.logo ? data?.data?.logo : false;

  const theme = useTheme();
  const ref = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const [selectedIndex, setSelectedIndex] = useState('Home');

  const handleOpen = () => {
    setAnchorEl(ref.current);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const matchesBigScreens = useMediaQuery(theme.breakpoints.up('md'), {
    noSsr: true,
  });

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    !loading && (
      <>
        <StyledHeader ref={ref}>
          <Container>
            <StyledImg
              component="img"
              src={logo.url}
              alt={logo.alternativeText}
            />

            <IconButton
              aria-describedby={id}
              aria-label="menu burger button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleOpen}
              sx={{
                display: {
                  md: 'none',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Container>
        </StyledHeader>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          sx={{
            display: {
              md: 'none',
            },
          }}
        >
          <StyledNavList
            links={navigationLinks}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            onClose={handleClose}
          />
        </Popover>
      </>
    )
  );
}
