import { styled, useTheme } from '@mui/material/styles';

const StyledHeader = styled('header')(({ theme }) => ({
  width: '100vw',
  height: '13vh',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 0px 0px',
  position: 'sticky',
  backgroundColor: 'white',
  zIndex: 1000,
  top: 0,

  [theme.breakpoints.up('md')]: {
    height: '18vh',
  },
  [theme.breakpoints.up('lg')]: {
    justifyContent: 'space-between',
    height: '17vh',
  },
  [theme.breakpoints.up('xl')]: {
    height: '15.5vh',
  },
}));

const StyledImg = styled('img')(({ theme }) => ({
  maxWidth: '140px',

  [theme.breakpoints.up('sm')]: {
    maxWidth: '200px',
  },
  [theme.breakpoints.between('md', 'lg')]: {
    maxWidth: '30%',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '300px',
  },
}));

const Container = styled('div')(({ theme }) => ({
  width: '90%',
  margin: '0 auto',
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'flex',
  padding: '0.4em 0',

  [theme.breakpoints.up('sm')]: {
    width: '85%',
  },
  [theme.breakpoints.up('md')]: {
    width: '80%',
    justifyContent: 'space-between',
  },
  [theme.breakpoints.up('lg')]: {
    width: '70%',
  },
  [theme.breakpoints.up('xl')]: {
    width: '65%',
  },
}));

export { StyledHeader, StyledImg, Container };
