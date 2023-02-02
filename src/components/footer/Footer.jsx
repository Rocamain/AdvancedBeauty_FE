import { useLoaderData } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';
import { SecondaryButton } from 'components/shared/styled/';
import { SHOPS } from 'constants/index.js';

function Footer() {
  const { shops } = useLoaderData();

  return (
    shops && (
      <Box backgroundColor="text.primary" color="primary.contrastText">
        <Grid
          container
          columnSpacing={[0, 0, 4]}
          padding="5vh"
          justifyContent="center"
          alignItems="center"
          gap={['5em', '5em', 0]}
        >
          {shops.map(({ city, shopName, street, postcode, phone }) => {
            return (
              <Grid key={shopName} item xs={10} md={4} lg={3}>
                <Box marginBottom="2em">
                  <Box marginBottom="2em">
                    <Typography variant="footerTitle" component="h5">
                      {city}
                    </Typography>
                    <Typography variant="footerSubtitle" component="h6">
                      {shopName.toUpperCase()}
                    </Typography>
                    <Typography component="p" variant="footerParagraph">
                      {street}
                    </Typography>
                    <Typography component="p" variant="footerParagraph">
                      {postcode}
                    </Typography>
                    <Typography
                      component="p"
                      variant="footerParagraph"
                    >{`phone: ${phone}`}</Typography>
                    <Typography
                      component="p"
                      variant="footerParagraph"
                    >{`mobile: ${phone}`}</Typography>
                    <Typography
                      component="p"
                      variant="footerSubtitle"
                      marginTop="0.5em"
                    >
                      Times:
                    </Typography>
                    <Typography
                      component="p"
                      variant="footerParagraph"
                    >{`Mondays to Saturdays from ${SHOPS[shopName].openingTimes[0]} to ${SHOPS[shopName].openingTimes[1]}`}</Typography>
                  </Box>
                  <SecondaryButton
                    href="https://api.whatsapp.com/send?phone=+44568807804&text=Hola"
                    target="_blank"
                  >
                    Whatsapp
                  </SecondaryButton>
                </Box>
                <iframe
                  title={shopName}
                  loading="lazy"
                  src={SHOPS[shopName].googleMapAddress}
                  width="90%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    )
  );
}
export default Footer;
