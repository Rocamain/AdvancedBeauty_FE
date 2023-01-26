import { TextField, Grid, MenuItem } from '@mui/material';

export default function Input({
  options,
  fullWith,
  onChange,
  onBlur,
  label,
  id,
  value,
  multiline,
  rows,
  type,
  shops,
  ...restProps
}) {
  return (
    <Grid item xs={12} sm={12} md={fullWith ? 12 : 6}>
      <TextField
        id={id}
        label={label}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        multiline={multiline}
        rows={rows}
        size="small"
        type={type}
        {...restProps}
        sx={
          id === 'result'
            ? {
                width: '40px !important',
                backgroundColor: '#eee',
                marginLeft: '5px',
                fontSize: '1rem !important',
                input: {
                  p: '8px !important',
                },
              }
            : {
                width: '100%',
                backgroundColor: '#eee',
                fontSize: '1rem !important',
              }
        }
      >
        {options &&
          shops.map(({ shopName }, index) => (
            <MenuItem key={shopName} value={shopName} type="text">
              {shopName}
            </MenuItem>
          ))}
        <MenuItem key="Other" value="Other">
          Other
        </MenuItem>
        <MenuItem key="Strapi" value="Strapi">
          Strapi access
        </MenuItem>
      </TextField>
    </Grid>
  );
}
