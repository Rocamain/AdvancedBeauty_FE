import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from 'components/models/Accordion/styled/index';
import { sortTreatments } from 'components/models/Accordion/utils/index';
import { Divider } from 'components/shared/styled';
import Modal from 'components/single/Modal/Modal';

export default function CustomizedAccordions({ treatments }) {
  const [sectionExpanded, setSectionExpanded] = useState(null);
  const [serviceSelected, setServiceSelected] = useState(false);
  const isModalOpen = Boolean(serviceSelected);

  const handleOpenModal = ({ target }) => {
    setServiceSelected(target.firstChild.data);
  };
  const handleClose = () => setServiceSelected(null);

  const handleChange = (event, newExpanded) => {
    setSectionExpanded(newExpanded ? event.target.innerText : false);
  };

  const sortedTreatments = sortTreatments(treatments);

  return (
    <div style={{ width: '80vw', margin: '0 auto' }}>
      <Typography variant="title">
        Services in Palma de Majorca
        <Divider />
      </Typography>

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
              <Typography>{name}</Typography>
            </AccordionSummary>
            <AccordionDetails component={'ul'}>
              {services.map(({ price, Name }, index) => {
                return (
                  <Box
                    key={index}
                    onClick={handleOpenModal}
                    sx={{ cursor: 'pointer' }}
                  >
                    <Typography>
                      {Name} <span>- </span>
                      <span> {price},00 &#163;</span>
                    </Typography>
                  </Box>
                );
              })}
            </AccordionDetails>
          </Accordion>
        );
      })}
      {serviceSelected && (
        <Modal
          open={isModalOpen}
          handleClose={handleClose}
          serviceName={serviceSelected}
          serviceType={sectionExpanded}
        />
      )}
    </div>
  );
}
