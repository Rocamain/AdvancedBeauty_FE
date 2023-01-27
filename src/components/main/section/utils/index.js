const getPaddingTop = ({ section, pads, laptop, desktop }) => {
  const paddingSelector = {
    'full-cards': '160px',
    'full-photo': '224px',
    'none-cards': '160px',
    'none-photo': '64px',
    'right-photo': '64px',
    'mixed leaves and right-photo': '64px',
    'leaves-photo': '64px',
  };

  const paddingTop =
    paddingSelector[section.backgroundType + '-' + section.show];

  if (desktop && paddingTop) {
    return paddingTop;
  }
  if (
    laptop &&
    (section.show === 'photo' || section.backgroundType === 'full')
  ) {
    return paddingTop;
  }
  if (pads && section.backgroundType === 'full') {
    return paddingTop;
  }
};

const getPaddingBottom = ({ section, pads, laptop, desktop }) => {
  const paddingSelector = {
    'full-cards': '288px',
    'none-cards': '128px',
    'full-photo': '160px',
    'right-cards': '160px',
    'mixed leaves and right-cards': '160px',
    'leaves-cards': '160px',
  };

  const paddingBottom =
    paddingSelector[section.backgroundType + '-' + section.show];

  if (desktop && paddingBottom) {
    return paddingBottom;
  }
  if (laptop) {
    return paddingBottom;
  }
  if (pads && paddingBottom) {
    return paddingBottom;
  }
};
const getId = (url) => {
  const id = url.split('#')[1];
  return id;
};
export { getPaddingBottom, getPaddingTop, getId };
