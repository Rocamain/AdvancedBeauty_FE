import { useEffect, useRef } from 'react';
import useFetchData from 'hooks/useFetchData';
import { useLocation } from 'react-router-dom';
import { Error, Loading } from 'components/shared/index';
import renderComponents from 'components/Main/renderComponents';

// This function will receive the data of the path as parameter, that represents an array of objects (components)
// and it will imported be dynamically the component required.

function Main() {
  const { pathname, hash } = useLocation();

  //  the data received is an array of objects, that each each objet represent a component.
  const formattedPath =
    pathname === '/' ? 'Home' : pathname.replaceAll('/', '');

  const { error, loading, data } = useFetchData(formattedPath);

  const refs = useRef([]);

  // Scroll effect
  useEffect(() => {
    setTimeout(async () => {
      const hasRef = refs.current[0];
      if (hasRef && !hash) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }

      const HeaderHeight = Math.round(
        document.documentElement.clientHeight * 0.2
      );

      const scrollTo = () => {
        const id = hash.replaceAll('#', '').replaceAll('-', ' ');
        const filterRef = [
          ...refs.current.filter((innerRef) => innerRef[id] !== undefined),
        ][0];

        if (filterRef) {
          const offsetTop = filterRef[id]?.top - HeaderHeight;

          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
          });
        }
      };
      scrollTo();
    }, 300);
  });

  return (
    <main style={{ height: '100%', marginBottom: '10vh' }}>
      {loading && <Loading />}
      {error && <Error />}
      {data && renderComponents({ components: data, refs })}
    </main>
  );
}

export default Main;
