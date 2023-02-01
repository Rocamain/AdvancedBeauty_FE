import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import SectionTitle from 'components/shared/SectionTitle';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from 'components/main/section/section-components/Services/styled/index';
import { sortTreatments } from 'components/main/section/section-components/Services/utils/index';
import Modal from 'components/main/booking/Modal/Modal';

export default function Services({ shopName, bookingAPI }) {
  const { services } = useLoaderData();
  console.log(shopName, 'services');
  const [sectionExpanded, setSectionExpanded] = useState(null);
  const [serviceSelected, setServiceSelected] = useState(false);
  const [servicePrice, setServicePrice] = useState(null);
  const isModalOpen = Boolean(serviceSelected);

  const handleOpenModal = (id, value) => {
    setServiceSelected(id);
    setServicePrice(value);
  };
  const handleClose = () => setServiceSelected(null);
  const handleChange = (event, newExpanded) => {
    setSectionExpanded(newExpanded ? event.target.innerText : false);
  };

  const sortedTreatments = sortTreatments(services);

  return (
    <Box
      sx={{
        width: ['100vw', '80vw', '80vw', '80vw', '70vw'],
        margin: '0 auto',
      }}
    >
      <SectionTitle title={`Treatments in ${shopName}`} left />

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
              <Typography component="h4" variant="h4" sx={{ color: 'white' }}>
                {name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box component={'ul'}>
                {services.map(({ price, serviceName }, index) => {
                  return (
                    <Box
                      key={index}
                      id={serviceName}
                      onClick={() => handleOpenModal(serviceName, price)}
                      display="flex"
                      component="li"
                      sx={{
                        width: 'inherit',
                        gap: '1em',
                      }}
                    >
                      <Box
                        display="flex"
                        variant="p"
                        component="p"
                        sx={{
                          width: '100%',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Typography className="text" variant="p">
                          {serviceName}
                        </Typography>

                        <Typography
                          className="text"
                          value={price}
                          variant="p"
                          sx={{
                            whiteSpace: 'nowrap',
                            display: 'inline-flex',
                          }}
                        >
                          {`${price},00`} &#x20AC;
                          <Typography className="book" variant="p">
                            Book
                          </Typography>
                        </Typography>
                      </Box>
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
          bookingAPI={bookingAPI}
          price={servicePrice}
          serviceType={sectionExpanded}
        />
      )}
    </Box>
  );
}
