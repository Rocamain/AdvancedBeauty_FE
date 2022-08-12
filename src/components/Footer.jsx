import { Box, Grid, Typography } from '@mui/material';
import { Button } from 'components/shared/styled/';

const data = [
  {
    city: 'Palma de Mallorca',
    shopName: 'Palma',
    street: 'C/ Josep Anselm Clavé, 6',
    postcode: '07002  - Palma de Mallorca',
    phone: 'XXX XXX XXX XX',
    mobile: 'XXX XXX XXX',
    openingTimes: ['9:30', '20:30'],
    openingTimesWnked: ['10', '15'],
    googleMapAddress:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d872.0178610391715!2d2.6541507531398913!3d39.57367450475289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12979253c75938f1%3A0xe974fedce6bb1bfa!2sAz+Est%C3%A9tica+Avanzada!5e0!3m2!1ses!2ses!4v1535230926482',
  },
  {
    city: 'Barcelona',
    shopName: 'Turo Park',
    street: 'C/ Tenor Viñas, 3',
    postcode: '08021 - Barcelona',
    phone: 'XXX XXX XXX XX',
    mobile: 'XXX XXX XXX',
    openingTimes: ['9:30', '21'],
    openingTimesWnked: ['9', '15'],
    googleMapAddress:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.0286127000722!2d2.1398713162238434!3d41.39518497926346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49876f2e7b20d%3A0xcdfc8ef095b24329!2s2u+Tur%C3%B3+Park!5e0!3m2!1ses!2ses!4v1535230836808',
  },

  {
    city: 'Barcelona',
    shopName: 'L´Illa DiagonalL',
    street: 'Avda. Diagonal, 569',
    postcode: '08029 - Barcelona',
    phone: 'XXX XXX XXX XX',
    mobile: 'XXX XXX XXX',
    openingTimes: ['9:30', '21'],
    openingTimesWnked: ['9', '21'],
    googleMapAddress:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488.86906321291707!2d2.134061846769298!3d41.389213653431696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a499e3a8008c35%3A0xc82c19eb75d9dbe3!2s2u+Est%C3%A8tica+Avan%C3%A7ada!5e0!3m2!1ses!2ses!4v1535230696541',
  },
];

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#333333', color: 'primary.contrastText' }}>
      <Grid
        container
        columnSpacing={[0, 0, 4]}
        rowSpacing={[8, 8, 0]}
        sx={{
          justifyContent: 'center',
          width: '100%',
          mx: 'auto',
          p: '5vh',
        }}
      >
        {data.map((shop, index) => (
          <Grid key={index} item xs={7} md={4} lg={3}>
            <Box sx={{ marginBottom: '2em' }}>
              <Typography variant="footerTitle" component="h5">
                {shop.city}
              </Typography>
              <Typography variant="footerSubtitle" component="h6">
                {shop.shopName.toUpperCase()}
              </Typography>
              <Typography component="p" variant="footerParagraph">
                {shop.street}
              </Typography>
              <Typography component="p" variant="footerParagraph">
                {shop.postcode}
              </Typography>
              <Typography
                component="p"
                variant="footerParagraph"
              >{`phone: ${shop.phone}`}</Typography>
              <Typography
                component="p"
                variant="footerParagraph"
              >{`mobile: ${shop.phone}`}</Typography>

              <Typography
                component="p"
                variant="footerSubtitle"
                sx={{ marginTop: '0.5em' }}
              >
                Times:
              </Typography>
              <Typography
                component="p"
                variant="footerParagraph"
              >{`Mondays to Fridays from ${shop.openingTimes[0]} to ${shop.openingTimes[1]}`}</Typography>
              <Typography
                component="p"
                variant="footerParagraph"
                sx={{ marginBottom: '1.5em' }}
              >{`Saturdays from ${shop.openingTimesWnked[0]} to ${shop.openingTimesWnked[1]}`}</Typography>

              <Button
                href="https://api.whatsapp.com/send?phone=+44568807804&text=Hola"
                target="_blank"
              >
                <p>Whatsapp</p>
              </Button>
            </Box>

            <iframe
              title={`shop {shop.shopName}`}
              loading="lazy"
              src={shop.googleMapAddress}
              width="90%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen={true}
            ></iframe>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Footer;
