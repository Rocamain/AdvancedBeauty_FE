const getMarginTop = ({ section }, mediumScreens, isFirstSection) => {
  const marginTopBig = {
    'full-cards': '160px',
    'right-cards': '160px',
    'mixed leaves and right-cards': '160px',
    'none-cards': '160px',
    'leaves-cards': '160px',
    'full-photo': '224px',
    'right-photo': '64px',
    'mixed leaves and right-photo': '64px',
    'none-photo': '64px',
    'leaves-photo': '64px',
  };
  const isNotCarouselOrHero =
    section.componentName !== 'Carousel' && section.componentName !== 'Hero';

  if (mediumScreens) {
    const marginTop = isFirstSection
      ? `calc(5vh + ${
          marginTopBig[section.backgroundType + '-' + section.show]
        } )`
      : marginTopBig[section.backgroundType + '-' + section.show];
    return marginTop && isNotCarouselOrHero ? marginTop : 0;
  } else {
    const marginTop = section.backgroundType === 'full' ? '160px' : '0px';

    return isFirstSection && isNotCarouselOrHero
      ? `calc(5vh + ${marginTop})`
      : 0;
  }
};

const getMarginBottom = (
  { section, nextSection },
  mediumScreens,
  bigScreens
) => {
  const marginBottom = {
    'full-cards': 300,
    'right-cards': 300,
    'none-cards': 300,
    'mixed leaves and right-cards': 300,
    'leaves-cards': 300,
    'full-photo': 160,
    'right-photo': 0,
    'mixed leaves and right-photo': 0,
    'none-photo': -48,
    'leaves-photo': -48,
  };
  const marginTop = {
    'full-cards': 160,
    'right-cards': 160,
    'mixed leaves and right-cards': 160,
    'none-cards': 160,
    'leaves-cards': 160,
    'full-photo': 224,
    'right-photo': 64,
    'mixed leaves and right-photo': 64,
    'none-photo': 64,
    'leaves-photo': 64,
  };

  // if (smallMobiles) {
  //   return '10vh';
  // }

  if (mediumScreens) {
    if (
      section.componentName !== 'GridA' &&
      nextSection.componentName !== 'GridA'
    ) {
      return '20vh';
    }

    if (
      section.componentName !== 'GridA' &&
      nextSection.componentName === 'GridA'
    ) {
      return `calc(20vh + ${
        marginTop[nextSection.backgroundType + '-' + nextSection.show]
      }px)`;
    }
    if (
      section.componentName === 'GridA' &&
      nextSection.componentName !== 'GridA'
    ) {
      return `calc(20vh + ${
        marginBottom[section.backgroundType + '-' + section.show]
      }px)`;
    }
    if (
      section.componentName === 'GridA' &&
      nextSection.componentName === 'GridA'
    ) {
      return `calc(20vh + ${
        marginBottom[section.backgroundType + '-' + section.show] +
        marginTop[nextSection.backgroundType + '-' + nextSection.show]
      }px)`;
    } else {
      return '20vh';
    }
  }
  if (section.componentName === 'Hero') {
    return 0;
  }
  return '20vh';
};
const getId = (url) => {
  const id = url.split('#')[1];
  return id;
};
export { getMarginBottom, getMarginTop, getId };
