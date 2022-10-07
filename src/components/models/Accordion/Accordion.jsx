import { useState } from 'react';
import useFetchData from 'hooks/useFetchData';
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from 'components/models/Accordion/styled/index';
import { Loading } from 'components/shared/index';
import { sortTreatments } from 'components/models/Accordion/utils/index';
import { Divider } from 'components/shared/styled';
import Modal from 'components/single/Modal/Modal';

const SHOP = {
  '/Services-and-Fares/Services-in-Turo-Park': 'Turo Park',
  '/Services-and-Fares/Services-in-Palma-de-Majorca': 'Palma de Majorca',
  "/Services-and-Fares/Services-in-L'Illa-Diagonal": "L'Illa Diagonal",
};

export default function CustomizedAccordions() {
  const { pathname } = useLocation();

  const shopName = SHOP[pathname];

  const [sectionExpanded, setSectionExpanded] = useState(null);
  const [serviceSelected, setServiceSelected] = useState(false);
  const [servicePrice, setServicePrice] = useState(null);
  const isModalOpen = Boolean(serviceSelected);

  const { loading, data } = useFetchData('bookingSystem', {
    action: 'getServices',
  });

  const handleOpenModal = (e) => {
    setServiceSelected(e.target.id);
    setServicePrice(e.target.value);
  };
  const handleClose = () => setServiceSelected(null);

  const handleChange = (event, newExpanded) => {
    setSectionExpanded(newExpanded ? event.target.innerText : false);
  };

  if (loading) {
    return <Loading />;
  }

  const { services } = data;

  const sortedTreatments = sortTreatments(services);

  return (
    <div style={{ width: '80vw', margin: '0 auto' }}>
      <Typography variant="title" component="h2">
        {`Services in ${shopName}`}
        <Divider />
      </Typography>

      {sortedTreatments &&
        sortedTreatments.map(({ name, services }, index) => {
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
                <Typography>{name}</Typography>
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
    </div>
  );
}
