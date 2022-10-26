import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import SectionTitle from 'components/shared/SectionTitle';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from 'components/models/Services/styled/index';
import { sortTreatments } from 'components/models/Services/utils/index';
import Modal from 'components/single/Modal/Modal';
import useFetchBookingDb from 'hooks/useFetchBookingDb';

const SHOP = {
  '/Services-and-Fares/Services-in-Turo-Park': 'Turo Park',
  '/Services-and-Fares/Services-in-Palma-de-Majorca': 'Palma de Majorca',
  "/Services-and-Fares/Services-in-L'Illa-Diagonal": "L'Illa Diagonal",
};

export default function Services() {
  const { services } = useFetchBookingDb('getServices');
  const { pathname } = useLocation();
  const [sectionExpanded, setSectionExpanded] = useState(null);
  const [serviceSelected, setServiceSelected] = useState(false);
  const [servicePrice, setServicePrice] = useState(null);
  const isModalOpen = Boolean(serviceSelected);
  const shopName = SHOP[pathname];

  const handleOpenModal = (e) => {
    setServiceSelected(e.target.id);
    setServicePrice(e.target.value);
  };
  const handleClose = () => setServiceSelected(null);
  const handleChange = (event, newExpanded) => {
    setSectionExpanded(newExpanded ? event.target.innerText : false);
  };

  if (services) {
    const sortedTreatments = sortTreatments(services);

    return (
      <Box
        sx={{
          width: ['94vw', '80vw', '80vw', '80vw', '70vw'],
          margin: '0 auto',
        }}
      >
        <SectionTitle title={`Services in ${shopName}`} textJustify="left" />

        {sortedTreatments.map(({ name, services }, index) => {
          return (
            <Accordion
              key={index}
              expanded={sectionExpanded === name}
              onChange={handleChange}
            >
              <AccordionSummary
                aria-controls={`panel-${name}-content`}
                id={`panel-${name}-header`}
              >
                <Typography component="h4" variant="h6">
                  {name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box component={'ul'}>
                  {services.map(({ price, serviceName }, index) => {
                    return (
                      <Box
                        key={index}
                        onClick={handleOpenModal}
                        sx={{ cursor: 'pointer' }}
                        component="li"
                        id={serviceName}
                        value={price}
                      >
                        {serviceName}
                        <span> - </span>
                        <span value={price}> {`${price},00`}</span>
                        <span> &#x20AC;</span>
                      </Box>
                    );
                  })}
                </Box>
              </AccordionDetails>
            </Accordion>
          );
        })}
        {serviceSelected && (
          <Modal
            open={isModalOpen}
            handleClose={handleClose}
            serviceName={serviceSelected}
            shopName={shopName}
            price={servicePrice}
            serviceType={sectionExpanded}
          />
        )}
      </Box>
    );
  }
}
