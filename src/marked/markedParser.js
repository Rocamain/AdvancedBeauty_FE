import { marked } from 'marked';

const getMarkdownText = (text) => {
  const formattedText = marked(text);
  const formattedTextAndImg = formattedText.replace(
    'img',
    '<img style="width: 100%;"'
  );

  return { __html: formattedTextAndImg };
};

export { getMarkdownText };
