import { Box } from '@mui/material/';
import {
  StepOne,
  StepTwo,
  Gap,
  Slider,
} from 'components/main/booking/Modal/styled/stepper';
export default function Stepper({ step }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{ marginTop: '1em', marginBottom: ['2em', '2.5em'] }}
    >
      <StepOne>
        <Slider step={step} />
      </StepOne>
      <Gap />
      <StepTwo />
    </Box>
  );
}
