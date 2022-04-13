import { styled } from '@mui/material/styles';

import { List } from '@mui/material';

const StyledNavList = styled(List)(({ theme }) => ({
  width: '85vw',
  margin: '0 auto',
  ariaLabel: 'navigation menu',
  alignItems: 'flexStart',
  justifyContent: 'flex-end',
  borderTop: '3px solid #2ea3f2',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    alignItems: 'center',
    borderTop: 'none',
    flexDirection: 'row',

    width: 'auto',
  },
}));

export { StyledNavList };
