import { Box, Typography } from '@mui/material';

export default function BookingDetails({
  serviceName,
  shopName,
  price,
  time,
  date,
}) {
  const dateString = `${date.$D}/${date.$M}/${date.$y}`;
  return (
    <>
      <Box>
        <Typography
          color='primary'
          variant='h2'
          component='h3'
          sx={{ textAlign: 'center', mb: '0.5em', fontWeight: 900 }}
        >
          Booking Details
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1.5em',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '0.5em',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                component='h6'
                variant='confirmationText'
                color='orange'
                minWidth='100px'
              >
                Service:
              </Typography>
              <Typography component='p' variant='confirmationText'>
                {serviceName}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                component='h6'
                variant='confirmationText'
                color='orange'
                minWidth='100px'
              >
                Shop:
              </Typography>
              <Typography component='p' variant='confirmationText'>
                {shopName}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                component='h6'
                variant='confirmationText'
                color='orange'
                minWidth='100px'
              >
                Date:
              </Typography>
              <Typography component='p' variant='confirmationText'>
                {dateString}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                component='h6'
                variant='confirmationText'
                color='orange'
                minWidth='100px'
              >
                Time:
              </Typography>
              <Typography component='p' variant='confirmationText'>
                {time}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                component='h6'
                variant='confirmationText'
                color='orange'
                minWidth='100px'
              >
                Price:
              </Typography>
              <Typography component='p' variant='confirmationText'>
                {price} &#x20AC;
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
