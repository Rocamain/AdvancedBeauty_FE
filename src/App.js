import useNavigation from 'hooks/useNavigation';
import { Loading } from 'components/shared/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import React from 'react';

//  Lazy Components

const LazyMain = React.lazy(() => import('components/Main'));
const LazyErrorPage = React.lazy(() =>
  import('components/main/errorPage/ErrorPage')
);
const LazyConfirmationPage = React.lazy(() =>
  import('components/main/confirmationPage/ConfirmationPage')
);

//  App Component

function App() {
  const routes = useNavigation();

  return (
    <>
      {routes && (
        <Router>
          <Routes>
            <Route path="/" element={<Body routes={{ ...routes }} />}>
              <Route
                path="error"
                element={
                  <React.Suspense fallback={<Loading />}>
                    <LazyErrorPage />
                  </React.Suspense>
                }
              />
              <Route
                path="confirmation"
                element={
                  <React.Suspense fallback={<Loading />}>
                    <LazyConfirmationPage />
                  </React.Suspense>
                }
              />
              {routes.nestedList.map((navRoute, index) => (
                <Route
                  key={index}
                  index={navRoute.path === '/' ? true : false}
                  path={navRoute.path !== '/' && navRoute.path}
                  element={
                    <React.Suspense fallback={<Loading />}>
                      <LazyMain />
                    </React.Suspense>
                  }
                >
                  {navRoute.items.map((navSubRoute, index) => (
                    <Route
                      key={index}
                      path={navSubRoute.path}
                      element={
                        <React.Suspense fallback={<Loading />}>
                          <LazyMain />
                        </React.Suspense>
                      }
                    />
                  ))}
                </Route>
              ))}
            </Route>

            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </Router>
      )}
      ;
    </>
  );
}

export default App;
