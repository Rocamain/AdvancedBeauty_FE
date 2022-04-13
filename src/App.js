import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import navLinksFormtr from './utils/navLinksFormtr';
// query

import GETMENU from '../src/queries/getMenu';

// Page and layout imports

import Body from '../src/components/Body';
import ComponentSelector from './components/pages/main/ComponentSelector';

// Component

function App() {
  const { err, data, loading } = useQuery(GETMENU);

  if (loading) {
    return <h1>loading</h1>;
  }

  if (err) {
    return <h1>`Error! ${err.message}`</h1>;
  }

  const { formattedLinks, ...logoData } = navLinksFormtr(data);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Body />}>
            {formattedLinks.map((link, index) => {
              const hasDropdownLinks =
                link?.dropdownLinks?.length > 0 ? true : false;

              return !hasDropdownLinks ? (
                <Route
                  key={index}
                  index={index === 0 ? true : false}
                  path={index !== 0 && link.url}
                  element={<ComponentSelector name={link.name} />}
                />
              ) : (
                <Route
                  key={index}
                  path={'/' + link.url}
                  exact
                  element={<ComponentSelector name={link.name} />}
                >
                  {link.dropdownLinks.map((dropdownLink, i) => {
                    return (
                      <Route
                        key={i + 'A'}
                        exact
                        path={'/' + link.url + '/' + dropdownLink.url}
                        element={<ComponentSelector name={dropdownLink.name} />}
                      />
                    );
                  })}
                </Route>
              );
            })}
            <Route path={'*'} element={<h1> Not found!!</h1>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
