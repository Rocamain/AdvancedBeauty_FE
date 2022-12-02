import useScrollTo from 'hooks/useScrollTo.js';
import { Box } from '@mui/material';
import NavButton from 'components/shared/NavButton.jsx';
import SectionTitle from 'components/shared/SectionTitle.jsx';

export default function GridButton({
  buttons,
  sectionTitle,
  marginTop,
  isNearScreen,
}) {
  const { scrollRef } = useScrollTo({
    sectionTitle,
    marginTop,
    isNearScreen,
  });

  return (
    <Box
      ref={scrollRef}
      sx={{
        width: ['80vw', '75vw'],
        margin: '0 auto',
      }}
    >
      {sectionTitle && (
        <SectionTitle title={sectionTitle.title} textJustify="center" cardA />
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
          <NavButton key={index} buttonText={linkText} linkTo={linkTo} />
        ))}
      </Box>
    </Box>
  );
}
