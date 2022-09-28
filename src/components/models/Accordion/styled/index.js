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
  background: '#00BCCC',
  padding: theme.spacing(0, 4),
  color: theme.palette.primary.secondary,
  border: `1px solid #00BCCC`,
  borderRadius: '5px',
  flexDirection: 'row-reverse',
  fontFamily: 'Open Sans',
  '&.MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
    color: theme.palette.text.primary,
  },
  '&.Mui-expanded': {
    borderRadius: '5px 5px 0 0',
    background: 'white',
    color: theme.palette.text.primary,
  },
  '&.MuiAccordionSummary-content': {
    marginLeft: theme.spacing(2),
    P: {
      fontFamily: ['Abel', 'Open Sans'].join(','),
      fontWeight: 900,
      fontSize: '1.15rem',
    },
  },
}));

const AccordionDetails = styled((props) => (
  <MuiAccordionDetails variant="p" {...props} />
))(({ theme }) => ({
  padding: theme.spacing(0),
  border: `1px solid #00BCCC`,
  borderRadius: '0px 0px 5px 5px',
  borderTop: `0px`,
  p: {
    padding: theme.spacing(1, 8),
    transition: 'padding 0.3s ease-in-out',
    textTransform: 'uppercase',
    fontSize: '0.75rem',

    span: { fontWeight: 900, '&:not(:last-child)': { marginLeft: '1em' } },

    '&:hover': {
      padding: theme.spacing(1, 10, 1, 10),
      fontWeight: 900,
      background: '#00BCCC',
      color: theme.palette.primary.secondary,
      '&::after': {
        content: '"Book"',
        float: 'right',
      },
    },
  },
}));

export { Accordion, AccordionDetails, AccordionSummary };
