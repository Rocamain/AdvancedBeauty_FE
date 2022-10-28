import { styled, IconButton as MuiIconButton } from '@mui/material';

const MyIconButton = styled((props) => <MuiIconButton {...props} />)(
  ({ theme }) => ({
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: ' rgba(0, 0, 0, 0.10)',
    },
    svg: {
      fontSize: '29px',
    },
  })
);

export default function IconButton(props) {
  return <MyIconButton {...props} />;
}
