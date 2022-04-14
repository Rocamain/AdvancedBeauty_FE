import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import filterNavigationLinks from './components/pages/main/HeaderUtils/filterNavigationLinks.js';
import useFetchData from './hooks/useFetchData';

// Page and layout imports
import { Error, Loading } from './components/index';

import Body from '../src/components/Body';
import ComponentSelector from './components/pages/main/ComponentSelector';

// Component

function App() {
  const { error, loading, data } = useFetchData('menu');

  // if the data has links store false or the links.
  let navigationLinks = data?.data?.links
    ? filterNavigationLinks(data.data.links, true)
    : false;

  return (
    <div className="App">
      {loading && <Loading />}
      {error && <Error />}
      {navigationLinks && (
        <Router>
          <Routes>
            <Route path="/" element={<Body />}>
              {navigationLinks.map((navLink, index) => (
                <Route
                  key={index}
                  index={navLink.url === '/' ? true : false}
                  path={navLink.url}
                  element={<ComponentSelector name={navLink.name} />}
                />
              ))}

              <Route path={'*'} element={<h1> Not found!!</h1>} />
            </Route>
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
