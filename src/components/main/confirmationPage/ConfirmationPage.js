import CardA from 'components/models/CardA/CardA.jsx';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

export default function ConfirmationPage({ props }) {
  const { state } = useLocation();

  const { serviceName, shopName, price, time, date, email, name } = state;
  return (
    <main style={{ minHeight: '50vh', height: '100%', marginBottom: '10vh' }}>
      <CardA
        sectionTitle={{ title: 'Booking Confirmation' }}
        content={Content({ serviceName, shopName, price, time, date })}
        bookingConfirmation={true}
        confirmationMsg={ConfirmationMsg({ email, name })}
      />
    </main>
  );
}

const ConfirmationMsg = ({ name, email }) => {
  return (
    <Box>
      <Typography variant="cardText" sx={{ fontWeight: 600 }}>
        {`Hi ${name}!!! Soon you will received a confirmation to your email:
        ${email}`}
      </Typography>
    </Box>
  );
};

const Content = ({ serviceName, shopName, price, time, date }) => {
  const dateString = `${date.$D}/${date.$D + 1}/${date.$y}`;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography
        color="primary"
        variant="h5"
        sx={{ textAlign: 'center', mb: '1em', fontWeight: 900 }}
      >
        Booking Details
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5em' }}>
        <Box sx={{ display: 'flex', flexDirection: ['column', 'row'] }}>
          <Typography
            variant="h6"
            color="tertiary"
            sx={{ minWidth: '90px', fontWeight: 700 }}
          >
            Service:
          </Typography>
          <Typography variant="h6">{serviceName}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: ['column', 'row'] }}>
          <Typography
            variant="h6"
            color="tertiary"
            sx={{ minWidth: '90px', fontWeight: 700 }}
          >
            Shop:
          </Typography>
          <Typography variant="h6">{shopName}</Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Typography
            variant="h6"
            color="tertiary"
            sx={{ minWidth: '90px', fontWeight: 700 }}
          >
            Date:
          </Typography>
          <Typography variant="h6">{dateString}</Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Typography
            variant="h6"
            color="tertiary"
            sx={{ minWidth: '90px', fontWeight: 700 }}
          >
            Time:
          </Typography>
          <Typography variant="h6">{time}</Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Typography
            variant="h6"
            color="tertiary"
            sx={{ minWidth: '90px', fontWeight: 700 }}
          >
            Price:
          </Typography>
          <Typography variant="h6">{price} &#x20AC;</Typography>
        </Box>
      </Box>
    </Box>
  );
};
