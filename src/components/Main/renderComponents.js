function loadComponent(name) {
  const Component = require(`components/models/${name}/index.js`).default;
  return Component;
}

const renderComponents = ({ components, path }) => {
  const routeComponents = components.map((componentInfo, index) => {
    const { componentName, id } = componentInfo;

    const LazyComponent = loadComponent(componentName);
    const firstChildHeight = index === 0 ? '90vh' : '20vh';

    return (
      <LazyComponent
        key={index}
        data={{ path, id }}
        height={firstChildHeight}
      />
    );
  });

  return routeComponents;
};

export default renderComponents;
