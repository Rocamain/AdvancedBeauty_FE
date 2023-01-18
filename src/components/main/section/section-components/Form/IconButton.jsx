import { styled, IconButton as MuiIconButton } from '@mui/material';

const MyIconButton = styled((props) => (
  <MuiIconButton size="large" {...props} />
))(({ theme }) => ({
  '&:hover': {
    color: theme.palette.primary.main,
    backgroundColor: ' rgba(0, 0, 0, 0.10)',
  },
  svg: {
    fontSize: '2.3rem',
  },
}));

export default function IconButton(props) {
  return <MyIconButton {...props} />;
}
