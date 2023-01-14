import { styled, Box } from '@mui/material';

const StepTwo = styled(({ nextStep, ...props }) => <Box {...props} />)(
  ({ theme, props }) => {
    return {
      backgroundColor: '#D3D3D3',
      width: '4em',
      height: '10px',
      borderRadius: '5px',
    };
  }
);
const Gap = styled((props) => {
  return <Box {...props} />;
})(({ theme, props }) => ({
  zIndex: 200,
  border: 'none',
  backgroundColor: 'white',
  width: '2em',
  height: '10px',
}));

const StepOne = styled((props) => {
  return <Box {...props} />;
})(({ theme }) => {
  return {
    backgroundColor: '#BCF0F0',
    width: '4em',
    height: '10px',
    borderRadius: '5px',
  };
});

const Slider = styled(({ ...props }) => {
  return <Box {...props} />;
})(({ theme, step }) => {
  const isActive = step > 1;
  return {
    position: 'relative',
    backgroundColor: '#75C9CC',
    width: '4em',
    height: '10px',
    borderRadius: '5px',
    transition: isActive && 'transform 1s',
    transform: isActive ? 'translateX(6em)' : 'translateX(0)',
  };
});

export { StepTwo, StepOne, Slider, Gap };
