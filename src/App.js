import useNavigation from './hooks/useNavigation';
import { Error, Loading } from './components/shared/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import React from 'react';

const LazyMain = React.lazy(() => import('components/Main'));

function App() {
  const routes = useNavigation();

  if (!routes) {
    <Loading />;
  }

  return (
    <>
      {routes && (
        <Router>
          <Routes>
            <Route path="/" element={<Body routes={{ ...routes }} />}>
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
                        <React.Suspense fallback={'loading...'}>
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
    </>
  );
}

export default App;
