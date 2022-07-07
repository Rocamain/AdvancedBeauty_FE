function loadComponent(name) {
  const Component = require(`components/models/${name}/index.js`).default;
  return Component;
}

const renderComponents = ({ components }) => {
  const routeComponents = components.map((componentInfo, index) => {
    const { componentName, title } = componentInfo;
    const LazyComponent = loadComponent(componentName);
    const firstChildHeight = index === 0 ? '90vh' : '10vh';
    return (
      <LazyComponent
        key={index}
        id={title}
        data={componentInfo}
        height={firstChildHeight}
      />
    );
  });

  return routeComponents;
};

export default renderComponents;
