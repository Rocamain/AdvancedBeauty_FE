import { Box } from '@mui/material/';
import {
  StepOne,
  StepTwo,
  Gap,
  Slider,
} from 'components/single/Modal/styled/stepper';
export default function Stepper({ bookingStep }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ marginTop: '1em', marginBottom: '2.5em' }}
    >
      <StepOne>
        <Slider bookingStep={bookingStep} />
      </StepOne>
      <Gap />
      <StepTwo />
    </Box>
  );
}
