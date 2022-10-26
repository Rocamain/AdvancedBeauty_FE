import { Box } from '@mui/material';
import NavButton from 'components/shared/NavButton.jsx';
import SectionTitle from 'components/shared/SectionTitle.jsx';

export default function GridButton({ buttons, sectionTitle }) {
  return (
    <Box
      component="div"
      sx={{
        width: ['80vw', '65vw'],
        margin: '0 auto',
      }}
    >
      {sectionTitle && (
        <SectionTitle title={sectionTitle.title} textJustify="center" />
      )}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: { xs: '3em', sm: '3em', xl: '8em' },
          marginTop: '6em',
          marginRight: 'auto',
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
        }}
      >
        {buttons.map(({ linkText, linkTo }, index) => (
          <NavButton
            key={index}
            size="large"
            variant="contained"
            buttonText={linkText}
            linkTo={linkTo}
            value={sectionTitle.title}
          />
        ))}
      </Box>
    </Box>
  );
}
