const getMarginTop = ({ section }) => {
  const marginTop = {
    'full-cards': 160,
    'right-cards': 160,
    'mixed leaves and right-cards': 160,
    'none-cards': 160,
    'leaves-cards': 160,
    'full-photo': 64,
    'right-photo': 64,
    'mixed leaves and right-photo': 64,
    'none-photo': 64,
    'leaves-photo': 64,
  };

  return marginTop[section.backgroundType + '-' + section.show]
    ? marginTop[section.backgroundType + '-' + section.show]
    : 0;
};

const getMarginBottom = (
  { section, nextSection },
  matchesBigMobiles,
  smallMobiles
) => {
  if (smallMobiles) {
    return '10vh';
  }
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
  if (
    section.componentName !== 'GridA' &&
    nextSection.componentName !== 'GridA'
  ) {
    return '10vh';
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
    nextSection.componentName === '!GridA'
  ) {
    return `calc(10vh + ${
      marginTop[section.backgroundType + '-' + section.show]
    }px)`;
  }
  if (
    section.componentName === 'GridA' &&
    nextSection.componentName === 'GridA'
  ) {
    if (nextSection.show === 'photo' && matchesBigMobiles) {
      return `calc(10vh + ${
        marginBottom[section.backgroundType + '-' + section.show] + 0
      }px)`;
    }

    return `calc(10vh + ${
      marginTop[section.backgroundType + '-' + section.show] +
      marginBottom[nextSection.backgroundType + '-' + nextSection.show]
    }px)`;
  }
  return '10vh';
};

export { getMarginBottom, getMarginTop };
