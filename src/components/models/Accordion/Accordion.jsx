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

export default function CustomizedAccordions({ treatments }) {
  const [expanded, setExpanded] = useState(null);

  const sortedTreatments = sortTreatments(treatments);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div style={{ width: '80vw', margin: '0 auto' }}>
      <Typography variant="title">
        {`Services in Palma de Majorca`}
        <Divider />
      </Typography>

      {sortedTreatments.map(({ name, services }, index) => {
        return (
          <Accordion
            key={index}
            expanded={expanded === name}
            onChange={handleChange(name)}
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
                  <Box key={index}>
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
    </div>
  );
}
