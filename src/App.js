import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from 'react-router-dom';
import { Box } from '@mui/material';
import { lazy, Suspense } from 'react';
import useNavigation from 'hooks/useNavigation';
import fetchData from 'services/fetchData';
import { Loading } from 'components/shared/index';
import Body from 'components/Body';
import ErrorPage from 'components/main/pages/errorPage/ErrorPage';
import NotFoundPage from 'components/main/pages/notFoundPage/NotFoundPage';
import Main from 'components/main/Main';

//  Lazy Components

const LazyConfirmationPage = lazy(() =>
  import('components/main/pages/confirmationPage/ConfirmationPage')
);

//  App Component

function App() {
  const { navigationLinks } = useNavigation();

  if (navigationLinks) {
    const routerJSX = createBrowserRouter(
      createRoutesFromElements(
        <Route
          element={<Body navigationLinks={navigationLinks} />}
          loader={({ request }) =>
            fetchData({
              apiRoute: 'logo',
              signal: request.signal,
            })
          }
          path="/"
        >
          {navigationLinks.map(({ related, path }, index) => (
            <Route
              index={index === 0 && true}
              key={index}
              path={path}
              loader={({ request }) =>
                fetchData({
                  apiRoute: related.__contentType.split('.')[1],
                  signal: request.signal,
                })
              }
              element={<Main key={related.__contentType.split('.')[1]} />}
            />
          ))}
          {navigationLinks.map((navRoute, index) =>
            navRoute.items.map(({ related, path, type }, index) => {
              return (
                type === 'INTERNAL' && (
                  <Route
                    key={index}
                    path={path}
                    loader={({ request }) =>
                      fetchData({
                        apiRoute: related.__contentType.split('.')[1],
                        signal: request.signal,
                      })
                    }
                    element={<Main key={related.__contentType.split('.')[1]} />}
                    errorElement={
                      <ErrorPage key={related.__contentType.split('.')[1]} />
                    }
                  />
                )
              );
            })
          )}
          <Route element={<ErrorPage />} path="error" />
          <Route path="/*" element={<NotFoundPage />} />
          <Route
            path="/confirmation"
            element={
              <Suspense fallback={<Loading />}>
                <LazyConfirmationPage />
              </Suspense>
            }
          />
        </Route>
      )
    );
    return <RouterProvider router={routerJSX} />;
  }

  return <Box />;
}

export default App;
