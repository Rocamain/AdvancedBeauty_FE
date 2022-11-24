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
import { Button } from '@mui/material';

export default function Hero({ content, title, subTitle, cover, button }) {
  const isWithContent = Boolean(content);

  return (
    <Box sx={{ position: 'relative', marginBottom: ['5vh', '7vh'] }}>
      <HeroContainer
        className="container"
        cover={cover}
        isWithContent={isWithContent}
      >
        <HeroHeader>
          <HeroHeaderWrapper isWithContent={isWithContent}>
            <Typography component="h1" variant="heroTitle">
              {title}
            </Typography>
            <Typography component="h3" variant="heroSubtitle">
              {subTitle}
            </Typography>
            {!isWithContent && <Divider />}
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
              <Typography
                component="p"
                variant="content"
                sx={{ fontWeight: [600, 500] }}
              >
                {content}
              </Typography>
            </Box>
          )}
          {button && (
            <Box>
              <Button
                disableFocusRipple
                disableRipple
                variant="contained"
                children={button.linkText}
                href={button.linkTo.path}
                sx={{ padding: '1rem 1.5rem', flex: 0 }}
              />
            </Box>
          )}
        </HeroContentWrapper>
      </HeroContainer>
      <WavesBackground className="waves" isWithContent={isWithContent} />
    </Box>
  );
}
