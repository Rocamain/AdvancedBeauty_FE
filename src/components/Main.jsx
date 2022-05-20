import useFetchData from 'hooks/useFetchData';
import { lazy, Suspense } from 'react';
import Loading from './shared/Loading';

import { useParams, useLocation } from 'react-router-dom';

function Main({ routeName }) {
  let { pathname, hash, ...rest } = useLocation();

  if (pathname === '/') {
    pathname = 'home';
  }
  pathname = pathname.replace('/', '');

  const { error, loading, data } = useFetchData(pathname);

  function loadComponent(name) {
    const Component = lazy(() => import(`./models/${name}.jsx`));
    return Component;
  }

  const renderChildrenComponents = (components) => {
    let routeComponents = components.map((component, index) => {
      let componentName = component.componentName;
      let LazyComponent = loadComponent(componentName);
      console.log(component.title);
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
        <main>{renderChildrenComponents(data)}</main>
      </>
    )
  );
}

export default Main;
