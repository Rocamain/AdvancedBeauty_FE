import { useEffect } from 'react';
import useFetchData from 'hooks/useFetchData';
import { useLocation } from 'react-router-dom';
import { Error, Loading } from 'components/shared/index';
import renderComponents from 'components/Main/renderComponents';
import useScrollTo from 'hooks/useScrollTo';
import Form from 'components/single/Form/Form.jsx';

function Main(props) {
  const { scrollToRef } = useScrollTo();
  const { pathname } = useLocation();
  const path = pathname === '/' ? 'Home' : pathname.replace('/', '');
  const { error, loading, data } = useFetchData(path);
  const isContact = pathname === '/Contact';

  useEffect(() => {
    if (data) {
      document.title =
        'Advanced Beauty -' + pathname.replace('/', '').replaceAll('-', ' ');
    }
  }, [data, pathname]);

  return (
    <main
      ref={scrollToRef}
      style={{ minHeight: '100vh', height: '100%', marginBottom: '10vh' }}
    >
      {loading && <Loading />}
      {error && <Error />}

      {data &&
        // This function will receive the data of the path as parameter, that represents an array of objects (components)
        // and it will imported be dynamically the component required.
        renderComponents({
          components: data,
        })}
      {isContact && <Form />}
    </main>
  );
}

export default Main;
