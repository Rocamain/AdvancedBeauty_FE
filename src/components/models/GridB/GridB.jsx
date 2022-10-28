import SectionTitle from 'components/shared/SectionTitle.jsx';
import { Box } from '@mui/material';
import Icon from 'components/shared/Icon.jsx';
import { Container, Card, Title } from 'components/models/GridB/styled';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import style from 'styles/markdown-styles.module.css';

export default function GridB({ sectionTitle, title, size, cards }) {
  return (
    <Box id={sectionTitle.title.replace(' ', '-')}>
      {title && <SectionTitle title={title} grid={false} />}
      <Container size={size}>
        {cards.map(
          (
            { icon, title, content, showTitle, titleColor, iconFullSize },
            index
          ) => {
            return (
              <Card key={index} size={size}>
                <Box>
                  <Icon
                    icon={icon}
                    iconFullSize={iconFullSize}
                    showTitle={showTitle}
                  />

                  {showTitle && <Title children={title} color={titleColor} />}
                </Box>
                {content && (
                  <ReactMarkdown
                    className={style.reactMarkDown}
                    escapeHTML={true}
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
