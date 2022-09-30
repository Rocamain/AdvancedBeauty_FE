import { Box, Typography } from '@mui/material';
import { Divider } from 'components/shared/styled';
import { Wrapper } from 'components/models/GridPhoto/styled/';
import NavButton from 'components/shared/NavButton.jsx';

export default function GridButton({ buttons, Title }) {
  return (
    <Box component="div">
      <Wrapper>
        <Box component="div">
          <Typography variant="title" component="h3">
            {Title}
          </Typography>
          <Divider />
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 10,
            paddingTop: 5,
            justifyContent: 'center',
          }}
        >
          {buttons.map(({ Text, linkedTo }, index) => (
            <NavButton
              key={index}
              size="large"
              variant="contained"
              buttonText={Text}
              path={linkedTo.path}
              section={linkedTo.section}
            />
          ))}
        </Box>
      </Wrapper>
    </Box>
  );
}
