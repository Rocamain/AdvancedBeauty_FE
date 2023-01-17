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
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import style from 'styles/markdown-styles.module.css';

export default function GridB({ withLink, title, size, cards, isNearScreen }) {
  const { scrollRef } = useScrollTo({
    url: withLink?.URL,
    isNearScreen,
  });

  return (
    <Box ref={withLink?.URL && scrollRef}>
      {title && <SectionTitle title={title} cardA="true" />}
      <Container size={size}>
        {cards.map(
          (
            {
              icon,
              title,
              subTitle,
              content,
              showTitle,
              titleColor,
              iconFullSize,
            },
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
                      {subTitle && <SubTitle children={subTitle} />}
                    </>
                  )}
                </Box>
                {content && (
                  <ReactMarkdown
                    className={style.reactMarkDown}
                    escapeHTML
                    remarkPlugins={[gfm]}
                    children={content}
                  />
                )}
              </Card>
            );
          }
        )}
      </Container>
    </Box>
  );
}
