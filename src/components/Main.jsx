import useFetchData from 'hooks/useFetchData';
import { lazy, Suspense } from 'react';
import Loading from './shared/Loading';

import { useLocation } from 'react-router-dom';

function Main({ routeName }) {
  let { pathname, hash, ...rest } = useLocation();

  pathname = pathname === '/' ? 'home' : pathname.replace('/', '');

  //  the data received is an array of objects, that each each objet represent a component.

  const { error, loading, data } = useFetchData(pathname);

  function loadComponent(name) {
    const Component = lazy(() => import(`./models/${name}.jsx`));
    return Component;
  }

  // This function will receive the data of the path as parameter, that represents an array of objects (components)
  // and it will imported be dynamically the component required.

  const renderChildrenComponents = (components) => {
    let routeComponents = components.map((component, index) => {
      let componentName = component.componentName;
      let LazyComponent = loadComponent(componentName);

      return (
        <Suspense key={index} fallback={<Loading />}>
          <LazyComponent
            id={component.title}
            data={component}
            path={pathname}
          />
        </Suspense>
      );
    });

    return routeComponents;
  };

  return (
    data && (
      <>
        <main style={{ marginBottom: '10vh' }}>
          {renderChildrenComponents(data)}
        </main>
      </>
    )
  );
}

export default Main;
