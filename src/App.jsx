import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  Navigate,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import useNavigation from './hooks/useNavigation';
import fetchData from './services/fetchData';
import { Loading } from './components/shared/index';
import Body from './components/Body';
import ErrorPage from './components/main/pages/errorPage/ErrorPage';
import NotFoundPage from './components/main/pages/notFoundPage/NotFoundPage';
import Main from './components/main/Main';

// Lazy Components
const LazyConfirmationPage = lazy(() =>
  import('components/main/pages/confirmationPage/ConfirmationPage')
);

// App Component
function App() {
  const navigationLinks = useNavigation();

  if (!navigationLinks) return null;

  const navRoutes = navigationLinks.map(({ related, path }, index) => (
    <Route
      index={index === 0 && true}
      key={index}
      path={path}
      loader={({ request: { signal } }) =>
        fetchData({ apiRoute: related.__contentType.split('.')[1], signal })
      }
      element={<Main key={related.__contentType.split('.')[1]} />}
      errorElement={<Navigate to='error' />}
    />
  ));

  const navSubRoutes = navigationLinks.flatMap((navRoute) =>
    navRoute.items
      .filter(({ type }) => type === 'INTERNAL')
      .map(({ related, path }, index) => (
        <Route
          key={index}
          path={path}
          loader={({ request: { signal } }) =>
            fetchData({ apiRoute: related.__contentType.split('.')[1], signal })
          }
          element={<Main key={related.__contentType.split('.')[1]} />}
          errorElement={<Navigate to='error' />}
        />
      ))
  );

  const staticRoutes = (
    <>
      <Route
        path='/confirmation'
        element={
          <Suspense fallback={<Loading />}>
            <LazyConfirmationPage />
          </Suspense>
        }
      />
      <Route element={<ErrorPage />} path='error' />
      <Route path='/not_found' element={<NotFoundPage />} />
      <Route path='/*' element={<Navigate to='not_found' />} />
    </>
  );

  const routes = (
    <Route
      element={<Body navigationLinks={navigationLinks} />}
      loader={({ request: { signal } }) =>
        fetchData({ apiRoute: 'logo', signal })
      }
      path='/'
    >
      {navRoutes}
      {navSubRoutes}
      {staticRoutes}
    </Route>
  );

  const routerJSX = createBrowserRouter(createRoutesFromElements(routes));

  return <RouterProvider router={routerJSX} />;
}

export default App;
