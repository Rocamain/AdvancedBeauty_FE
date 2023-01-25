import useScrollTo from 'hooks/useScrollTo.js';
import SectionTitle from 'components/shared/SectionTitle.jsx';
import { Box } from '@mui/material';
import Icon from 'components/shared/Icon.jsx';
import {
  Container,
  Card,
  Title,
  SubTitle,
} from 'components/main/section/section-components/GridB/styled';
import Markdown from 'components/shared/MarkDown';

export default function GridB({ withLink, title, size, cards, isNearScreen }) {
  const { scrollRef } = useScrollTo({
    url: withLink?.URL,
    isNearScreen,
  });

  return (
    <Box ref={withLink?.URL && scrollRef}>
      {title && <SectionTitle title={title} />}
      <Container size={size}>
        {cards.map(
          (
            { icon, title, subtitle, content, showTitle, titleColor },
            index
          ) => {
            return (
              <Card key={index} size={size}>
                <Box>
                  {icon && (
                    <Icon
                      icon={icon}
                      isSizeBig={size === 'Big'}
                      showTitle={showTitle}
                    />
                  )}

                  {showTitle && (
                    <>
                      <Title children={title} color={titleColor} />
                      {subtitle && <SubTitle children={subtitle} />}
                    </>
                  )}
                </Box>
                {content && <Markdown gridB content={content} />}
              </Card>
            );
          }
        )}
      </Container>
    </Box>
  );
}
