const getMarginTop = ({ section }, desktop, isFirstSection) => {
  const marginTopBig = {
    'full-cards': '160px',
    'right-cards': '160px',
    'mixed leaves and right-cards': '160px',
    'none-cards': '160px',
    'leaves-cards': '160px',
    'full-photo': '64px',
    'right-photo': '64px',
    'mixed leaves and right-photo': '64px',
    'none-photo': '64px',
    'leaves-photo': '64px',
  };

  if (desktop) {
    const marginTop = isFirstSection
      ? `calc(5vh + ${
          marginTopBig[section.backgroundType + '-' + section.show]
        } )`
      : marginTopBig[section.backgroundType + '-' + section.show];
    return marginTop ? marginTop : 0;
  } else {
    const marginTop = section.backgroundType === 'full' ? '160px' : '0px';

    return isFirstSection ? `calc(5vh + ${marginTop})` : 0;
  }
};

const getMarginBottom = ({ section, nextSection }, desktop) => {
  const marginBottom = {
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
  const marginTop = {
    'full-cards': 288,
    'right-cards': 160,
    'mixed leaves and right-cards': 160,
    'none-cards': 160,
    'leaves-cards': 160,
    'full-photo': 160,
    'right-photo': 0,
    'mixed leaves and right-photo': 0,
    'none-photo': 0,
    'leaves-photo': 0,
  };

  // if (smallMobiles) {
  //   return '10vh';
  // }

  if (desktop) {
    if (
      section.componentName !== 'GridA' &&
      nextSection.componentName !== 'GridA'
    ) {
      return '10vh';
    }

    if (desktop) {
    }

    if (
      section.componentName !== 'GridA' &&
      nextSection.componentName === 'GridA'
    ) {
      return `calc(10vh + ${
        marginBottom[nextSection.backgroundType + '-' + nextSection.show]
      }px)`;
    }
    if (
      section.componentName === 'GridA' &&
      nextSection.componentName !== 'GridA'
    ) {
      return `calc(10vh + ${
        marginTop[section.backgroundType + '-' + section.show]
      }px)`;
    }
    if (
      section.componentName === 'GridA' &&
      nextSection.componentName === 'GridA'
    ) {
      if (desktop) {
        if (
          nextSection.show === 'photo' &&
          nextSection.backgroundType !== 'full' &&
          nextSection.photoColumn === 'first'
        ) {
        }
        if (
          nextSection.show === 'photo' &&
          nextSection.backgroundType !== 'full' &&
          nextSection.photoColumn === 'second'
        ) {
          return `calc(10vh + ${
            marginTop[section.backgroundType + '-' + section.show] + 0
          }px)`;
        } else {
          return `calc(10vh + ${160}px)`;
        }
      }

      return `calc(10vh + ${
        marginTop[section.backgroundType + '-' + section.show] +
        marginBottom[nextSection.backgroundType + '-' + nextSection.show]
      }px)`;
    }
  }

  return '10vh';
};
const getId = (url) => {
  const id = url.split('#')[1];
  return id;
};
export { getMarginBottom, getMarginTop, getId };
