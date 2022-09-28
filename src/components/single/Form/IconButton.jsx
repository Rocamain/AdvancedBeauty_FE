import { styled, IconButton as MuiIconButton } from '@mui/material';

const MyIconButton = styled((props) => <MuiIconButton {...props} />)(
  ({ theme }) => ({
    left: '-10px',
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: ' rgba(0, 0, 0, 0.10)',
      borderRadius: '10px',
      padding: '3px',
      margin: '-3px',
    },
    svg: {
      fontSize: '29px',
    },
  })
);

export default function IconButton(props) {
  return <MyIconButton {...props} />;
}
