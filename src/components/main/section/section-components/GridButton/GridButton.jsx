import useScrollTo from 'hooks/useScrollTo.js';
import { Box } from '@mui/material';
import NavButton from 'components/shared/NavButton.jsx';
import SectionTitle from 'components/shared/SectionTitle.jsx';

export default function GridButton({
  buttons,
  title,
  marginTop,
  isNearScreen,
  withLink,
}) {
  const { scrollRef } = useScrollTo({
    url: withLink?.URL,
    marginTop,
    isNearScreen,
  });

  return (
    <Box
      ref={withLink?.URL && scrollRef}
      sx={{
        width: ['80vw', '75vw'],
        margin: '0 auto',
      }}
    >
      {title && <SectionTitle title={title} textJustify="center" cardA />}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: { xs: '3em', sm: '3em', xl: '8em' },
          marginTop: '1em',
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
