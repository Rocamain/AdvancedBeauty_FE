import useFetchData from 'hooks/useFetchData';
import { useLocation } from 'react-router-dom';

function Main() {
  const { pathname } = useLocation();

  const formattedPath =
    pathname === '/' ? 'Home' : pathname.replaceAll('/', '');

  //  the data received is an array of objects, that each each objet represent a component.

  const { error, loading, data } = useFetchData(formattedPath);

  function loadComponent(name) {
    const Component = () =>
      require(`components/models/${name}/index.js`).default;
    return Component;
  }

  // This function will receive the data of the path as parameter, that represents an array of objects (components)
  // and it will imported be dynamically the component required.

  const renderChildrenComponents = (components) => {
    let routeComponents = components.map((componentInfo, index) => {
      let componentName = componentInfo.componentName;
      let LazyComponent = loadComponent(componentName)();

      return (
        <LazyComponent
          key={index}
          id={componentInfo.title}
          data={componentInfo}
          path={pathname}
        />
      );
    });

    return routeComponents;
  };

  return (
    data && (
      <main style={{ marginBottom: '10vh' }}>
        {renderChildrenComponents(data)}
      </main>
    )
  );
}

export default Main;
