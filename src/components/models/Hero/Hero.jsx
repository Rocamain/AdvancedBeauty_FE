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

export default function Hero({ content, title, subTitle, cover, button }) {
  const biggerBackground = Boolean(content);

  return (
    <Box sx={{ position: 'relative', marginBottom: ['5vh', '7vh'] }}>
      <HeroContainer
        className="container"
        cover={cover}
        biggerBackground={biggerBackground}
      >
        <HeroHeader>
          <HeroHeaderWrapper biggerBackground={biggerBackground}>
            <Typography component="h1" variant="heroTitle">
              {title}
            </Typography>

            <Typography component="h3" variant="heroSubtitle">
              {subTitle}
            </Typography>
            <Divider />
          </HeroHeaderWrapper>
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
      </HeroContainer>
      <WavesBackground className="waves" biggerBackground={biggerBackground} />
    </Box>
  );
}
