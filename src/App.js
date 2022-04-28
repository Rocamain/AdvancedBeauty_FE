import useFetchData from './hooks/useFetchData';
import { Error, Loading } from './components/shared/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import ComponentSelector from './components/ComponentSelector';

function App() {
  const { error, loading, data } = useFetchData('menu', 'routes');

  return (
    <div className="App">
      {loading && <Loading />}
      {error && <Error />}
      {data?.links && (
        <Router>
          <Routes>
            <Route path="/" element={<Body />}>
              {data.links.map((navLink, index) => (
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
