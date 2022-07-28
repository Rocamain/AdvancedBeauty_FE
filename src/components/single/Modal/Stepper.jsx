import { Box } from '@mui/material/';
import {
  StepOne,
  StepTwo,
  Gap,
  Slider,
} from 'components/single/Modal/styled/stepper';
export default function Stepper({ bookingStep }) {
  return (
    <Box display="flex" justifyContent="center" sx={{ margin: '1.3em auto' }}>
      <StepOne>
        <Slider bookingStep={bookingStep} />
      </StepOne>
      <Gap />
      <StepTwo />
    </Box>
  );
}
