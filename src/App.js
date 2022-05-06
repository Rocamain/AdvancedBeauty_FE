import useFetchData from './hooks/useFetchData';

import { Error, Loading } from './components/shared/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import ComponentSelector from './components/ComponentSelector';
import { getRoutesLinks } from './hooks/utils';

function App() {
  const { error, loading, data } = useFetchData('menu');

  return (
    <div className="App">
      {loading && <Loading />}
      {error && <Error />}

      {data && (
        <Router>
          <Routes>
            <Route path="/" element={<Body />}>
              {getRoutesLinks(data).map((navLink, index) => {
                return (
                  <Route
                    key={index}
                    index={navLink.routePath === '/' ? true : false}
                    path={navLink.routePath !== '/' && navLink.routePath}
                    element={<ComponentSelector name={navLink.route} />}
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
