import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import {
  Card,
  Container,
} from 'components/main/section/section-components/CardA/styled/index';
import BookingDetails from 'components/main/pages/confirmationPage/BookingDetails';
import Hero from 'components/main/section/section-components/Hero/Hero';
import cover from 'assets/CardA_Photo.jpg';
const ConfirmationMsg = ({ name, email }) => {
  return (
    <Box sx={{ marginBottom: '2em' }}>
      <Typography variant='confirmationText' component='p'>
        {`Hi ${name}!!! Soon you will received a confirmation to your email: ${email}`}
      </Typography>
    </Box>
  );
};

export default function ConfirmationPage(props) {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  if (state) {
    const { email, name, ...bookingDetails } = state;

    return (
      <main>
        <Hero
          title='Thanks for your reservation'
          subtitle='Booking Confirmation'
          cover={cover}
          showContent={false}
        />
        <Box
          sx={{
            margin: '5vh auto 15vh auto',
            width: ['90%', '80%', '65%'],
          }}
        >
          <Container background='leaves'>
            <ConfirmationMsg email={email} name={name} />
            <Card card='booking'>
              <BookingDetails {...bookingDetails} />
            </Card>
          </Container>
        </Box>
      </main>
    );
  }
}
