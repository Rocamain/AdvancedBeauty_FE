import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

//  page and layout imports

import Body from '../src/components/Body';
import ComponentSelector from '../src/components/main/ComponentSelector';

//  graphql query  get Menu

const MENU = gql`
  query getMenu {
    menu {
      data {
        id
        attributes {
          links {
            ... on ComponentMenuLink {
              name
              url
            }
            ... on ComponentMenuDropdown {
              name
              url
              style
              dropdown_link {
                ... on MenuSectionEntityResponse {
                  data {
                    attributes {
                      links {
                        name
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

//  Due to the level of nesting, decide to create some functions to sanitize and format the object received.
// https://forum.strapi.io/t/discussion-regarding-the-complex-response-structure-for-rest-graphql-developer-experience/13400/35
//  To be move to a  utils file

const filterUniqueLinks = (dropdown_links, rootURL) => {
  return dropdown_links.filter((dropdownLink) => {
    const isUnique = !dropdownLink.url.includes(`#`);

    if (isUnique) {
      const { name, url } = dropdownLink;
      return { name, url };
    }
  });
};

const sanitizeData = (links) =>
  links.reduce(function (allLinks, navLink) {
    const hasDropdownLink = navLink?.dropdown_link?.data?.attributes?.links
      ? true
      : false;
    const dropdownLinks = navLink?.dropdown_link?.data?.attributes?.links;

    const link = hasDropdownLink
      ? {
          name: navLink.name,
          url: navLink.url,
          dropdownLinks: filterUniqueLinks(dropdownLinks, navLink.url),
        }
      : { name: navLink.name, url: navLink.url };

    return [...allLinks, link];
  }, []);

// Component

function App() {
  const { err, data, loading } = useQuery(MENU);

  if (loading) {
    return <h1>loading</h1>;
  }

  if (err) {
    return <h1>`Error! ${err.message}`</h1>;
  }

  const { links } = data.menu.data.attributes;
  const formattedLinksData = sanitizeData(links);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Body />}>
            {formattedLinksData.map((link, index) => {
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
