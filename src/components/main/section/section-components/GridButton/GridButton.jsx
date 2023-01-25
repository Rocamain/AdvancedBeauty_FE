import useScrollTo from 'hooks/useScrollTo.js';
import { Box, Button } from '@mui/material';
import SectionTitle from 'components/shared/SectionTitle.jsx';

export default function GridButton({ buttons, title, isNearScreen, withLink }) {
  const { scrollRef } = useScrollTo({
    url: withLink?.URL,
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
          flexWrap: { xs: 'wrap', md: 'nowrap' },
        }}
      >
        {buttons.map(({ linkText, linkTo }, index) => {
          const isExternal = linkTo?.type === 'external';
          return (
            <Button
              key={index}
              component="a"
              disableFocusRipple
              disableRipple
              variant="contained"
              children={linkText}
              href={linkTo?.URL}
              target={isExternal ? '_blank' : null}
              rel={isExternal ? 'no-opener' : null}
              sx={{
                boxSizing: 'border-box',
                width: ['200px'],
                height: ['100px'],
                fontSize: ['1.15rem', '1.2rem', '1.3rem'],
                px: ['1em', '1em', '1em'],
                py: ['1em', '1em', '1em'],
                fontWeight: 600,
                textAlign: 'center',
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
}
