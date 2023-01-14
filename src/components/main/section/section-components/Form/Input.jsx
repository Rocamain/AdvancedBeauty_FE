import { TextField, Grid, MenuItem } from '@mui/material';
import useFetchBookingDb from 'hooks/useFetchBookingDb';

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
  ...restProps
}) {
  const { shops } = useFetchBookingDb('getShopsInfo');
  if (shops) {
    return (
      <Grid item xs={12} sm={12} md={fullWith ? 12 : 6}>
        <TextField
          id={id}
          label={label}
          value={value}
          select={options && true}
          onChange={onChange}
          onBlur={onBlur}
          multiline={multiline}
          rows={rows}
          size="small"
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
              <MenuItem key={index} value={shopName}>
                {shopName}
              </MenuItem>
            ))}
          <MenuItem key={4} value={'Other'}>
            Other
          </MenuItem>
        </TextField>
      </Grid>
    );
  }
}
