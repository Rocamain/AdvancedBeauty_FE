import { useEffect } from 'react';
import useFetchData from 'hooks/useFetchData';
import { useLocation } from 'react-router-dom';
import { Loading } from 'components/shared/index';
import renderComponents from 'components/Main/renderComponents';
import useScrollTo from 'hooks/useScrollTo';
import Form from 'components/single/Form/Form.jsx';

function Main(props) {
  const { scrollToRef } = useScrollTo();
  const { pathname } = useLocation();
  const path = pathname === '/' ? 'Home' : pathname.replace('/', '');
  const { loading, data } = useFetchData('strapi', {
    path,
  });

  const isContact = pathname === '/Contact';

  useEffect(() => {
    if (data) {
      document.title =
        'Advanced Beauty -' + pathname.replace('/', '').replaceAll('-', ' ');
    }
  }, [data, pathname]);

  if (loading) {
    <main
      ref={scrollToRef}
      style={{ minHeight: '100vh', height: '100%', marginBottom: '10vh' }}
    >
      <Loading />
    </main>;
  }
  return (
    <main
      ref={scrollToRef}
      style={{ minHeight: '100vh', height: '100%', marginBottom: '10vh' }}
    >
      {data &&
        // This function will receive the data of the path as parameter, that represents an array of objects (components)
        // and it will imported be dynamically the component required.
        renderComponents({
          components: data,
          path,
        })}
      {isContact && <Form />}
    </main>
  );
}

export default Main;
