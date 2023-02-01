import { forwardRef } from 'react';
import { SummaryContainer as SummaryCard } from 'components/main/booking/Modal/styled';
import Form from 'components/main/booking/Modal/Form';
import Price from 'components/main/booking/Modal/Price';
import AppointmentInfo from 'components/main/booking/Modal/AppointmentInfo';
import { Box, Divider, useMediaQuery } from '@mui/material';
import { keyframes } from '@emotion/react';

export default forwardRef(({ fadeOut, ...props }, ref) => {
  const fadeOutAnimation = keyframes`
    0% {
      opacity: 0;    
      visibility: 'visible',
    }
    100% {   
      opacity: 1;
    }
  `;
  
  return (
    <Box
      style={{ opacity: 0 }}
      sx={(theme) => {
        return {
          animation: fadeOut && `${fadeOutAnimation} 2.7s linear forwards 0.2s`,
        };
      }}
      ref={ref}
    >
      {fadeOut && <Summary {...props} />}
    </Box>
  );
});

const Summary = () => {
  const mobile = useMediaQuery('(max-width:500px)', { noSsr: true });

  return (
    <Box sx={{ margin: '2em auto 1.5em auto', minHeight: '300px' }}>
      <SummaryCard>
        <Box sx={{ display: mobile && 'flex', gap: '1em' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
            <AppointmentInfo mobile={mobile} />
            <Divider sx={{ backgroundColor: 'orange' }} />
            <Form mobile={mobile} />
          </Box>
          <Divider
            orientation="vertical"
            sx={{ backgroundColor: 'orange' }}
            flexItem
          />
        </Box>
      </SummaryCard>
      <Price />
    </Box>
  );
};
