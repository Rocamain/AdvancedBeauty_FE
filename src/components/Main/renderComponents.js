function loadComponent(name) {
  const Component = require(`components/models/${name}/index.js`).default;
  return Component;
}

const renderComponents = ({ components }) => {
  const routeComponents = components.map((componentInfo, index) => {
    const { componentName, title, sectionTitle } = componentInfo;
    const LazyComponent = loadComponent(componentName);
    const firstChildHeight = index === 0 ? '90vh' : '10vh';

    return (
      <LazyComponent
        key={index}
        id={sectionTitle && sectionTitle.title}
        data={componentInfo}
        height={firstChildHeight}
      />
    );
  });

  return routeComponents;
};

export default renderComponents;
