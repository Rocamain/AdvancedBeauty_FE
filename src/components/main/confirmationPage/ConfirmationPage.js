import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Card } from 'components/models/CardA/styled/index.js';
import SectionTitle from 'components/shared/SectionTitle.jsx';

const ConfirmationMsg = ({ name, email }) => {
  return (
    <Box sx={{ marginBottom: '2em' }}>
      <Typography variant="cardText" component="p">
        {`Hi ${name}!!! Soon you will received a confirmation to your email: ${email}`}
      </Typography>
    </Box>
  );
};

const BookingDetails = ({ serviceName, shopName, price, time, date }) => {
  const dateString = `${date.$D}/${date.$M}/${date.$y}`;
  return (
    <Box>
      <Typography
        color="primary"
        variant="h2"
        component="h3"
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
              component="h6"
              variant="cardText"
              color="orange"
              minWidth="100px"
            >
              Service:
            </Typography>
            <Typography component="p" variant="cardText">
              {serviceName}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              component="h6"
              variant="cardText"
              color="orange"
              minWidth="100px"
            >
              Shop:
            </Typography>
            <Typography component="p" variant="cardText">
              {shopName}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              component="h6"
              variant="cardText"
              color="orange"
              minWidth="100px"
            >
              Date:
            </Typography>
            <Typography component="p" variant="cardText">
              {dateString}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              component="h6"
              variant="cardText"
              color="orange"
              minWidth="100px"
            >
              Time:
            </Typography>
            <Typography component="p" variant="cardText">
              {time}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              component="h6"
              variant="cardText"
              color="orange"
              minWidth="100px"
            >
              Price:
            </Typography>
            <Typography component="p" variant="cardText">
              {price} &#x20AC;
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default function ConfirmationPage({ props }) {
  const { state } = useLocation();
  const { email, name, ...bookingDetails } = state;

  return (
    <main
      style={{
        paddingBottom: '10vh',
        margin: '10vh 0',
      }}
    >
      <Box
        sx={{
          margin: '0 auto',
          width: ['90%', '80%', '65%'],
        }}
      >
        <SectionTitle title="Booking Confirmation" grid cardA />
        <ConfirmationMsg email={email} name={name} />
        <Card card="booking">
          <BookingDetails {...bookingDetails} />
        </Card>
      </Box>
    </main>
  );
}
