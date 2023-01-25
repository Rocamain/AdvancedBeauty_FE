import { useMediaQuery, Box, useTheme } from '@mui/material';
import { getPaddingBottom, getPaddingTop } from 'components/main/section/utils';
import { getId } from 'components/main/section/utils';

export default function SectionMargin({ section, children }) {
  const theme = useTheme();
  const pads = useMediaQuery(theme.breakpoints.between('sm', 'md'), {
    noSsr: true,
  });
  const mobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'), {
    noSsr: true,
  });
  const desktop = useMediaQuery(theme.breakpoints.up('lg'), { noSsr: true });
  const laptop = useMediaQuery(theme.breakpoints.between('md', 'lg'), {
    noSsr: true,
  });
  const paddingBottom = getPaddingBottom({
    section,
    pads,
    laptop,
    desktop,
  });
  const paddingTop = getPaddingTop({ section, pads, laptop, desktop });

  return (
    <Box
      component="section"
      id={section?.withLink?.URL ? getId(section?.withLink?.URL) : null}
      sx={{
        marginBottom:
          section.componentName === 'Hero' ? '10vh' : mobile ? '12vh' : '15vh',
      }}
    >
      <Box
        sx={{
          paddingBottom: paddingBottom,
          paddingTop: paddingTop,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
