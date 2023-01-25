import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from 'react-router-dom';
import { Box } from '@mui/material';
import { lazy, Suspense } from 'react';
import useNavigation from 'hooks/useNavigation';
import fetchStrapiComponentsData from 'services/strapi/fetchStrapiComponentsData';
import { Loading } from 'components/shared/index';
import Body from 'components/Body';
import Error from 'components/main/errorPage/ErrorPage';
import Main from 'components/main/Main';

//  Lazy Components

const LazyConfirmationPage = lazy(() =>
  import('components/main/confirmationPage/ConfirmationPage')
);

//  App Component

function App() {
  const { navigationLinks } = useNavigation();

  if (navigationLinks) {
    const routerJSX = createBrowserRouter(
      createRoutesFromElements(
        <Route
          element={<Body navigationLinks={navigationLinks} />}
          errorElement={<Error />}
          loader={({ request }) =>
            fetchStrapiComponentsData({
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
                fetchStrapiComponentsData({
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
                      fetchStrapiComponentsData({
                        apiRoute: related.__contentType.split('.')[1],
                        signal: request.signal,
                      })
                    }
                    element={<Main key={related.__contentType.split('.')[1]} />}
                  />
                )
              );
            })
          )}
          <Route element={<Error />} path="error" />
          <Route path="*" element={<h1>Not Found</h1>} />
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
