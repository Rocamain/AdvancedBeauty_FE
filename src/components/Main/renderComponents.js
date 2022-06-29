function loadComponent(name) {
  const Component = require(`components/models/${name}/index.js`).default;
  return Component;
}

const renderComponents = ({ components, refs }) => {
  let routeComponents = components.map((componentInfo, index) => {
    let componentName = componentInfo.componentName;
    let LazyComponent = loadComponent(componentName);

    return (
      <LazyComponent
        ref={(el) => (refs.current[index] = { [componentInfo?.title]: el })}
        key={index}
        id={componentInfo.title}
        data={componentInfo}
      />
    );
  });

  return routeComponents;
};

export default renderComponents;
