import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {
    marginBottom: theme.spacing(3),
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  background: '#00a3cc',
  color: 'white',

  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled((props) => <MuiAccordionDetails {...props} />)(
  ({ theme }) => ({
    padding: theme.spacing(2, 0),
    paddingTop: '1em',
    border: `1px solid #00a3cc`,
    p: {
      padding: theme.spacing(0, 3),
      transition: 'padding 0.3s ease-in-out',
      '&:hover': {
        padding: theme.spacing(0, 4),

        background: theme.palette.background.primary,
        color: theme.palette.primary.secondary,
        '&::after': {
          content: '"Book"',
          float: 'right',
        },
      },
    },
  })
);

export { Accordion, AccordionDetails, AccordionSummary };
