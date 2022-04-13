import { useState, useRef } from 'react';

//// components, layouts and style hooks imports

import { useMediaQuery, IconButton, Popover, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { StyledHeader, StyledImg, Container } from './HeaderStyled/index';
import StyledNavList from '../../organisms/NavList';
// query data context

import { useQuery } from '@apollo/client';
import navLinksFormtr from '../../../utils/navLinksFormtr';
import GETMENU from '../../../../src/queries/getMenu';

export default function Header() {
  const { err, data, loading } = useQuery(GETMENU);

  const navBarData = navLinksFormtr(data, false);

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

  if (loading) {
    return <h1>loading</h1>;
  }

  if (err) {
    return <h1>`Error! ${err.message}`</h1>;
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <StyledHeader ref={ref}>
        <Container>
          <StyledImg
            component="img"
            src={navBarData.url}
            alt={navBarData.alternativeText}
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
          links={navBarData.formattedLinks}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          onClose={handleClose}
        />
      </Popover>
    </>
  );
}
