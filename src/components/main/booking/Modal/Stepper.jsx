import { Box } from '@mui/material/';
import {
  StepOne,
  StepTwo,
  Gap,
  Slider,
} from 'components/main/booking/Modal/styled/index.jsx';
export default function Stepper({ step }) {
  return (
    <Box display='flex' justifyContent='center' sx={{ margin: '2em 0' }}>
      <StepOne>
        <Slider step={step} />
      </StepOne>
      <Gap />
      <StepTwo />
    </Box>
  );
}
