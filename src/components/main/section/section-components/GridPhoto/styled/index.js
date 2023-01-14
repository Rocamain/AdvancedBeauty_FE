import { Box, styled } from '@mui/material';

const FlexContainer = styled((props) => <Box component="div" {...props} />)(
  ({ theme }) => {
    return {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: '2em',
      maxWidth: '100vh',
      margin: '0 auto',

      [theme.breakpoints.up('lg')]: {
        gap: '3em',
        maxWidth: '70vw',
      },
      [theme.breakpoints.up('xl')]: {
        maxWidth: '65vw',
      },
    };
  }
);

const Photo = styled(({ src, ...props }) => {
  const { small, medium, large } = src;
  return (
    <Box
      component="img"
      onLoad={() => true}
      // loading="lazy"
      {...props}
      sx={{
        content: {
          xs: `url(${small.url})`,
          sm: `url(${small.url})`,
          md: `url(${small.url})`,
          xxl: `url(${large?.url ? large.url : medium.url})`,
        },
      }}
    />
  );
})(({ theme }) => {
  return {
    width: '100%',
    height: 'auto',
    verticalAlign: 'middle',
    borderRadius: 5,
    objectFit: 'contain',
    boxShadow: 'rgba(56, 21, 11, 0.19) 0px 50px 80px 0px',
    maxWidth: 500,
    [theme.breakpoints.up('sm')]: {
      width: '80%',
    },
    [theme.breakpoints.up('md')]: {
      width: 'calc(50% - 1em)',
    },
    [theme.breakpoints.up('lg')]: {
      width: 'calc(50% - 1.5em)',
      maxWidth: 600,
    },
    [theme.breakpoints.up('xl')]: {
      width: 'calc(50% - 1.5em)',
      maxWidth: 700,
    },
  };
});

export { FlexContainer, Photo };
