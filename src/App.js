import useFetchData from './hooks/useFetchData';

import { Error, Loading } from './components/shared/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import React from 'react';
import { getRoutesLinks } from './hooks/utils';
const LazyMain = React.lazy(() => import('./components/Main'));

function App() {
  const { error, loading, data } = useFetchData('menu');
  console.log(data);
  return (
    <div className="App">
      {loading && <Loading />}
      {error && <Error />}

      {data && (
        <Router>
          <Routes>
            <Route path="/" element={<Body />}>
              {getRoutesLinks(data).map((navLink, index) => {
                console.log(navLink.route, navLink.routePath);
                return (
                  <Route
                    key={index}
                    index={navLink.routePath === '/' ? true : false}
                    path={navLink.routePath !== '/' && navLink.routePath}
                    element={
                      <React.Suspense fallback={'loading...'}>
                        <LazyMain routeName={navLink.route} />
                      </React.Suspense>
                    }
                  />
                );
              })}
            </Route>
            <Route path="*" element={<h1>Notfound</h1>} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
