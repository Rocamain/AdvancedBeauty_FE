import useFetchData from 'hooks/useFetchData';
import { lazy, Suspense } from 'react';
import Loading from './shared/Loading';

import { useLocation } from 'react-router-dom';

function Main() {
  const { pathname } = useLocation();

  const formattedPath =
    pathname === '/' ? 'Home' : pathname.replaceAll('/', '');

  //  the data received is an array of objects, that each each objet represent a component.

  const { error, loading, data } = useFetchData(formattedPath);

  function loadComponent(name) {
    const Component = lazy(() => import(`./models/${name}.jsx`));
    return Component;
  }

  // This function will receive the data of the path as parameter, that represents an array of objects (components)
  // and it will imported be dynamically the component required.

  const renderChildrenComponents = (components) => {
    let routeComponents = components.map((componentInfo, index) => {
      let componentName = componentInfo.componentName;
      let LazyComponent = loadComponent(componentName);

      return (
        <Suspense key={index} fallback={<Loading />}>
          <LazyComponent
            id={componentInfo.title}
            data={componentInfo}
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
