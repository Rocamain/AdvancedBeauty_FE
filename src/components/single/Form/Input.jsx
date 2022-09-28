import { TextField, Grid, MenuItem } from '@mui/material';

export default function Input({ options, fullWith, ...props }) {
  return (
    <Grid item xs={12} sm={12} md={fullWith ? 12 : 6}>
      <TextField
        {...props}
        sx={
          props.id === 'result'
            ? {
                width: '40px !important',
                height: '40px !important',
                marginLeft: '5px',
                input: {
                  p: '8px !important',
                },
              }
            : null
        }
      >
        {options &&
          options.map((shop, index) => (
            <MenuItem key={index} value={shop}>
              {shop}
            </MenuItem>
          ))}
      </TextField>
    </Grid>
  );
}
