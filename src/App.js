import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  Navigate,
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
          err
          orElement={<Navigate to="error" />}
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
              errorElement={<Navigate to="error" />}
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
                    errorElement={<Navigate to="error" />}
                  />
                )
              );
            })
          )}
          <Route
            path="/confirmation"
            element={
              <Suspense fallback={<Loading />}>
                <LazyConfirmationPage />
              </Suspense>
            }
          />
          <Route element={<ErrorPage />} path="error" />
          <Route path="/not_found" element={<NotFoundPage />} />
          <Route path="/*" element={<Navigate to="not_found" />} />
        </Route>
      )
    );
    return <RouterProvider router={routerJSX} />;
  }

  return <Box />;
}

export default App;
