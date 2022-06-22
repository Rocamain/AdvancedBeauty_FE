import { useEffect, useRef, makeRef } from 'react';
import useFetchData from 'hooks/useFetchData';
import { useLocation } from 'react-router-dom';

function Main() {
  const { pathname, hash, state, ...rest } = useLocation();
  const ref = useRef([]);
  console.log(state);

  const formattedPath =
    pathname === '/' ? 'Home' : pathname.replaceAll('/', '');

  //  the data received is an array of objects, that each each objet represent a component.
  const { error, loading, data } = useFetchData(formattedPath);

  useEffect(() => {
    const id = hash.replaceAll('#', '').replaceAll('-', ' ');

    const getHash = async () => {
      try {
        const element = await ref.current.filter((innerRef) =>
          innerRef.hasOwnProperty(id)
        );

        if (element.length !== 0 && element[0][id] !== null) {
          const HeaderHeight = Math.round(
            document.documentElement.clientHeight * 0.2
          );
          const elTop = await Math.round(
            element[0][id].getBoundingClientRect().top
          );
          const distanceTop = (await elTop) - HeaderHeight;
          const offSetTop = window.pageYOffset;

          window.scrollTo({
            top: distanceTop + offSetTop,
            behavior: 'smooth',
          });
        }
      } catch (e) {
        console.log(e);
      }
    };
    getHash();
  }, [hash, data, ref, state]);

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
          ref={(el) =>
            (ref.current[index] = { [componentInfo.title || 'carousel']: el })
          }
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
