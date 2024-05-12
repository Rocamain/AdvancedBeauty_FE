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
    border: `1px solid ${theme.palette.primary.main}`,
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
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: theme.spacing(1, 4),
  color: 'white',
  fontWeight: 500,
  border: `1px solid ${theme.palette.primary.main}.main`,
  borderRadius: '5px',
  flexDirection: 'row-reverse',
  h4: { fontWeight: 600 },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0, 2),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(0, 3),
  },
  '&.Mui-expanded': {
    borderRadius: '5px 5px 0 0',
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
    padding: 0,
    fontFamily: 'Open sans',
    ul: {
      padding: 0,
    },

    li: {
      listStyle: 'none',
      textTransform: 'uppercase',
      fontSize: '0.9rem',
      fontFamily: 'Open sans',

      p: {
        padding: theme.spacing(2),
        margin: 0,
        cursor: 'pointer',
      },
      '.book': {
        opacity: 0,
        display: 'none',
      },
      '.book,.text': {
        fontWeight: 800,
        fontFamily: 'Abel',
        color: '#666',
      },
      [theme.breakpoints.up('md')]: {
        ':hover': {
          p: {
            padding: theme.spacing(2, 4, 2, 2),
            height: '100%',
            transition: 'padding 0.3s ease-in-out',
            pointerEvent: 'auto',
          },
          background: theme.palette.primary.main,
          '.text': {
            color: theme.palette.primary.contrastText,
            fontWeight: 800,
          },
          '.book': {
            alignText: 'left',
            display: 'block',
            color: theme.palette.primary.contrastText,
            fontWeight: 800,
            visibility: 'visible',
            marginLeft: '1em',
            opacity: 1,
          },
        },
      },

      [theme.breakpoints.down('md')]: {
        fontSize: '0.8rem',
      },
    },
  })
);

export { Accordion, AccordionDetails, AccordionSummary };
