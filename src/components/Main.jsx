import useFetchData from 'hooks/useFetchData';
import { lazy, Suspense } from 'react';
import Loading from './shared/Loading';

import { useParams } from 'react-router-dom';

function Main({ routeName }) {
  let params = useParams();

  const path = routeName.toLowerCase();

  const { error, loading, data } = useFetchData(path);

  function loadComponent(name) {
    const Component = lazy(() => import(`./models/${name}.jsx`));
    return Component;
  }

  const renderChildrenComponents = (components) => {
    const componentsKey = Object.keys(components);

    const routeComponents = componentsKey.map((component, index) => {
      let componentName = component[0].toUpperCase() + component.slice(1);

      let LazyComponent = loadComponent(componentName);

      return (
        <Suspense key={index} fallback={<Loading />}>
          <LazyComponent path={path} />
        </Suspense>
      );
    });
    return routeComponents;
  };

  return (
    <>
      <main>{renderChildrenComponents(data)}</main>
    </>
  );
}

export default Main;
