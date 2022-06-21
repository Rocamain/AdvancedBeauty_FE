import { useEffect, useRef, makeRef } from 'react';
import useFetchData from 'hooks/useFetchData';
import { useLocation } from 'react-router-dom';

function Main() {
  const { pathname, hash } = useLocation();
  const ref = useRef([]);
  const formattedPath =
    pathname === '/' ? 'Home' : pathname.replaceAll('/', '');

  //  the data received is an array of objects, that each each objet represent a component.
  const { error, loading, data } = useFetchData(formattedPath);

  useEffect(() => {
    setTimeout(() => {
      if (hash && data && ref) {
        const id = hash.replaceAll('#', '').replaceAll('-', ' ');

        const element = ref.current.filter((innerRef) => innerRef[id]);

        element[0][id].scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest',
        });
      }
    }, 300);
  }, [hash, data, ref]);

  function loadComponent(name) {
    const Component = require(`components/models/${name}/index.js`).default;
    return Component;
  }

  // This function will receive the data of the path as parameter, that represents an array of objects (components)
  // and it will imported be dynamically the component required.

  const renderChildrenComponents = (components) => {
    let routeComponents = components.map((componentInfo, index) => {
      let componentName = componentInfo.componentName;

      let LazyComponent = loadComponent(componentName);

      return (
        <LazyComponent
          ref={(el) => (ref.current[index] = { [componentInfo.title]: el })}
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
