import { Box, Typography, Button } from '@mui/material';

import {
  HeroContainer,
  WavesBackground,
  HeroHeader,
  HeroHeaderWrapper,
  HeroContentWrapper,
  CoffeeMug,
} from 'components/main/section/section-components/Hero/styled/index.jsx';
import { Divider } from 'components/shared/styled/index.jsx';
import { Link } from 'react-router-dom';

export default function Hero({
  content,
  title,
  subtitle,
  cover,
  button,
  showContent,
}) {
  const isWithContent = Boolean(content);

  const isExternal = button?.linkTo?.type === 'external';

  return (
    <HeroContainer
      className='container'
      cover={cover}
      content={showContent.toString()}
    >
      <HeroHeader>
        <HeroHeaderWrapper content={isWithContent.toString()}>
          <Typography component='h1' variant='heroTitle'>
            {title}
          </Typography>
          <Typography component='h3' variant='heroSubtitle'>
            {subtitle}
          </Typography>
          {!isWithContent && <Divider />}
        </HeroHeaderWrapper>
      </HeroHeader>
      <HeroContentWrapper>
        {showContent && <CoffeeMug />}
        {showContent && (
          <Box
            sx={{
              width: '70%',
              margin: '0 auto',
              padding: '1em 0.5em',
            }}
          >
            <Typography
              component='p'
              variant='heroContent'
              sx={{ fontWeight: [700, 800] }}
            >
              {content}
            </Typography>
          </Box>
        )}
        {button && (
          <Box>
            <Button
              component={Link}
              disableFocusRipple
              disableRipple
              variant='contained'
              children={button.linkText}
              to={button.linkTo?.URL}
              target={isExternal ? '_blank' : null}
              rel={isExternal ? 'no-opener' : null}
              sx={{
                fontSize: ['1rem', '1.05rem', '1.1rem'],
                maxWidth: '160px',
                minWidth: '100px',
                padding: ['1em 0.5em', '1.1em'],
                letterSpacing: '0.07em',
                lineHeight: 1.3,
                flex: 0,
                fontWeight: 1000,
                textAlign: 'center',
                fontFamily: 'Open Sans',
              }}
            />
          </Box>
        )}
      </HeroContentWrapper>
      <WavesBackground className='waves' />
    </HeroContainer>
  );
}
