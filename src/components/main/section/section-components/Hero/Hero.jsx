import { Box, Typography, Button } from '@mui/material';
import {
  HeroContainer,
  WavesBackground,
  HeroHeader,
  HeroHeaderWrapper,
  HeroContentWrapper,
  CoffeeMug,
} from 'components/main/section/section-components/Hero/styled';
import { Divider } from 'components/shared/styled/';
import { useNavigate } from 'react-router-dom';

export default function Hero({ content, title, subTitle, cover, button }) {
  const isWithContent = Boolean(content);
  const navigate = useNavigate();
  const isExternal = button.linkTo.type === 'external';

  const handleClick = (url) => navigate(url);
  return (
    <Box sx={{ position: 'relative', marginBottom: ['5vh', '7vh'] }}>
      <HeroContainer
        className="container"
        cover={cover}
        content={isWithContent.toString()}
      >
        <HeroHeader>
          <HeroHeaderWrapper content={isWithContent.toString()}>
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
                component="a"
                disableFocusRipple
                disableRipple
                variant="contained"
                children={button.linkText}
                onClick={isExternal && (() => handleClick(button.linkTo.URL))}
                href={isExternal ? button.linkTo?.URL : null}
                target={isExternal ? '_blank' : null}
                rel={isExternal ? 'no-opener' : null}
                sx={{ padding: '1rem 1.5rem', flex: 0, fontWeight: 600 }}
              />
            </Box>
          )}
        </HeroContentWrapper>
      </HeroContainer>
      <WavesBackground className="waves" />
    </Box>
  );
}
