import { Box, Typography } from '@mui/material';
import {
  HeroContainer,
  WavesBackground,
  HeroHeader,
  HeroHeaderWrapper,
  HeroContentWrapper,
  CoffeeMug,
} from 'components/models/Hero/styled/';
import { Divider } from 'components/shared/styled/';

import Button from 'components/shared/Button';

export default function Hero({ content, title, subTitle, Cover, button }) {
  const hasContent = content ? 1 : 0;

  return (
    <HeroContainer cover={Cover} hasContent={1}>
      <HeroHeader>
        <HeroHeaderWrapper hasContent={1}>
          <Typography component="h1" variant="heroTitle">
            {title}
          </Typography>

          <Typography component="h3" variant="heroSubtitle">
            {subTitle}
          </Typography>
        </HeroHeaderWrapper>
        {/* <Divider /> */}
      </HeroHeader>
      <HeroContentWrapper>
        {content && <CoffeeMug />}
        {content && (
          <Box
            sx={{
              width: '80%',
              margin: '0 auto',
              padding: '1em 0.5em',
            }}
          >
            <Typography variant="content">{content}</Typography>
          </Box>
        )}
        {button && <Button width={'170px'} {...button} />}
      </HeroContentWrapper>
      <WavesBackground />
    </HeroContainer>
  );
}
