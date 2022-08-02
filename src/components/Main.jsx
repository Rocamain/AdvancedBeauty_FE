import useFetchData from 'hooks/useFetchData';
import { useLocation } from 'react-router-dom';
import { Error, Loading } from 'components/shared/index';
import renderComponents from 'components/Main/renderComponents';
import useScrollTo from 'hooks/useScrollTo';

function Main() {
  const { scrollToRef } = useScrollTo();
  const { pathname } = useLocation();
  const path = pathname === '/' ? 'Home' : pathname.replace('/', '');
  const { error, loading, data } = useFetchData(path);

  return (
    <main ref={scrollToRef} style={{ height: '100%', marginBottom: '10vh' }}>
      {loading && <Loading />}
      {error && <Error />}
      {data &&
        // This function will receive the data of the path as parameter, that represents an array of objects (components)
        // and it will imported be dynamically the component required.
        renderComponents({
          components: data,
        })}
    </main>
  );
}

export default Main;
