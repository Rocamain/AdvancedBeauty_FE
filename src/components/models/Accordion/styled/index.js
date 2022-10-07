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
  '.MuiCollapse-root': {
    border: `1px solid #00BCCC`,
    borderRadius: '0px 0px 5px 5px',
    borderTop: `0px`,
  },
  [theme.breakpoints.up('md')]: {
    width: '85%',
    margin: '0 auto',
    minWidth: '750px',
    maxWidth: ' 1200px',
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

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0, 2),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 3),
  },
  '&.Mui-expanded': {
    borderRadius: '5px 5px 0 0',
    background: 'white',
    color: theme.palette.text.primary,
  },
  '.MuiAccordionSummary-content': {
    marginLeft: theme.spacing(2),
    P: {
      fontFamily: ['Abel', 'Open Sans'].join(','),
      fontWeight: 900,
      fontSize: '1.45rem',
      [theme.breakpoints.down('md')]: {
        fontSize: '1.5rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
  },
  '.MuiAccordionSummary-expandIconWrapper': {
    color: theme.palette.text.primary,
    '&.Mui-expanded ': {
      transform: 'rotate(90deg)',
    },
  },
}));

const AccordionDetails = styled((props) => <MuiAccordionDetails {...props} />)(
  ({ theme }) => ({
    padding: theme.spacing(0),
    fontFamily: 'Open sans',

    ul: {
      padding: theme.spacing(0),
    },
    li: {
      listStyle: 'none',
      padding: theme.spacing(1, 3, 1, 4),

      textTransform: 'uppercase',
      fontSize: '0.9rem',
      fontFamily: 'Open sans',
      transition: 'padding 0.3s ease-in-out',
      span: {
        fontWeight: 900,
        transition: 'padding 0.3s ease-in-out',
        '&:not(:last-child)': { marginLeft: '1em' },
      },

      ':hover': {
        padding: theme.spacing(1, 3, 1, 5),
        fontWeight: 900,
        background: '#00BCCC',

        color: theme.palette.primary.secondary,
        '&::after': {
          content: '"Book"',
          float: 'right',
        },
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '0.8rem',
      },
    },
  })
);

export { Accordion, AccordionDetails, AccordionSummary };
